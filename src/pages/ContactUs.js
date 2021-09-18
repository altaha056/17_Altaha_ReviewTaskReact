import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addMessage } from "../store/actions";

const ContactUs = () => {
  const fullNameEl = useRef();
  const emailAddressEl = useRef();
  const phoneNumberEl = useRef();
  const nationalityEl = useRef();
  const messageEl = useRef();

  const [error, setError] = useState({
    errName: "",
    errEmail: "",
    errPhone: "",
  });

  const dispatch = useDispatch();

  const history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const name = fullNameEl.current.value;
    const email = emailAddressEl.current.value;
    const phone = phoneNumberEl.current.value;
    const nationality = nationalityEl.current.value;
    const message = messageEl.current.value;

    if (name === "") {
      setError((error) => {
        return { ...error, errName: "Full name can not be empty" };
      });
    } else if (!name.match(/^[a-zA-Z ]*$/)) {
      setError((error) => {
        return { ...error, errName: "Full name is only accepted letter" };
      });
    } else {
      setError((error) => {
        return { ...error, errName: "" };
      });
    }

    if (email === "") {
      setError((error) => {
        return { ...error, errEmail: "Email can not be empty" };
      });
    } else if (!email.match(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)) {
      setError((error) => {
        return { ...error, errEmail: "Email is not valid" };
      });
    } else {
      setError((error) => {
        return { ...error, errEmail: "" };
      });
    }

    if (phone === "") {
      setError((error) => {
        return { ...error, errPhone: "Phone number can not be empty" };
      });
    } else if (!phone.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)) {
      setError((error) => {
        return { ...error, errPhone: "Phone number is not valid" };
      });
    } else {
      setError((error) => {
        return { ...error, errPhone: "" };
      });
    }

    const newMessage = {
      name,
      email,
      phone,
      nationality,
      message,
    };

    if (error.errName === "" && error.errEmail === "" && error.errPhone === "") {
      dispatch(addMessage(newMessage));
      history.push("/message");
    }
  };

  return (
    <main className="main--form">
      <div className="container-fluid">
        <div className="row">
          <div
            className="
                col-lg-4
                d-md-none d-lg-flex
                justify-content-center
                align-items-center
                left
              "
          >
            <img src="./img/logo-ALTA-v2@2x.png" alt="" className="img--logo" />
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="container p-5">
              <h1>Contact Us</h1>
              <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input type="text" className="form-control" id="fullName" placeholder="Your Full Name Here..." ref={fullNameEl} />
                  {error.errName !== "" && <small className="text-danger form-text">{error.errName}</small>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input type="text" className="form-control" id="email" placeholder="example@domail.com" ref={emailAddressEl} />
                  {error.errEmail && <small className="text-danger form-text">{error.errEmail}</small>}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input type="text" className="form-control" id="phone" placeholder="08573890xxxxx" ref={phoneNumberEl} />
                  {error.errPhone && <small className="text-danger form-text">{error.errPhone}</small>}
                </div>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Nationality
                  </label>
                  <select className="form-select" ref={nationalityEl}>
                    <option value="ind">Indonesia</option>
                    <option value="eng">English</option>
                    <option value="oth">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <br />
                  <textarea name="message" id="message" placeholder="Your Message Here..." className="message" ref={messageEl}></textarea>
                </div>

                <button type="submit" className="btn">
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
