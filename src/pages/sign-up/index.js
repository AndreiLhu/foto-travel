// import React from 'react';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
// import Login from '@/components/login';
// import UserForm from '@/components/userForm';

// export default function SignUp() {
//   const router = useRouter();
//   const { push } = router;
//   const { data: session } = useSession();

//   if (!session) {
//     return (
//       <div>
//         <div>
//           <h3>Already have an account? Log in:</h3>
//           <Login />
//         </div>
//         <hr />
//         <div>
//           <h2>Create an account:</h2>
//           <UserForm buttonText="Sign Up" />
//         </div>
//       </div>
//     );
//   }
//   push('/');
// }
