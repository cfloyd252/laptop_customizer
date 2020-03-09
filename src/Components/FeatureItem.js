import React, { Component } from 'react'
import Option from './Option';

export class FeatureItem extends Component {
  render() {
    const featureHash = this.props.feature + '-' + this.props.idx;
    const options = this.props.features[this.props.feature].map(item => <Option item={item} state={this.props.state} feature={this.props.feature} updateFeature={this.props.updateFeature}/>);

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}

export default FeatureItem
