import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, deletePost } from "../../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return this.props.posts.reverse().map(post => {
      return (
        <div className="card darken-1" key={post._id}>
          <div className="card-content">
            <p>{post.text}</p>
            <p className="right">
              Posted On: {new Date(post.datePosted).toLocaleDateString()}
            </p>
            <p>
              <button
                className="btn-flat"
                onClick={() => this.props.deletePost(post._id)}
              >
                Delete
              </button>
            </p>
          </div>
        </div>
      );
    });
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts, deletePost }
)(PostList);
