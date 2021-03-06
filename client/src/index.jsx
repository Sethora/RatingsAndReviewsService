import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import styled from 'styled-components';

import Title from './Title.jsx';
import WriteReview from './WriteReview.jsx';
import RatingsSummary from './RatingsSummary.jsx';
import RatingsTable from './RatingsTable.jsx';
import AverageStars from './AverageStars.jsx';
import Reviews from './Reviews.jsx';
import Filter from './Filter.jsx';

import controllers from '../controllers/controllers.js';

const AppStyles = styled.div`
  max-width: 70%;
  width: 70%;
  margin: 0 auto;
`;

const RatingStyles = styled.div`
  display: flex;
  max-width: 90%;
  margin: 0 auto;
  justify-content: space-between;
`;

const WrapperStyles = styled.div`
  margin: 0 5%;
`;

const StaringStyles = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 90%;
  width: 90%;
  .tablestyles {
    display: flex;
    flex-direction: column;
  }
`;

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
        console.log('all reviews', response)
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
        <AppStyles>
            <Title />
              <WrapperStyles>
                <RatingStyles>
                  <RatingsSummary totalNumberReviews={this.state.totalNumberReviews} />
                  <WriteReview />
                </RatingStyles>
                <StaringStyles>
                  <div className="tablestyles">
                      {this.state.barData.map((data) => <RatingsTable
                              barData={data}
                              totalReviews={this.state.totalNumberReviews}/>)}
                  </div>
                  <AverageStars averageStars={this.state.averageStars} />
                </StaringStyles>
              </WrapperStyles>
              <Filter handleChange={this.handleChange.bind(this)}/>

            {this.state.reviews.map((review) => <Reviews  review={review} />)}
        </AppStyles>
    );
  }
}

ReactDOM.render(
      <App />,
document.getElementById('app')
);