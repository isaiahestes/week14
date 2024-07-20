// Using what you've learned this week, create a page of an application that enables users to vote and leave reviews on movies.
// All data necessary for this assignment, including Movies and Reviews, create an array moviearray and reviewsarray.
// Your application must include the following components:
// MovieList: a container for all the Movie components and their data.  
// Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
// Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
// ReviewList: a container inside of a Movie that houses Review components.
// Review: A text review a user can leave on a movie.
// ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.
import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie }) => {
  // this creats a variable to use later to add to state
  const [reviews, setReviews] = useState(movie.reviews);
  const [rating, setRating] = useState(movie.rating);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    // This is what is shown for each movie
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Release Date: {movie.releaseDate}</p>
      {/* This calls the star component and passes the props of state */}
      <Stars initialRating={rating} onRatingChange={handleRatingChange} />
      {/* This calls the reviewlist Componant and passes the props of state */}
      <ReviewList reviews={reviews} />
      {/* This calls the reviewform componant and passes the props of state  */}
      <ReviewForm addReview={addReview} />
    </div>
  );
};

export default Movie;