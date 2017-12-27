

import React from "react"


export default class Scroll extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
  }


  scroll() {
    const documentScrollHeight = document.documentElement.scrollHeight
    if (documentScrollHeight - this.viewHeight < window.scrollY + 30) {
      this.props.store.setLoadNext(true)
    }
  }

  componentDidMount() {
    this.viewHeight = document.documentElement.clientHeight
    window.addEventListener('scroll', this.scroll.bind(this))
  }


  componentWillUnmount() {
    window.removeEventListener('scroll',this.scroll)
  }

  render() {

    return <div>
      {this.props.children}
    </div>
  }

}