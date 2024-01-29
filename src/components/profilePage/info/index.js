// import Image from 'next/image';
// import AuthButton from '../sign-in';

// export default function ProfileInfo({ session }) {
//   const myLoader = ({ src }) => {
//     return `${session.user?.image}`;
//   };
//   return (
//     <>
//       <h1>Hello {session.user?.name}</h1>

//       <Image
//         loader={myLoader}
//         src={`${session.user?.image}`}
//         width={250}
//         height={250}
//         alt="Avatar"
//       />

//       <div>
//         <p>You are signed in as {session.user?.email}</p>
//         <p>{session.user?.bio}</p>
//         <AuthButton />
//       </div>
//     </>
//   );
// }
