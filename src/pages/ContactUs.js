import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addMessage } from "../store/actions";

const ContactUs = () => {
  const fullNameRef = useRef();
  const emailAddressRef = useRef();
  const phoneNumberRef = useRef();
  const nationalityRef = useRef();
  const messageRef = useRef();

  const [error, setError] = useState({
    errName: null,
    errEmail: null,
    errPhone: null,
  });

  const [newMessage, setNewMessage] = useState({
    name: "",
    email: "",
    phone: "",
    nationality: "",
    message: "",
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const name = fullNameRef.current.value;
    const email = emailAddressRef.current.value;
    const phone = phoneNumberRef.current.value;
    const nationality = nationalityRef.current.value;
    const message = messageRef.current.value;

    if (name === "") {
      setError((error) => {
        return { ...error, errName: "  can not be empty" };
      });
    } else if (!name.match(/^[a-zA-Z ]*$/)) {
      setError((error) => {
        return { ...error, errName: " is only accepted letter" };
      });
    } else {
      setError((error) => {
        return { ...error, errName: "" };
      });
    }

    if (email === "") {
      setError((error) => {
        return { ...error, errEmail: "  can not be empty" };
      });
    } else if (
      !email.match(
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      )
    ) {
      setError((error) => {
        return { ...error, errEmail: "  is not valid" };
      });
    } else {
      setError((error) => {
        return { ...error, errEmail: "" };
      });
    }

    if (phone === "") {
      setError((error) => {
        return { ...error, errPhone: "  can not be empty" };
      });
    } else if (!phone.match(/^[0-9]{9,14}$/)) {
      setError((error) => {
        return { ...error, errPhone: "  is only accept number 9-14 length" };
      });
    } else {
      setError((error) => {
        return { ...error, errPhone: "" };
      });
    }

    setNewMessage({
      name,
      email,
      phone,
      nationality,
      message,
    });
  };

  useEffect(() => {
    if (
      error.errName === "" &&
      error.errEmail === "" &&
      error.errPhone === ""
    ) {
      dispatch(addMessage(newMessage));
      history.push("/message");
    }
  }, [dispatch, error, history, newMessage]);

  return (
    <main className="main--form">
      <div className="container-fluid">
        <div className="row">
          <div
            className="
                col-lg-5
                d-md-none d-lg-flex
                justify-content-center
                align-items-center
                left
              "
          >
            <img src="./img/logo-ALTA-v2@2x.png" alt="" className="img--logo" />
          </div>
          <div className="col-lg-7 col-md-12 p-5">
            <div className="container p-5">
              <h1 className="mb-5">Contact Us</h1>
              <form onSubmit={onSubmitHandler}>
                <div className="mb-4">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                    {error.errName !== "" && (
                      <small className="text-danger ">{error.errName}</small>
                    )}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Your Full Name Here..."
                    ref={fullNameRef}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email Address
                    {error.errEmail && (
                      <small className="text-danger">{error.errEmail}</small>
                    )}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="example@domail.com"
                    ref={emailAddressRef}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                    {error.errPhone && (
                      <small className="text-danger ">{error.errPhone}</small>
                    )}
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="08573890xxxxx"
                    ref={phoneNumberRef}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="fullName" className="form-label">
                    Nationality
                  </label>
                  <select className="form-select" ref={nationalityRef}>
                    <option value="ind">Indonesia</option>
                    <option value="eng">English</option>
                    <option value="oth">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <br />
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message Here..."
                    className="message"
                    ref={messageRef}
                  ></textarea>
                </div>

                <button type="submit" className="btn py-2 px-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
