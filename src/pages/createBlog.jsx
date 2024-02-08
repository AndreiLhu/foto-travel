// import PlaceForm from '@/components/placeForm';
// import Link from 'next/link.js';
// import { useRouter } from 'next/router';
// import styled from 'styled-components';
// import { TbArrowBackUp } from 'react-icons/tb';
// import BlogForm from '@/components/blogForm';

// const fetcher = (url) => fetch(url).then((response) => response.json());

// export default function CreateBlogPage() {
// const { mutate } = useSWR('/api/blogs');
// const router = useRouter();

// const addBlog = useCallback(
//   async (blog) => {
//     const response = await fetch('/api/blogs', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(blog),
//     });

//     if (response.ok) {
//       mutate();
//     }
//     if (!response.ok) {
//       const error = await response.json();
//       console.log('Error:', error, response.status);
//     }
//   },
//   [mutate]
// );

//   console.log('addBlog from parent', typeof addBlog);
//   console.log('hellooo');

//   return (
//     <>
//       <h2 id="add-blog">Add new blog</h2>
//       <Link href="/blog" passHref legacyBehavior>
//         <Link>
//           <TbArrowBackUp />
//         </Link>
//       </Link>
//       <BlogForm onSubmit={addBlog} blogFormName={'add-blog'} />
//     </>
//   );
// }
