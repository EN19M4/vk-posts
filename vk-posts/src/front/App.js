import React, {useState} from 'react';
import { Pagination } from './Posts/Pagination';
import { PostsMap } from './Posts/PostsMap';


function App({posts}) {

  const [postsPerPage] = useState(10);
  const [Page, setPage] = useState(1);
  const lastIndexPosts = Page * postsPerPage;
  const firstIndexPosts = lastIndexPosts - postsPerPage;
  const currentPosts = posts.slice(firstIndexPosts, lastIndexPosts)

  return (
    <>
      <div className = "wrapper">
            <PostsMap posts = {currentPosts} postsAll = {posts}/>  
      </div>
      <Pagination  postsPerPage = {postsPerPage} totalPosts = {posts.length} Page = {Page} setPage = {setPage} />   
    </>
    
    
  );
  
}

export default App;

