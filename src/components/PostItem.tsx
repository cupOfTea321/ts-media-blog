import React from 'react';
import {Link} from "react-router-dom";
import MyButton from "./UI/button/MyButton";


interface PostItemProps{
    post: any
    index: number
    removePost: Function
}
const PostItem: React.FC<PostItemProps> = ({post, index, removePost}) => {
    return (
        <div className={'postItemDiv'}>
            <div>
                <strong>
                    <Link to={`/blog/${index}`}>{ index + ' ' + post.title}</Link>
                </strong>

                <p>{post.body}</p>
                <MyButton onClick={() => removePost(post.id)}>Удалить</MyButton>
            </div>

        </div>
    );
};

export default PostItem;