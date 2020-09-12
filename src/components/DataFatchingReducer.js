import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const intialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, actiopn) => {
  switch (actiopn.type) {
    case 'FETCH_SUCCESS': {
      return {
        loading: false,
        post: actiopn.payload,
        error: '',
      };
    }
    case 'FETCH_ERROR': {
      return {
        loading: false,
        post: {},
        error: actiopn.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const DataFatchingReducer = () => {
  const [state, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR', payload: 'something went wrong' });
      });
  }, []);

  return (
    <div>
      {state.loading ? 'loading' : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
};

export default DataFatchingReducer;
