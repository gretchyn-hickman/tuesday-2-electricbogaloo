const initialState = {
  favs: [
    { title: "movie", id: 1 },
    { title: "Second", id: 2 },
  ],
  displayFavs: true,
};

const favsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default favsReducer;
