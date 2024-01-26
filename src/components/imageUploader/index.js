// import { useState } from 'react';
// import useSWRMutation from 'swr/mutation';

// import { ChangeEvent, FormEvent } from 'react';

// export async function uploadFile(url, { arg }) {
//   await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       fileData: arg,
//     }),
//   });
// }

// export async function onChange(event, setFileData) {
//   const file = (event.currentTarget.files || [])[0];

//   if (file) {
//     setFileData({
//       binaryData: Buffer.from(await file.arrayBuffer()),
//       originalFilename: file.name,
//       size: file.size,
//       mimetype: file.type,
//     });
//   }
// }

// export async function onSubmit(event, fileData, trigger) {
//   event.preventDefault();
//   if (!fileData) {
//     return;
//   }

//   const formElement = event.currentTarget;
//   trigger(fileData);
//   formElement.reset();
// }

// export function ImageUploader() {
//   const [fileData, setFileData] = useState();
//   const { trigger } = useSWRMutation('/api/images', uploadFile);

//   return (
//     <>
//       <h1>Image Uploader</h1>
//       <form onSubmit={(event) => onSubmit(event, fileData, trigger)}>
//         <label htmlFor="file">File</label>
//         <input
//           type="file"
//           name="file"
//           id=""
//           onChange={(event) => onChange(event, setFileData)}
//         />
//         <button>Upload</button>
//       </form>
//     </>
//   );
// }
