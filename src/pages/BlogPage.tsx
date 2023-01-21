import React, {useState} from 'react';
import PostFilter from "../components/PostFilter";
import  '../components/Post.css'
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";

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
    const [visible, setVisible] = useState(false)
    const addPost = (post: any, setPost: Function) => {
        let newPost = {
            id: Date.now(),
                title: post.title,
                body: post.body
        }
        setPosts([...posts, newPost])
        setPost({title: '', body: ''})

    }
    const removePost = (id: number) => {
        setPosts(posts.filter(post => post.id !== id));

    }
    return (
        <>
            <div className={'blogPage'}>


                <MyButton onClick={() => setVisible(true)}>Add Post</MyButton>
                <MyModal visible={visible} setVisible={setVisible}>
                <PostForm addPost={addPost} setVisible={setVisible} />
                </MyModal>

                <hr style={{margin: '15px 0', width: '60%'}}/>
                <PostFilter/>
                <PostList removePost={removePost} posts={posts} setPosts={setPosts}/>

            </div>
        </>

    );
};

export default BlogPage;