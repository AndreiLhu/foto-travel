import styled from 'styled-components';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((response) => response.json());

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

export default function BlogForm() {
  const { mutate } = useSWR('/api/blogs', fetcher);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const blogData = Object.fromEntries(formData);
    event.target.reset();

    const response = fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    });
    if (response.ok) {
      mutate();
    }
  };

  return (
    <BlogContainer onSubmit={handleSubmit}>
      <h2>Write your blog here: </h2>
      <div>
        <BlogLabel htmlFor="title">Title</BlogLabel>
        <BlogInput id="title" name="title" type="text" />
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
          required
        ></BlogTextarea>
        <BlogSubmit>submit</BlogSubmit>
      </div>
    </BlogContainer>
  );
}
