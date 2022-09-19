import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import PasswordChecklist from "react-password-checklist";
import bcrypt from "bcryptjs";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Form,
  Content,
  InputField,
  Input,
  Title,
  SubTitle,
  LoginBtn,
  UserContainer,
  Span,
  Label,
} from "./SignupStyles";

export default function Signup() {
  const navigate = useNavigate();
  const [passwordChecklist, setPasswordChecklist] = useState(false);
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [showErrorPasswordMessage, setShowErrorPasswordMessage] =
    useState(false);
  const [showErrorEmailMessage, setShowErrorEmailMessage] = useState(false);
  const [showErrorFirstNameMessage, setShowErrorFirstNameMessage] =
    useState(false);
  const [showErrorPhoneMessage, setShowErrorPhoneMessage] = useState(false);
  const [showErrorLastNameMessage, setShowErrorLastNameMessage] =
    useState(false);
  const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
  const [showEmailLabel, setEmailLabel] = useState(false);
  const [showFnameLabel, setFnameLabel] = useState(false);
  const [showLnameLabel, setLnameLabel] = useState(false);
  const [showPhoneLabel, setPhoneLabel] = useState(false);
  const [showPasswordLabel, setPasswordLabel] = useState(false);
  const [showCpasswordLabel, setCpasswordLabel] = useState(false);
  const emailText = useRef<any>(null);
  const firstnameText = useRef<any>(null);
  const lastnameText = useRef<any>(null);
  const phonenumberText = useRef<any>(null);
  const pass = useRef<any>(null);
  const Cpass = useRef<any>(null);

  const notify = () => {
    if (
      emailText.current.value.length == 0 ||
      firstnameText.current.value.length == 0 ||
      lastnameText.current.value.length == 0 ||
      phonenumberText.current.value.length == 0 ||
      pass.current.value.length == 0 ||
      Cpass.current.value.length == 0
    ) {
      toast("Please fill all the feilds");
    } else {
      toast("Registeration success!");
    }
  };

  useEffect(() => {
    if (isCPasswordDirty) {
      if (password === cPassword) {
        setShowErrorPasswordMessage(false);
      } else {
        setShowErrorPasswordMessage(true);
      }
    }
  }, [cPassword]);

  const handleCPassword = (e: any) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  };

  const validateEmail = (e: any) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setShowErrorEmailMessage(false);
    } else {
      setShowErrorEmailMessage(true);
    }
  };

  const validatePhone = (e: any) => {
    var phone = e.target.value;

    if (validator.isMobilePhone(phone, "he-IL")) {
      setShowErrorPhoneMessage(false);
    } else {
      setShowErrorPhoneMessage(true);
    }
  };

  const validateFirstName = (e: any) => {
    var fname = e.target.value;

    if (validator.isAlpha(fname, "en-US")) {
      setShowErrorFirstNameMessage(false);
    } else {
      setShowErrorFirstNameMessage(true);
    }
  };

  const validateLastName = (e: any) => {
    var fname = e.target.value;

    if (validator.isAlpha(fname, "en-US")) {
      setShowErrorLastNameMessage(false);
    } else {
      setShowErrorLastNameMessage(true);
    }
  };

  return (
    <UserContainer>
      <Form>
        <Title>Sign up</Title>
        <SubTitle>To continue the order, please register</SubTitle>
        <Content>
          <InputField>
            {showEmailLabel && <Label>Email adress</Label>}
            <Input
              type="email"
              placeholder="Email adress"
              autoComplete="nope"
              ref={emailText}
              onChange={(e) => validateEmail(e)}
              onClick={() => {
                setEmailLabel(true);
              }}
              required
            />

            {showErrorEmailMessage ? (
              <Span> Please, enter valid Email! </Span>
            ) : (
              ""
            )}
          </InputField>
          <InputField>
            {showFnameLabel && <Label>First Name</Label>}
            <Input
              type="text"
              placeholder="First Name"
              ref={firstnameText}
              onChange={(e) => validateFirstName(e)}
              onClick={() => {
                setFnameLabel(true);
              }}
              autoComplete="nope"
              required
            />
            {showErrorFirstNameMessage ? (
              <Span> Please, enter valid name! </Span>
            ) : (
              ""
            )}
          </InputField>
          <InputField>
            {showLnameLabel && <Label>Last Name</Label>}
            <Input
              type="text"
              placeholder="Last Name"
              autoComplete="nope"
              ref={lastnameText}
              onChange={(e) => validateLastName(e)}
              onClick={() => {
                setLnameLabel(true);
              }}
              required
            />
            {showErrorLastNameMessage ? (
              <Span> Please, enter valid name! </Span>
            ) : (
              ""
            )}
          </InputField>
          <InputField>
            {showPhoneLabel && <Label>Phone Number</Label>}
            <Input
              type="number"
              placeholder="Phone Number"
              autoComplete="nope"
              ref={phonenumberText}
              onChange={(e) => validatePhone(e)}
              onClick={() => {
                setPhoneLabel(true);
              }}
              required
            />
            {showErrorPhoneMessage ? (
              <Span> Please, enter valid phone number! </Span>
            ) : (
              ""
            )}
          </InputField>
          <InputField>
            {showPasswordLabel && <Label>Password</Label>}
            <Input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              ref={pass}
              onChange={(e) => setPassword(e.target.value)}
              onClick={() => {
                setPasswordChecklist(true);
                setPasswordLabel(true);
              }}
              value={password}
              required
            />
            {passwordChecklist && (
              <PasswordChecklist
                rules={["minLength", "specialChar", "number", "capital"]}
                minLength={5}
                value={password}
              />
            )}
          </InputField>

          <InputField>
            {showCpasswordLabel && <Label>Confirm Password</Label>}
            <Input
              type="password"
              placeholder="Confirm Password"
              autoComplete="new-password"
              ref={Cpass}
              value={cPassword}
              onChange={handleCPassword}
              onClick={() => {
                setPasswordChecklist(true);
                setCpasswordLabel(true);
              }}
              required
            />
            {showErrorPasswordMessage && isCPasswordDirty ? (
              <Span> Passwords did not match </Span>
            ) : (
              ""
            )}
          </InputField>
        </Content>
        <LoginBtn type="submit" onClick={notify}>
          Log in
        </LoginBtn>
      </Form>
      <ToastContainer />
    </UserContainer>
  );
}
