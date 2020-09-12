import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [fetchPostId, setFetchPostId] = useState(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPosts(response.data);
      console.log(response);
    };

    fetchData();
  }, [fetchPostId]);

  useEffect(() => {
    console.log(`id changed: ${id}`);
  }, [id]);
  return (
    <div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => setFetchPostId(id)}>Test</button>
      <ul>
        {/* {posts.map((post) => {
          return <li key={post.id}> {post.title}</li>;
        })} */}
        <li>{posts.title}</li>
      </ul>
    </div>
  );
};

export default DataFetching;
