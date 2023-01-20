import React from 'react';
import PostItem from "./PostItem";

interface PostListProps{
    posts: Array<any>
    setPosts: Function
}
const PostList: React.FC<PostListProps> = ({posts, setPosts}) => {
    return (
        <div className={'postsDiv'}>
            {posts.map(post => {
                return <PostItem key={post.id} post={post}/>
            })}
        </div>
    );
};

export default PostList;