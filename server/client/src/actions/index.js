import axios from "axios";
import { FETCH_USER, FETCH_POSTS, DELETE_POST } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitPost = posts => async dispatch => {
  await axios("/api/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    data: { posts }
  });
};

export const fetchPosts = () => async dispatch => {
  const res = await axios.get("/api/posts");

  dispatch({ type: FETCH_POSTS, payload: res.data });
};

export const deletePost = id => async dispatch => {
  try {
    await axios.delete(`/api/posts/${id}`);
    dispatch({ type: DELETE_POST, payload: id });
  } catch (err) {
    alert("you are not authorized");
  }
};
