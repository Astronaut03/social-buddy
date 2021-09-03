import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showComment = id =>{
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h1><strong>{id}</strong></h1>
            <h3>Title: {title}</h3>
            <p>{body}</p>
            <button onClick={()=> showComment(id)}>Show Comments</button>
        </div>
    );
};

export default Post;  