import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { useSession } from 'next-auth/react';
import ImageUpload from '../imageUpload';
export default function UserForm({ buttonText, prevName, prevEmail, prevBio }) {
  const { data: session } = useSession();
  const users = useSWR('/api/users');
  const router = useRouter();
  const { push } = router;
  const { id } = router.query;
  const { trigger, isMutating } = useSWRMutation(
    `/api/users/${id}`,
    updateUser
  );

  const [name, setName] = useState(prevName);
  const [email, setEmail] = useState(prevEmail);
  const [bio, setBio] = useState(prevBio);

  const [url, setUrl] = useState('');

  async function updateUser(url, { arg }) {
    const response = await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify(arg),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  const { data: allUsers } = useSWR('/api/users');
  console.log('All users', allUsers);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);
    const doesTheUserAlreadyExist = await allUsers.some(
      (user) => user._id === id
    );
    if (doesTheUserAlreadyExist) {
      await trigger(userData);
    } else {
      const completeData = { ...userData, image: url };
      console.log('completeData', completeData);
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(completeData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        console.error(`There was an error: ${response.status}`);
      } else {
        users.mutate();
      }
    }
    push(`/profile-page`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {!session && (
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </div>
      )}
      <ImageUpload setUrl={setUrl} />
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          cols="30"
          rows="10"
          placeholder="Short description"
        ></textarea>
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  );
}
