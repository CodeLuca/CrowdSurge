import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'

import userStore from '../../../stores/UserStore'

import './NotFound.scss'

export default class NotFound extends Component {

  render() {
    return (
      <div className="notFound_conatiner">
        <h1 class='title'>404 - Page not found.</h1>
      </div>
    )
  }
}
