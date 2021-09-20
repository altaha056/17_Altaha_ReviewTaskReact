const ADD_MESSAGE = "ADD_MESSAGE";
const initialValue = {
  name: "no name",
  email: "no email",
  phone: "no number",
  nationality: "nationality unknown",
  message: "no message",
};

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
