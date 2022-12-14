import * as api from "../api";

export const getPosts = () => async (dispatch) => {
    
    // this is 
    try {
      const { data } = await api.fetchPosts();
  
      dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPosts(post);
  
      dispatch({ type: "CREATE_POST", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };