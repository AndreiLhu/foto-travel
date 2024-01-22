import { useState } from 'react';

export default function ImageUpload({ setUrl }) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleSelectFile = (e) => setFile(e.target.files[0]);

  async function uploadFile(e) {
    setLoading(true);
    e.preventDefault();
    const data = new FormData();
    console.log(file);
    data.set('sample_file', file);
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: data,
      });
      const json = await response.json();

      setUrl(json.url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <label htmlFor="file"> Select an image:</label>
      <input
        id="file"
        type="file"
        onChange={handleSelectFile}
        multiple={false}
      />
      {file && <p>{file.name}</p>}
      {file && (
        <>
          <button
            style={{ width: '150px', margin: 0, backgroundColor: '#4F709C' }}
            onClick={uploadFile}
          >
            {loading ? 'uploading...' : 'upload the image'}
          </button>
        </>
      )}
    </div>
  );
}
