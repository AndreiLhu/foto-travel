import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((response) => response.json());
export default function BlogForm() {
  const { mutate } = useSWR('/api/blogs', fetcher);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const blogData = Object.fromEntries(formData);

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" name="title" type="text" />
      <label htmlFor="content">Write your blog</label>
      <textarea name="content" id="content" cols="30" rows="10"></textarea>
      <button>submit</button>
    </form>
  );
}
