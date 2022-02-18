import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Form, Button } from "react-bootstrap";
import logoStrawberry from "../assets/logoStrawberry.png";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";
import loadingSpinner from "../assets/spinnerLoading.gif";

const NewAccount = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
    repassword: "",
    newsletter: true,
    firstName: "",
    lastName: "",
    address: "",
    addressNumber: "",
    apartmentNumber: "",
    constructionCode: "",
    city: "",
    phoneNumber: "",
  });

  const {
    email,
    password,
    repassword,
    firstName,
    lastName,
    address,
    addressNumber,
    apartmentNumber,
    constructionCode,
    city,
    phoneNumber,
  } = user;

  const onChange = (e) => {
    try {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeChecked = (e) => {
    try {
      setUser({
        ...user,
        [e.target.name]: e.target.checked,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      const res = await axios.post("http://localhost:4000/user/register", user);
      setUser({
        email: "",
        password: "",
        repassword: "",
        newsletter: true,
        firstName: "",
        lastName: "",
        address: "",
        addressNumber: "",
        apartmentNumber: "",
        constructionCode: "",
        city: "",
        phoneNumber: "",
      });
      setIsLoading(false);
      swal("🍓🍓", res.data.message, "success");
    } catch (error) {
      if (error.response.data.message) {
        swal("Oh no!", error.response.data.message, "error");
        setIsLoading(false);
      }
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="spinner__container">
        <img className="spinner__image" src={loadingSpinner} alt="Loading..." />
      </div>
    );
  } else {
    return (
      <div className="container">
        <img className="logo" src={logoStrawberry} alt="Logo Strawberry" />
        <h1 className="container__text">
          אפשרות משלוח &lt; אמצעי תשלום &lt;
          <span className="container__text--color">פרטי לקוח</span>
        </h1>

        <Form onSubmit={onSubmit}>
          <div className="userinfo__container">
            <div className="userinfo__container__text">
              <p className="userinfo__text">פרטי משתמש</p>
              <span className="userinfo__login">
                האם ברשותך חשבון באתר?
                <button
                  type="button"
                  className="userinfo__button"
                  onClick={() => setShowModal(true)}
                >
                  התחבר/י לחשבון
                </button>
              </span>
            </div>
            <Form.Control
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
            />

            <div className="d-flex mt-4">
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="******"
                value={password}
                onChange={onChange}
              />

              <Form.Control
                className="form__input"
                type="password"
                name="repassword"
                id="repassword"
                placeholder="******"
                value={repassword}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="shipping__container">
            <div className="d-flex newsletter__container">
              <Form.Check
                className="form__checkbox"
                type="checkbox"
                value="newsletter"
                onChange={onChangeChecked}
                name="newsletter"
                id="newsletter"
                defaultChecked
              />
              <Form.Label htmlFor="newsletter" className="newsletter__text">
                אני מאשר/ת קבלת פרסומים למייל
              </Form.Label>
            </div>

            <p className="shipping__text">כתובת למשלוח</p>
            <div className="d-flex mt-0">
              <Form.Control
                type="text"
                name="firstName"
                id="firstName"
                placeholder="*שם פרטי"
                value={firstName}
                onChange={onChange}
                required
              />

              <Form.Control
                className="form__input"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="*שם משפחה"
                value={lastName}
                onChange={onChange}
                required
              />
            </div>

            <div className="d-flex mt-4">
              <Form.Control
                type="text"
                name="address"
                id="address"
                placeholder="*כתובת- רחוב, מס׳ בית, עיר"
                value={address}
                onChange={onChange}
                required
              />

              <Form.Control
                className="form__input"
                type="text"
                name="addressNumber"
                id="addressNumber"
                placeholder="*מס׳ בית"
                value={addressNumber}
                onChange={onChange}
                required
              />
            </div>

            <div className="d-flex mt-4">
              <Form.Control
                className="form__input__city"
                type="text"
                name="city"
                id="city"
                placeholder="*עיר"
                value={city}
                onChange={onChange}
                required
              />

              <Form.Control
                className="form__input"
                type="text"
                name="apartmentNumber"
                id="apartmentNumber"
                placeholder="דירה / כניסה"
                value={apartmentNumber}
                onChange={onChange}
              />

              <Form.Control
                className="form__input"
                type="text"
                name="constructionCode"
                id="constructionCode"
                placeholder="קוד לבניין"
                value={constructionCode}
                onChange={onChange}
              />
            </div>

            <Form.Control
              className="form__input__phoneNumber mt-4"
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="*טלפון"
              value={phoneNumber}
              onChange={onChange}
              required
            />

            <div className="button__form">
              <button type="button" className="button__return">
                חזרה לעגלת הקניות &gt;
              </button>
              <Button type="submit" className="rounded-pill button__options">
                המשך לאפשרויות משלוח
              </Button>
            </div>
          </div>
        </Form>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <span className="btn-close--circle"></span>
          <Modal.Header closeButton></Modal.Header>
          <Login />
        </Modal>
      </div>
    );
  }
};

export default NewAccount;
