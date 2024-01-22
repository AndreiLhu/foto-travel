export default function PlaceForm({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
    event.target.reset();
  }

  return (
    <div aria-labelledby={formName} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        defaultValue={defaultData?.name}
      />
      <label htmlFor="image-url">Image Url</label>
      <input
        id="image-url"
        name="image"
        type="text"
        defaultValue={defaultData?.image}
      />
      <label htmlFor="location">Location</label>
      <input
        id="location"
        name="location"
        type="text"
        defaultValue={defaultData?.location}
      />
      <label htmlFor="map-url">Map Url</label>
      <input
        id="map-url"
        name="mapURL"
        type="text"
        defaultValue={defaultData?.mapURL}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        defaultValue={defaultData?.description}
      ></textarea>
      <button type="submit">
        {defaultData ? 'Update place' : 'Add place'}
      </button>
    </div>
  );
}
