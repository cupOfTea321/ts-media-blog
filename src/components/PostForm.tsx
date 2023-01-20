import React from 'react';
import './Post.css'
import MyButton from "./UI/button/MyButton";
const PostForm: React.FC = () => {
    return (
        <div>
            <input className={'blogInput'} type="text" placeholder={"Type your post..."}/>
            <MyButton  >Add Post</MyButton>
        </div>
    );
};

export default PostForm;