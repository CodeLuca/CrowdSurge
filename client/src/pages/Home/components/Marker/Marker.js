import React, {PropTypes, Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import { MarkerStyles, MarkerHover } from './MarkerStyles';

export default class Marker extends Component {
  static propTypes = {
    $hover: PropTypes.bool,
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    const style = this.props.$hover ? MarkerHover : MarkerStyles;

    return (
       <div style={style}>
          {this.props.text}
       </div>
    );
  }
}