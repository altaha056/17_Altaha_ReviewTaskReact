import { ADD_MESSAGE } from "../actions/actionTypes";

const initialValue = { name: "", email: "", phone: "", nationality: "", message: "" };

const messageReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const { message } = action.payload;
      return message;
    }
    default: {
      return state;
    }
  }
};

export default messageReducer;
