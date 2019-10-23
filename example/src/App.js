import React, { Component } from 'react'

import { ExampleComponent } from 'foreign-visitors-react-library'

export default class App extends Component {
  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <ExampleComponent />
          </div>
        </div>
      </div>
    )
  }
}
