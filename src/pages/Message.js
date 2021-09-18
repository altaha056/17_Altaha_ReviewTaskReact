import { useSelector } from "react-redux";

const Message = () => {
  const { name, email, phone, nationality, message } = useSelector((state) => state.message);
  return (
    <main className="main--message">
      <div className="message--card">
        <p>Full Name : {name}</p>
        <p>Email Address: {email}</p>
        <p>Phone Number : {phone}</p>
        <p>Nationality : {nationality}</p>
        <p className="message__content fst-italic">{message}</p>
        <div className="divider"></div>
        <p className="message__end">
          Thanks for contacting us! <br />
          We will be in touch with you shortly.
        </p>
        <a href="./" className="btn">
          Home
        </a>
      </div>
    </main>
  );
};

export default Message;
