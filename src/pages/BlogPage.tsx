import React, {useState} from 'react';
import PostForm from "../components/PostForm";
import  '../components/Post.css'
import PostList from "../components/PostList";
const BlogPage: React.FC = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'About me', body: 'My name is Alex, i`m a frontend developer!'},
        {id: 2, title: 'My skills', body: 'Using html, css, js, react, redux'},
        {id: 3, title: 'Stage', body: '2 years'},
    ])

    return (
        <>
            <div className={'blogPage'}>

                <PostForm/>

                {/*<hr style={{margin: '15px 0'}}/>*/}

                <PostList posts={posts} setPosts={setPosts}/>

            </div>
        </>

    );
};

export default BlogPage;