import React, { useState } from "react";
import { XURL } from "../constants/imagesURL.ts/XURL";
import { Closebutton, XIcon } from "./Header/HeaderMobile/HamburList/styles";
import {
  Form,
  Content,
  InputField,
  Input,
  Title,
  SubTitle,
  LoginBtn,
  Link,
  Hr,
  Container,
  Paragraph,
  UserContainer,
  SignupBtn,
  Span,
  Label,
} from "./styles";
import "./Login.css";
import validator from "validator";
import PasswordChecklist from "react-password-checklist";
import { useNavigate } from "react-router-dom";
interface Props {
  setOpenUserBox: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LogIn(props: Props) {
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailLabel, setEmailLabel] = useState(false);
  const [showPasswordLabel, setPasswordLabel] = useState(false);
  const [passwordChecklist, setPasswordChecklist] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (e: any) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage("");
    } else {
      setMessage("Please, enter valid Email!");
    }
  };

  return (
    <UserContainer>
      <Closebutton
        onClick={() => {
          props.setOpenUserBox(false);
        }}
      >
        <XIcon src={XURL} alt="X icon" />
      </Closebutton>

      <Form>
        <Title>Sign in</Title>
        <SubTitle>To continue the order, please sign in</SubTitle>
        <Content>
          <InputField>
            {showEmailLabel && <Label>Email adress</Label>}
            <Input
              type="email"
              placeholder="Email adress"
              autoComplete="nope"
              onChange={(e) => validateEmail(e)}
              onClick={() => {
                setEmailLabel(true);
              }}
              required
            />
            <Span>{message}</Span>
          </InputField>
          <InputField>
            {showPasswordLabel && <Label>Password</Label>}
            <Input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
              onClick={() => {
                setPasswordChecklist(true);
                setPasswordLabel(true);
              }}
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

          {/* <h1>The floating label</h1>
          <div className="user-input-wrp">
            <br />
            <input type="text" className="inputText" required />
            <span className="floating-label">Your email address</span>
          </div> */}
        </Content>
        <LoginBtn>Log in</LoginBtn>
        <Link>Forget password?</Link>
        <Container>
          <Hr />
          <Paragraph>or</Paragraph>
          <Hr />
        </Container>
        <SignupBtn
          onClick={() => {
            navigate("/signup");
            props.setOpenUserBox(false);
          }}
        >
          sign up
        </SignupBtn>
      </Form>
    </UserContainer>
  );
}
