import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'

import './NavBar.scss'

export default class NavBar extends Component {

  add() {
     $('.add_marker_container').slideDown('slow');
  }

  render() {
    return (
      <div class='navbar_container'>
        <div class="ui inverted massive menu">
          <a class="item">CrowdSurge</a>
          <a class='right item' onClick={this.add}>
            +
          </a>
        </div>
      </div>
    )
  }
}
