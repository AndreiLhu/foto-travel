import { useState } from 'react';
import { TbEdit } from 'react-icons/tb';
import { RiDeleteBin6Line } from 'react-icons/ri';
import styled from 'styled-components';

const CommentIconButton = styled.button`
  font-size: 15px;
`;
const CommentText = styled.h4`
  font-weight: 300;
  background-color: whitesmoke;
  font-size: 18px;
`;

export const Comment = ({
  id,
  name,
  mutate,
  comment,
  locationName,
  handleDeleteComment,
}) => {
  const [showCommentEditInput, setShowCommentEditInput] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const comment = data.comment;

    const response = await fetch(`/api/comments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });
    if (response.ok) {
      await mutate();
      setShowCommentEditInput(!showCommentEditInput);
    }
  };
  return showCommentEditInput ? (
    <form onSubmit={handleSubmit}>
      <textarea
        style={{ width: '100%' }}
        name="comment"
        defaultValue={comment}
      ></textarea>
      <button onClick={() => setShowCommentEditInput(false)}>Cancel</button>
      <button>Submit</button>
    </form>
  ) : (
    <div>
      <p>
        <strong>{name}</strong> commented on {locationName}
      </p>
      <CommentText>{comment}</CommentText>
      <CommentIconButton onClick={() => setShowCommentEditInput(true)}>
        <TbEdit />
      </CommentIconButton>
      <CommentIconButton onClick={handleDeleteComment}>
        <RiDeleteBin6Line />
      </CommentIconButton>
    </div>
  );
};
