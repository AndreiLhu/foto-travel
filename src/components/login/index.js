import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <h3>
          Welcome {session.user.name}!
          <Image
            src={session.user.image}
            alt="user-image"
            style={{ width: '100px', borderRadius: '50%' }}
          />
        </h3>
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in with Google</button>
    </>
  );
}
