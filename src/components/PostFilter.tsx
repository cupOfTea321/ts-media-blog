import React from 'react';
import './Post.css'
import MyButton from "./UI/button/MyButton";
const PostFilter: React.FC = () => {
    return (
        <div style={{
            // display: 'flex',
            // alignItems: 'center',
            // alignContent: 'center'
        }}>

            <input style={{width: '50%'}} className={'blogInput'} type="text" placeholder={"Search..."}/>
            <MyButton  style={{paddingTop: 17, paddingBottom: 14}}>Search...</MyButton>
        </div>
    );
};

export default PostFilter;