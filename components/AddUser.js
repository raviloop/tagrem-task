import React from "react";
import Input from "./Input";
import Button from "./Button";
import Select from "./Select";
import axios from "axios";

export default class AddUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        first_name: "",
        last_name: "",
        email: "",
        gender: ""
      },
      genderOptions: ["male", "female"]
    };
  }
  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return {
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log(userData);
    const token = "QeUtQCgdsAAeCdFbhUz1h6-HdVJ30zv8xMYR";
    axios({
      method: "post",
      url:
        "https://gorest.co.in/public-api/users?_format=json&access-token=QeUtQCgdsAAeCdFbhUz1h6-HdVJ30zv8xMYR",
      data: userData
      // config: {
      //   headers: { Authorization: token }
      // }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
        console.log(response);
      });
  };

  render() {
    return (
      <div>
        <h1>Add user form</h1>

        <form className="container" onSubmit={this.Submit}>
          <Input
            name="first_name"
            title="First Name"
            type="text"
            placeholder="First Name"
            onChange={this.handleInput}
          />

          <Input
            name="last_name"
            title="Last Name"
            type="text"
            placeholder="Last Name"
            onChange={this.handleInput}
          />
          <Input
            name="email"
            title="email"
            type="email"
            placeholder="Email Address"
            onChange={this.handleInput}
          />
          <Select
            title={"Gender"}
            name={"gender"}
            options={this.state.genderOptions}
            value={this.state.newUser.gender}
            placeholder={"Select Gender"}
            handleChange={this.handleInput}
          />
          <Button title={"Submit"} action={this.handleSubmit} />
        </form>
      </div>
    );
  }
}
