import { UPDATE_NEWS } from "../actions/actionTypes";

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
