import React from 'react';
import PostItem from "./PostItem";

interface PostListProps{
    posts: Array<any>
    setPosts: Function
    removePost: Function
}
const PostList: React.FC<PostListProps> = ({posts, setPosts, removePost}) => {
    if (!posts.length) {

        return <h2>Posts dont found</h2>
    }

    return (
        <>
            <h2>Posts</h2>
            <div className={'postsDiv'}>
                {posts.map((post, index) => {
                    return <PostItem removePost={removePost} index={index + 1} key={post.id} post={post}/>
                })}
            </div>
        </>

    );
};

export default PostList;