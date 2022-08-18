import React from 'react';
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

export default function PostContainer2() {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100);

  console.log(posts, error, isLoading);
  return (
    <div>
      {/* {isLoading && <h1>Идёт загрузка....</h1>}
    {error && <h1>Произошла ошибка при загрузке</h1>}
    <div>{posts && posts.map((post) => <PostItem key={post.id} post={post} />)}</div> */}
    </div>
  );
}
