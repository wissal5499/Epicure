import React, { Component } from "react";
// import { useNavigate } from "react-router-dom";
import {
  Form,
  Content,
  InputField,
  Input,
  Title,
  SubTitle,
  LoginBtn,
  UserContainer,
} from "./SignupStyles";

export default class Register extends Component {
  // navigate = useNavigate();
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const firstName = "";
    const lastName = "";
    const phoneNumber = "";
    const email = "";
    const password = "";

    console.log(firstName, lastName, phoneNumber, email, password);

    fetch("http://localhost:3001", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }
  render() {
    return (
      <UserContainer>
        <Form onSubmit={this.handleSubmit}>
          <Title>Sign up</Title>
          <SubTitle>To continue the order, please register</SubTitle>
          <Content>
            <InputField>
              <Input
                type="email"
                placeholder="Email adress"
                autoComplete="nope"
                onChange={(e) => this.setState({ email: e.target.value })}
                required
              />
            </InputField>
            <InputField>
              <Input
                type="text"
                placeholder="First Name"
                autoComplete="nope"
                onChange={(e) => this.setState({ fname: e.target.value })}
                required
              />
            </InputField>
            <InputField>
              <Input
                type="text"
                placeholder="Last Name"
                autoComplete="nope"
                onChange={(e) => this.setState({ lname: e.target.value })}
                required
              />
            </InputField>
            <InputField>
              <Input
                type="number"
                placeholder="Phone Number"
                autoComplete="nope"
                required
              />
            </InputField>
            <InputField>
              <Input
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                onChange={(e) => this.setState({ password: e.target.value })}
                required
              />
            </InputField>
            <InputField>
              <Input
                type="password"
                placeholder="Confirm Password"
                autoComplete="new-password"
                required
              />
            </InputField>
          </Content>
          <LoginBtn
            type="submit"
            // onClick={() => {
            //   this.navigate("/login");
            // }}
          >
            Sign up
          </LoginBtn>
        </Form>
      </UserContainer>
    );
  }
}
