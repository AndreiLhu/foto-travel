import Image from 'next/image';
import AuthButton from '../sign-in';

export default function ProfileInfo({ session }) {
  return (
    <>
      <Image
        width={150}
        height={150}
        src={session.user?.image}
        alt="Avatar"
        priority
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
