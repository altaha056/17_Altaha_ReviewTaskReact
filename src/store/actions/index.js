const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEWS = "UPDATE_NEWS";

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    payload: { message },
  };
};

export const updateNews = (news) => {
  return {
    type: UPDATE_NEWS,
    payload: { news },
  };
};
