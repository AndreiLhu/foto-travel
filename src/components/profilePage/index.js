import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ProfilePage() {
  const router = useRouter();
  const { data: session } = useSession();
  const id = session?.user.id;

  function handleSignOut() {
    signOut({ callbackUrl: '/' });
  }

  const { data: user } = useSWR(id ? `/api/users/${id}` : null, fetcher);
  console.log('data', user);
  if (!user) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  if (session) {
    return (
      <div>
        {/* <Image src={user.image} alt={`${user.name}'s profile picture`} /> */}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <div>
          <h3>About Me</h3>
          <hr />
          <p>{user.bio}</p>
        </div>

        <button onClick={handleSignOut}>Sign out</button>
      </div>
    );
  }
}
