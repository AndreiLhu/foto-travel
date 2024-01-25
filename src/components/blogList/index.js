// import Link from 'next/link';
// import useSWR from 'swr';
// import React from 'react';
// import styled from 'styled-components';
// import Image from 'next/image';

// const fetcher = (url) => fetch(url).then((r) => r.json());

// const BlogList = () => {
//   const { data } = useSWR('/api/uploads', fetcher, { fallbackData: [] });
//   console.log(data);
//   return (
//     <div>
//       {' '}
//       <div role="list">
//         {data.map((image) => {
//           return (
//             <li key={image._id}>
//               <div>
//                 <Image src={image.imagePath} fill alt=" images" />
//               </div>

//               <p>{image.description}</p>
//             </li>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default BlogList;
