import React from 'react';
import ReactDOM from 'react-dom'

import Title from './Title.jsx'
import ReviewsSummary from './ReviewsSummary.jsx'

import controllers from '../controllers/controllers.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageStars: 0,
      totalNumberReviews: 0
    }
  }

  componentDidMount() {
    controllers.displayReviews()
      .then((response) => {
        var totalStars = 0;
        var average = 0;
        for (var i = 0; i < response.data.length; i++) {
          totalStars += response.data[i].stars
        }
        average = totalStars / response.data.length;
        this.setState({
          averageStars: average,
          totalNumberReviews: response.data.length
        })
      })
  }

  render() {
    return (
      <div>
        <Title />
          <div>
            <ReviewsSummary averageStars={this.state.averageStars} totalNumberReviews={this.state.totalNumberReviews} />
          </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));