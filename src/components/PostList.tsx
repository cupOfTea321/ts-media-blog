import React from 'react';
import PostItem from "./PostItem";

interface PostListProps{
    posts: Array<any>
    setPosts: Function
    removePost: Function
}
const PostList: React.FC<PostListProps> = ({posts, setPosts, removePost}) => {
    return (
        <div className={'postsDiv'}>
            {posts.map((post, index) => {
                return <PostItem removePost={removePost} index={index + 1} key={post.id} post={post}/>
            })}
        </div>
    );
};

export default PostList;