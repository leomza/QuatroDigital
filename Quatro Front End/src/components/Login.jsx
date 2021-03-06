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
      swal("馃崜馃崜", res.data.message, "success");
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
        <h1 className="modal__title">讻讬祝 诇专讗讜转 讗讜转讱 砖讜讘</h1>
      </div>
      <Form className="modal__container__form" onSubmit={onSubmitLogin}>
        <Form.Control
          className="modal__form"
          type="email"
          autoComplete="off"
          placeholder="*诪讬讬诇"
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
          placeholder="*住讬住诪讛"
          value={passwordLogin}
          onChange={onChangeLogin}
          required
        />

        <div>
          <button type="button" className="modal__button--password">
            砖讻讞转讬 住讬住诪讛
          </button>
        </div>

        <div>
          <Button type="submit" className="rounded-pill modal__button">
            讻谞讬住讛 诇讞砖讘讜谉
          </Button>
        </div>
      </Form>
    </>
  );
}
