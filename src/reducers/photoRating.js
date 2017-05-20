const rating = (state, action) => {
  switch (action.type) {
    case 'CHANGE_RATING':
      const rating = state.id === action.id ? action.rating : state.rating;
      return {
        ...state,
        rating
      };
    default:
      return state;
  }
};

const photoRating = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_RATING':
      return state
        .map(item => rating(item, action))
        .sort((a, b) => a.rating - b.rating);
    default:
      return state;
  }
};

export default photoRating;
