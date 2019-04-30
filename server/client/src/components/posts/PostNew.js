import React, { Component } from "react";
import { connect } from "react-redux";
import { submitPost } from "../../actions";

class PostNew extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.state = {
      posts: ""
    };
  }
  handleNewMessage = e => {
    e.preventDefault();
    this.props.submitPost(this.state.posts);
    e.target.reset();
    this.props.history.push("/");
  };
  handleChange = e => {
    this.setState({
      posts: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleNewMessage}>
        <input
          type="text"
          value={this.state.posts}
          name="posts"
          onChange={e => this.setState({ posts: e.target.value })}
        />
        <button type="submit" className="btn btn-success">
          Add my message!
        </button>
      </form>
    );
  }
}
export default connect(
  null,
  { submitPost }
)(PostNew);
