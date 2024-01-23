import Image from 'next/image';
import { signOut, signIn, useSession } from 'next-auth/react';

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <h3>
          Welcome {session.user.name}!
          <Image
            src={session.user.image}
            alt="user-image"
            style={{ width: '100px', borderRadius: '50%' }}
          />
        </h3>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
