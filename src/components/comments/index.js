import { Comment } from '../comment';

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
    <div>
      <form onSubmit={handleSubmitComment}>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" placeholder="name" required />
        <label htmlFor="comment">Your Comment</label>
        <input
          type="text"
          name="comment"
          placeholder="comment here..."
          required
        />
        <button type="submit">Send</button>
      </form>
      {comments && (
        <>
          <h1> {comments.length} fan(s) commented on this place:</h1>
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
    </div>
  );
}
