import React from 'react';
import UserList from './UserList.js';

function MovieCard({ movie }) {
  return (
  	<li key={movie.id}>
    	<h2>{movie.name}</h2>
		{!movie.users || movie.users.length === 0 ? (
  			<p>None of the current users liked this movie</p>
  		) : (
  			<div>
    			<h3>Liked By:</h3>
    			<UserList favoriteUsers={movie.users} />
			</div>
  		)}
    </li>
  )
}

export default MovieCard