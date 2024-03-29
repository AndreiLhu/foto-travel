import ProfileInfo from './info';
import SignIn from './sign-in';

import { useSession } from 'next-auth/react';

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <section>
      {session ? <ProfileInfo session={session} /> : <SignIn />}
    </section>
  );
}
