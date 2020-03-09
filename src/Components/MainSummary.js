import React, { Component } from 'react'
import SummaryOption from '../Components/SummaryOption'
import SummaryTotal from '../Components/SummaryTotal'

export class MainSummary extends Component {
  render() {
    const summary = Object.keys(this.props.state.selected).map((feature, idx) => <SummaryOption feature={feature} idx={idx} state={this.props.state}/>);

    return (
      <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <SummaryTotal state={this.props.state}/>
          </section>
    )
  }
}

export default MainSummary
