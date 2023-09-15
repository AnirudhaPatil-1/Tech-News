import React, { useContext  } from "react";
import { useEffect, useReducer } from "react";
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({type: "SET_LOADING"})
    try {
      let res = await fetch(url);
      let data = await res.json();
      // console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
            hits: data.hits,
            nbPages: data.nbPages,
        }
})
    } catch (error) {
      console.log(error);
    }
  };

  //delete post

  const removePost = (post_ID) => {
    dispatch({type: "REMOVE_POST", payload: post_ID});
  };

  //search
  const Search = (searchQuery) => {
    dispatch({type: "SEARCH_QUERY", payload: searchQuery});
  }

  //next page
  const getNextPage =() =>{
    dispatch({type: "NEXT_PAGE"})

  }

  //prev page
  const getPrevPage =() =>{
    dispatch({type: "PREV_PAGE"})

  }


  //update the hits array on search query
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);
  return (
    <AppContext.Provider value={{...state, removePost, Search, getPrevPage, getNextPage}}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

// export {AppContext, AppProvider};
export { AppContext, AppProvider, useGlobalContext };
