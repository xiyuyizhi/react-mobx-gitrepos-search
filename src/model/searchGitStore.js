
import { observable, autorun, autorunAsync, computed } from "mobx"

import {
  fetchRepos
} from "./api"

export default class SearchGit {

  @observable search = ''
  @observable list = []
  @observable fetchFinish = false
  @observable fetchStart = false
  @observable loadNext = false
  @observable page = 1

  @computed get count() {
    return this.list.length
  }


  constructor() {
    autorun(()=>{
      if(this.search){
        this.page=1
      }
    })

    autorunAsync(() => {
      //这里监听了两个变量，search、page
      //search变化的话搜索了新的值，page应该置为1,见上面的authrun
      if (!this.search) return
      this.fetchStart = true
      fetchRepos(this.search, this.page).then(data => {
        if (this.loadNext) {
          this.list = this.list.concat(data.items)
        } else {
          this.list = data.items
        }

        this.fetchFinish = true
        this.fetchStart = false
        this.loadNext = false
      })

    }, 1000)

    autorunAsync(() => {
      if (this.loadNext) {
        this.page++
      }
    })

  }

  setLoadNext(val) {
    this.loadNext = val
  }

  getUserInput(value) {
    this.search = value
  }

  computedStarCount(count) {
    if (count > 1000) {
      return (count / 1000).toFixed(1) + 'k'
    }
    return count
  }

}