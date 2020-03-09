import React, { Component } from 'react'
import FeatureItem from "../Components/FeatureItem";

export class MainForm extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => <FeatureItem feature={feature} idx={idx} features={this.props.features} state={this.props.state} updateFeature={this.props.updateFeature}/>);

    return (
      <form className="main__form">
          <h2>Customize your laptop</h2>
          {features}
      </form>
    )
  }
}

export default MainForm
