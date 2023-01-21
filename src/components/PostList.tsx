import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";
// import {TransitionGroup, CSSTransition} from 'react-transition-group/TransitionGroup'
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
                <TransitionGroup>
                {posts.map((post, index) => {
                    return <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                    <PostItem removePost={removePost} index={index + 1} key={post.id} post={post}/>
                    </CSSTransition>
                        })}
                </TransitionGroup>
            </div>
        </>

    );
};

export default PostList;