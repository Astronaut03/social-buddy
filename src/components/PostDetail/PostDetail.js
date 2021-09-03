import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';


const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComment] = useState([]);

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    }, [id])

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [id])

    return (
        <div>
            <h1>post detail: {id} </h1>
            <p>User posted: {post.id}</p>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
            <p>number of comments: {comments.length}</p>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;