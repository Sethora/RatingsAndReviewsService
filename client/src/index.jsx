import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Title from './Title.jsx'
import RatingsSummary from './RatingsSummary.jsx'
import WriteReview from './WriteReview.jsx'
import RatingsTable from './RatingsTable.jsx'
import AverageStars from './AverageStars.jsx'
import Reviews from './Reviews.jsx'

import controllers from '../controllers/controllers.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      averageStars: 0,
      totalNumberReviews: 0,
      barData: [
        {stars: 5, total: 50},
        {stars: 4, total: 40},
        {stars: 3, total: 30},
        {stars: 2, total: 20},
        {stars: 1, total: 10}
      ],
      users: [],
      reviews: []
    }
  }



  componentDidMount() {
    controllers.displayReviews()
      .then((response) => {
        var totalStars = 0;
        var totalOneStars = 0;
        var totalTwoStars = 0;
        var totalThreeStars = 0;
        var totalFourStars = 0;
        var totalFiveStars = 0;
        var average = 0;
        for (var i = 0; i < response.data.length; i++) {
          totalStars += response.data[i].stars
          if (response.data[i].stars === 1) {
            totalOneStars += 1;
          } else if (response.data[i].stars === 2) {
            totalTwoStars += 1;
          } else if (response.data[i].stars === 3) {
            totalThreeStars += 1;
          } else if (response.data[i].stars === 4) {
            totalFourStars += 1;
          } else {
            totalFiveStars += 1;
          }
        }
        average = totalStars / response.data.length;
        this.setState({
          averageStars: average,
          totalNumberReviews: response.data.length,
          barData: [
            {stars: 5, total: totalFiveStars},
            {stars: 4, total: totalFourStars},
            {stars: 3, total: totalThreeStars},
            {stars: 2, total: totalTwoStars},
            {stars: 1, total: totalOneStars}
          ],
          reviews: response.data
        })
        //console.log(this.state.reviews)
      })
      controllers.displayUsers()
        .then((response) => {
          this.setState({
            users: response.data
          })
        })
  }


  render() {
    return (
      <div>
        <Title />
        <div>
          <RatingsSummary totalNumberReviews={this.state.totalNumberReviews} />
          <AverageStars averageStars={this.state.averageStars}/>
        </div>
          <div>
            {this.state.barData.map((data) => (
              <RatingsTable barData={data} />
            ))}
          </div>
              {this.state.users.slice(0, 5).map((user) => (
                <Reviews user={user} reviews={this.state.reviews} />
              ))}



      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));