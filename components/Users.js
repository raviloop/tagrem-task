import React from "react";
import axios from "axios";

export default class Users extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get(
        `https://gorest.co.in/public-api/users?_format=json&access-token=QeUtQCgdsAAeCdFbhUz1h6-HdVJ30zv8xMYR`
      )
      .then(res => {
        const users = res.data.result;
        this.setState({ users });
      });
  }

  render() {
    const tableStyle = {
      border: "2px solid black"
    };

    const tableRows = this.state.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.gender}</td>
          <td>{user.phone}</td>
          <td>{user.dob}</td>
        </tr>
      );
    });

    return (
      <div>
        <table style={tableStyle}>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>gender</th>
            <th>phone</th>
            <th>date of birth</th>
          </tr>
          {tableRows}
        </table>
      </div>
    );
  }
}
