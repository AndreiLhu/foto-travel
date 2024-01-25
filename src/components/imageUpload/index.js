import { useState } from 'react';

export default function ImageUpload() {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);

    try {
      const response = await fetch('/api/uploads', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Data uploaded successfully');
      } else {
        console.error('Error uploading data');
      }
    } catch (error) {
      console.error('Error uploading data', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Image:
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
