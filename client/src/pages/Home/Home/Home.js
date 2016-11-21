import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';

import Marker from '../components/Marker/Marker';

import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import axios from 'axios'

import DetailViewer from '../components/DetailViewer/DetailViewer'
import AddMarker from '../components/AddMarker/AddMarker'

import * as firebase from 'firebase';

import userStore from '../../../stores/UserStore'
import './Home.scss'

@observer
export default class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      markerArray: null
    }
  }

  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any,
    onCenterChange: PropTypes.func
  };

  static defaultProps = {
    center: [51.515419, -0.141099],
    zoom: 16,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  _onClick = ({x, y, lat, lng, event}) => {
    $('.detail_viewer_container').slideUp('slow');
    $('.add_marker_container').slideUp('slow');
  }

  _onChildClick = (key, childProps) => {
    $('.detail_viewer_container').slideDown('slow');
    $('.rate_data').html(childProps.color);
    $('.confirmations_data').html(childProps.confirmations);
  }

  componentDidMount() {
    firebase.database().ref('markers').on('value', (data) => {
      var markerArray = [];

      for(let key in data.val()) {
        let current = data.val()[key];
        markerArray.push(
          <Marker lat={current.lat} lng={current.lng} color={current.color} confirmations={current.confirmations} key={key} />
        )
      }
      
      this.setState({
        markerArray: markerArray
      })
    });
  }

  render() {
    return (
      <div class='map_container'>
        <GoogleMap
          center={this.props.center}
          zoom={this.props.zoom}
          hoverDistance={40 / 2}
          onClick={this._onClick}
          onChildClick={this._onChildClick}
        >
          <Marker lat={51.515419} lng={-0.141099} color={'Red'} confirmations={12} hover={this.props.hoverKey} />
          {this.state.markerArray}
        </GoogleMap>
        <AddMarker />
        <DetailViewer />
      </div>
    );
  }
}
