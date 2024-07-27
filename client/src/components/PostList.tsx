import { useEffect, useState } from "react"
import {getAllPost} from '../api/post.api.js'
import { PostCard } from "./PostCard";

export function PostList() {

  const [post, setPost] = useState([]);
  
  useEffect(() => {
    async function loadPost(){
      const res = await getAllPost();
      setPost(res.data);
    }
    loadPost();
  }, []);

  return <div className="grid grid-cols-3 gap-2">
      {post.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>;
}
