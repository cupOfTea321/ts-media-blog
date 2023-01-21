import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";

interface PostFormProps{
    addPost: Function
}
const PostForm: React.FC<PostFormProps> = ({addPost}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPost({...post, title: event.target.value})
    }
    const bodyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPost({...post, body: event.target.value})
    }

    return (
        <div>
            <input className={'blogInput'} style={{marginBottom: 10}}
                   type="text" placeholder={"Post title..."}
                    value={post.title} onChange={titleHandler}
            />
            <input className={'blogInput'} type="text"
                   placeholder={"Post body..."}
                    value={post.body} onChange={bodyHandler}
            />
            <MyButton  onClick={() => addPost(post, setPost)}>Add Post</MyButton>
            <hr style={{margin: '15px 0', width: '60%'}}/>
        </div>
    );
};

export default PostForm;