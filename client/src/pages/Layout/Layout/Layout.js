import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'

import userStore from '../../../stores/UserStore'

import NavBar from '../components/Navigation/NavBar'

import './Layout.scss'

@observer
export default class Layout extends Component {

  render() {
    return (
      <div class='layout_container'>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}
