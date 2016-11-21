import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'

import userStore from '../../../../stores/UserStore'

import * as firebase from 'firebase';

import './DetailViewer.scss'

@observer
export default class DetailViewer extends Component {
  updateC() {
    $('.confirmations_data').html(Number($('.confirmations_data').text()) + 1);

  }

  render() {
    return (
      <div class='detail_viewer_container'>
        <div class='title'>
          Avoid This Area
        </div>

        <div class='rating'>
          <b>Rating:</b> <section class='rate_data'>Purple</section>
          <br style={{marginTop: 10}} />
          <b>Confirmations:</b> <section class='confirmations_data'>26</section>
        </div>
        
        <div class='confirm'>
          <button class="ui inverse red button" onClick={this.updateC.bind(this)}>
            Confirm its Busy Here
          </button>
        </div>
      </div>
    )
  }
}
