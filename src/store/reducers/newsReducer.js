const UPDATE_NEWS = "UPDATE_NEWS";

const newsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_NEWS: {
      const { news } = action.payload;
      return news;
    }
    default: {
      return state;
    }
  }
};

export default newsReducer;
