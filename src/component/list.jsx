
import React from "react"

import { observer } from "mobx-react"

import {
  sty_list
} from "./style"

@observer
export default class List extends React.Component {

  constructor(props) {
    super(props)
  }

 

  render() {
    const store = this.props.store
    const { list, search, count, fetchFinish } = store

    if (!count && fetchFinish) {
      return <div style={sty_list.noData}>no data</div>
    }
    return <div className='listwrap'>
      {
        list.map(item => {
          return (
            <div key={item.id} style={sty_list.list_item}>
              <p style={sty_list.header}>
                <img style={sty_list.avatar} src={item.owner.avatar_url} />
                <a href={item.html_url} target='blank' style={sty_list.fullname}>{item.full_name}</a>
                <span style={sty_list.right}>
                  <span>{item.language}</span>
                  <span style={sty_list.star}>{store.computedStarCount(item.stargazers_count)} star</span>
                </span>
              </p>
              <p style={sty_list.des}>{item.description}</p>
            </div>
          )
        })
      }
    </div>

  }

}