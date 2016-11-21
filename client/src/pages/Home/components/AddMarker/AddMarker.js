import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'

import userStore from '../../../../stores/UserStore'

import * as firebase from 'firebase'

import './AddMarker.scss'

@observer
export default class AddMarker extends Component {

  constructor() {
    super();
    this.state = {
      color: null
    }
  }

  submit() {
    navigator.geolocation.getCurrentPosition((position) => {
      firebase.database().ref('markers/' + firebase.database().ref().child('markers').push().key).set({
        'lat': position.coords.latitude,
        'lng': position.coords.longitude,
        'color': this.state.color,
        'confirmations': 0
      });
    })
  }

  colorSelect(e) {
    this.setState({
      color: e.currentTarget.textContent
    })

    let desc = '';

    switch(e.currentTarget.textContent) {
      case 'Yellow':
        desc = '<b>Yellow</b>: Harder than a usual street to navigate. Unable to walk at a fast pace.';
        break;
      case 'Red':
        desc = '<b>Red:</b> Everyone is walking at a slow pace and its difficult to even get past people.'
        break;
      case 'Black':
        desc = '<b>Black:</b> You might as well be at a concert, everyone is moving at a snails pace if moving at all'
        break;
    }

    $('.confirm button').show();
    $('.add_marker_container .rating .description').html(desc);
  }

  render() {
    return (
      <div class='add_marker_container'>
        <div class='title'>
          Add Avoidance
        </div>

        <div class='rating'>
          Rating:
          <br />
          <div class='select'>
            <button class="ui inverse yellow button" onClick={this.colorSelect.bind(this)}>
              Yellow
            </button>
            <button class="ui inverse red button" onClick={this.colorSelect.bind(this)}>
              Red
            </button>
            <button class="ui inverse black button" onClick={this.colorSelect.bind(this)}>
              Black
            </button>
          </div>

          <div class='description'>
          </div>
        </div>

        <div class='confirm'>
          <button class="ui inverse red button" onClick={this.submit.bind(this)}>
            Confirm
          </button>
        </div>
      </div>
    )
  }
}
