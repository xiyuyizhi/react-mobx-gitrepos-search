
import React from "react"

import {observer} from "mobx-react"

import {
  sty_search
} from "./style.js"

@observer
export default class Search extends React.Component {

  render() {
    const { store } = this.props
    return <form style={sty_search.form} onSubmit={(e)=>{
      e.preventDefault()
    }}>
      <input type='text' style={sty_search.input} placeholder='eg:input react,支持滚动加载' onInput={(e)=>{
        e.stopPropagation()
        store.getUserInput(e.target.value)
      }} />
      {
        store.fetchStart && <span style={sty_search.loadding}>loading....</span>
      }
    </form>

  }

}