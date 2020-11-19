import React from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import Title from './Title.jsx'
import RatingsSummary from './RatingsSummary.jsx'
import WriteReview from './WriteReview.jsx'
import RatingsTable from './RatingsTable.jsx'
import AverageStars from './AverageStars.jsx'
import Reviews from './Reviews.jsx'
import Filter from './Filter.jsx'

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
        console.log(response.data)
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
        average = (totalStars / response.data.length).toFixed(1);

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
      })
  }

  handleChange(event) {
    console.log(event.target.value)
    if(event.target.value === 'Highest Rating') {
      controllers.sortByHighestRating()
        .then((response) => {
          this.setState({
            reviews:response.data
          })
        })
    } else if (event.target.value === 'Lowest Rating') {
      controllers.sortByLowestRating()
        .then((response) => {
          this.setState({
            reviews: response.data
          })
        })
    } else if (event.target.value === 'Newest') {
      console.log('in newest if statement block')
      controllers.sortByNewest()
        .then((response) => {
          console.log(response.data)
          this.setState({
            reviews: response.data
          })
        })
    }
    else if (event.target.value === 'Oldest') {
      console.log('in oldest if statement block')
      controllers.sortByOldest()
        .then((response) => {
          console.log(response.data)
          this.setState({
            reviews: response.data
          })
        })
    } else if (event.target.value === 'Most Helpful') {
      console.log('in most helpful if statement block')
      controllers.sortByMostHelpful()
        .then((response) => {
          console.log(response.data)
          this.setState({
            reviews: response.data
          })
        })
    }
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
              <RatingsTable barData={data} totalReviews={this.state.totalNumberReviews}/>
            ))}
            <Filter handleChange={this.handleChange.bind(this)}/>
          </div>
              {this.state.reviews.map((review) => (
                <Reviews  review={review} />
              ))}



      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));