import styled from 'styled-components';

const BlogContainer = styled.form`
  width: 500px;
  height: 100%;
  font-size: 20px;
`;

const BlogLabel = styled.label`
  display: flex;
  margin-top: 10px;
`;
const BlogInput = styled.input`
  margin-top: 10px;
  width: 100%;
  height: 50px;
`;

const BlogTextarea = styled.input`
  margin-top: 10px;
  width: 100%;
  height: 50px;
`;

const BlogSubmit = styled.button`
  font-size: 20px;
  margin-top: 10px;
`;

export default function BlogForm({ onSubmit, blogFormName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('onsubmit', typeof onSubmit);
    onSubmit(data);

    event.target.reset();
  }

  return (
    <BlogContainer aria-labelledby={blogFormName} onSubmit={handleSubmit}>
      <h2>Write your blog here: </h2>
      <div>
        <BlogLabel htmlFor="title">Title</BlogLabel>
        <BlogInput
          id="title"
          name="title"
          type="text"
          defaultValue={defaultData?.title}
        />
      </div>
      <div>
        <BlogLabel htmlFor="content">Content</BlogLabel>
        <BlogTextarea
          name="content"
          id="content"
          cols="90"
          rows="30"
          placeholder="Blog content here..."
          maxLength="500"
          defaultValue={defaultData?.content}
          required
        ></BlogTextarea>
        <BlogSubmit type="submit">
          {defaultData ? 'Update blog' : 'Add blog'}
        </BlogSubmit>
      </div>
    </BlogContainer>
  );
}
