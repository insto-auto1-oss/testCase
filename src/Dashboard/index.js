import React from "react";
import { connect } from "react-redux";
import "./index.css";


class Dashboard extends React.Component {
  render() {
    console.log("user", this.props.user);
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phn.No</th>
          </tr>
          {this.props.user.length &&
            this.props.user.map(v => (
              <tr>
                <th>{v.id}</th>
                <th>{v.name}</th>
                <th>{v.age}</th>
                <th>{v.gender}</th>
                <th>{v.email}</th>
                <th>{v.phoneNo}</th>
              </tr>
            ))}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.dashboard.user
});
export default connect(mapStateToProps)(Dashboard);
