import Image from 'next/image';
import AuthButton from '../sign-in';

export default function ProfileInfo({ session }) {
  const myLoader = ({ src }) => {
    return `${session.user?.image}`;
  };
  return (
    <>
      <h1>User Profile</h1>
      {/* <Image
        width={150}
        height={150}
        src={session.user?.image}
        alt="Avatar"
        priority
      /> */}
      <Image
        loader={myLoader}
        src={`${session.user?.image}`}
        width={250}
        height={250}
        alt="Avatar"
      />

      <div>
        <h1>Hello {session.user?.name}</h1>
        <p>You are signed in as {session.user?.email}</p>
        <p>{session.user?.bio}</p>
        <AuthButton />
      </div>
    </>
  );
}
