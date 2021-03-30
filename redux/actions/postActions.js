import axios from "axios";
import {
  FETCH_POSTS_FAIL,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "../constants/constants";

const postsEndpoint = "https://jsonplaceholder.typicode.com/posts";

export const listAllPosts = (limit) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_POSTS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(postsEndpoint + `?limit=${limit}`, config);

    dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_POSTS_FAIL,
      payload: error.message,
    });
  }
};
