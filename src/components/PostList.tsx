import React from 'react';
import PostItem from "./PostItem";

interface PostListProps{
    posts: Array<any>
    setPosts: Function
}
const PostList: React.FC<PostListProps> = ({posts, setPosts}) => {
    return (
        <div className={'postsDiv'}>
            {posts.map((post, index) => {
                return <PostItem  index={index + 1} key={post.id} post={post}/>
            })}
        </div>
    );
};

export default PostList;