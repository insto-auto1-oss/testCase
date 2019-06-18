import React from "react";
// Redux related
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActions from "../Redux/Actions/login";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.currentTarget.id]: event.currentTarget.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      let loginDetails = {
        username: this.state.username,
        password: this.state.password
      };
      this.props.loginActions.userLogin(loginDetails);
    }
  };

  render() {
      const {loginSuccess} = this.props;
      
      if(loginSuccess) {
          this.props.history.push("/dashboard");
      }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>username</label>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            id="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    loginSuccess : state.login.loginSuccess
});
const mapDispatchToProps = dispatch => ({
  loginActions: bindActionCreators(loginActions, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
