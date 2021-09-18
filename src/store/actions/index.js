import { ADD_MESSAGE, UPDATE_NEWS } from "./actionTypes";

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
