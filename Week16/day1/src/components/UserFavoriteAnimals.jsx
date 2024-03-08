import React, { Component } from 'react';

class UserFavoriteAnimals extends Component {
  render() {
    const { favAnimals = [] } = this.props;
    return (
      <ul>
        {Array.isArray(favAnimals) && favAnimals.length > 0 ? favAnimals.map((animal, index) => (
          <li key={`${animal}-${index}`}>{animal}</li>
        )) : <li>No favorite animals</li>}
      </ul>
    );
  }
}

export default UserFavoriteAnimals;