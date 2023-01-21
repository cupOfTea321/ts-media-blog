import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";

interface PostFormProps{
    addPost: Function
    setVisible: Function
}
const PostForm: React.FC<PostFormProps> = ({addPost, setVisible}) => {
    const [post, setPost] = useState({title: '', body: ''})
    const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPost({...post, title: event.target.value})
    }
    const bodyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPost({...post, body: event.target.value})
    }

    const addHandler = () => {
        addPost(post, setPost)
        setVisible(false)
    }
    return (
        <div >
            <input className={'blogInput'} style={{marginBottom: 10}}
                   type="text" placeholder={"Post title..."}
                    value={post.title} onChange={titleHandler}
            />
            <input className={'blogInput'} type="text"
                   placeholder={"Post body..."}
                    value={post.body} onChange={bodyHandler}
            />
            <MyButton  onClick={addHandler}>Add Post</MyButton>

        </div>
    );
};

export default PostForm;