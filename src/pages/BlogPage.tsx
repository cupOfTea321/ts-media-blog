import React, {useState} from 'react';
import PostFilter from "../components/PostFilter";
import  '../components/Post.css'
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

interface IPost{
    id: number
    title: string
    body: string
}
const BlogPage: React.FC = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'About me', body: 'My name is Alex, i`m a frontend developer!'},
        {id: 2, title: 'My skills', body: 'Using html, css, js, react, redux'},
        {id: 3, title: 'Stage', body: '2 years'},
    ])

    const addPost = (post: any, setPost: Function) => {
        let newPost = {
            id: Date.now(),
                title: post.title,
                body: post.body
        }
        setPosts([...posts, newPost])
        setPost({title: '', body: ''})

    }
    const removePost = () => {

    }
    return (
        <>
            <div className={'blogPage'}>


                <PostForm addPost={addPost}/>

                <PostFilter/>
                <PostList posts={posts} setPosts={setPosts}/>

            </div>
        </>

    );
};

export default BlogPage;