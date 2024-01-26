import styled from 'styled-components';
import { Comment } from '../comment';

const CommentsContainer = styled.div`
  max-width: 700px;
  margin-left: 50px;
  text-align: center;
`;

const CommentsTitle = styled.h2`
  margin-bottom: 10px;
`;

const CommentsInput = styled.input`
  height: 30px;
  margin: 5px;
`;
const CommentsLabel = styled.label`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;
const CommentButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
  background-color: transparent;
  width: 200px;
  align-self: center;
`;

export default function Comments({ id, locationName, comments, mutate }) {
  async function handleSubmitComment(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const comment = Object.fromEntries(formData);

    const response = await fetch(`/api/places/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });

    if (response.ok) {
      mutate();
    }

    if (!response.ok) {
      const error = await response.json();
      console.log('Error:', error, response.status);
    }
  }

  async function handleDeleteComment(_id) {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: _id }),
    });
    console.log('response', response);
    if (response.ok) {
      await response.json();
      mutate();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <CommentsContainer>
      <form onSubmit={handleSubmitComment}>
        <CommentsTitle>Write your comment here</CommentsTitle>
        <CommentsLabel htmlFor="name">Your Name</CommentsLabel>
        <CommentsInput type="text" name="name" placeholder="name" required />
        <CommentsLabel htmlFor="comment">Your Comment</CommentsLabel>
        <CommentsInput
          type="text"
          name="comment"
          placeholder="comment here..."
          required
        />
        <CommentButton type="submit">Post</CommentButton>
      </form>

      {comments && (
        <>
          <h2> {comments.length} fan(s) commented on this place:</h2>
          {comments.map(({ _id, name, comment }) => {
            return (
              <Comment
                key={_id}
                id={_id}
                name={name}
                mutate={mutate}
                comment={comment}
                locationName={locationName}
                handleDeleteComment={() => handleDeleteComment(_id)}
              />
            );
          })}
        </>
      )}
    </CommentsContainer>
  );
}
