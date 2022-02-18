import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import logoStrawberryBlack from "../assets/logoStrawberryBlack.png";
import { Form, Button } from "react-bootstrap";

export default function Login() {
  const [userLogin, setUserLogin] = useState({
    emailLogin: "",
    passwordLogin: "",
  });

  const { emailLogin, passwordLogin } = userLogin;

  const onChangeLogin = (e) => {
    try {
      setUserLogin({
        ...userLogin,
        [e.target.name]: e.target.value,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:4000/user/login",
        userLogin
      );
      swal("🍓🍓", res.data.message, "success");
      setUserLogin({ emailLogin: "", passwordLogin: "" });
    } catch (error) {
      if (error.response.data.message) {
        swal("Oh no!", error.response.data.message, "error");
      }
      console.error(error);
    }
  };

  return (
    <>
      <div className="modal__title--container">
        <img
          className="modal__logo"
          src={logoStrawberryBlack}
          alt="Logo Strawberry"
        />
        <h1 className="modal__title">כיף לראות אותך שוב</h1>
      </div>
      <Form className="modal__container__form" onSubmit={onSubmitLogin}>
        <Form.Control
          className="modal__form"
          type="email"
          autoComplete="off"
          placeholder="*מייל"
          name="emailLogin"
          id="emailLogin"
          value={emailLogin}
          onChange={onChangeLogin}
          required
        />

        <Form.Control
          className="modal__form"
          type="password"
          name="passwordLogin"
          id="passwordLogin"
          placeholder="*סיסמה"
          value={passwordLogin}
          onChange={onChangeLogin}
          required
        />

        <div>
          <button type="button" className="modal__button--password">
            שכחתי סיסמה
          </button>
        </div>

        <div>
          <Button type="submit" className="rounded-pill modal__button">
            כניסה לחשבון
          </Button>
        </div>
      </Form>
    </>
  );
}
