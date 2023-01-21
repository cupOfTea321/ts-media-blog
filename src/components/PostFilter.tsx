import React from 'react';
import './Post.css'
import MyButton from "./UI/button/MyButton";
const PostFilter: React.FC = () => {
    return (
        <div>

            <input className={'blogInput'} type="text" placeholder={"Search..."}/>
            <MyButton  >Search...</MyButton>
        </div>
    );
};

export default PostFilter;