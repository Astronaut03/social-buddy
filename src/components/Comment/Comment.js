import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment;
    return (
        <p>
            name:{name} <br /> email: {email};
        </p>
    );
};

export default Comment;