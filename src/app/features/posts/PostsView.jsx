
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './PostSlice';

const PostsView = () => {
   const {isLoading, posts, error } = useSelector((state)=> state.posts)
   const dispatch = useDispatch();
   useEffect(()=>{
      dispatch(fetchPosts())
   },[])
  return (
    <div>
       {isLoading && <h3>Loading.....</h3>}
       {error && <h3>{error}</h3>}
       {posts.map((post)=>{
        return (
          <article>
            <h5>{post.title}</h5>
          </article>
        )
       })}
    </div>
  );
};

export default PostsView;