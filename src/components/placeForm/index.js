import styled from 'styled-components';

const MainPlaceForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  height: 70vh;
  margin: auto;
  margin-top: 50px;
`;

const PlaceInput = styled.input`
  height: 30px;
  border: 1px solid gray;
  margin-top: 10px;
`;
const PlaceLabel = styled.label`
  text-align: center;
  padding: 5px;
  font-size: 25px;
`;
const SubmitButton = styled.button`
  font-size: 20px;
  width: 200px;
  align-self: center;
  margin-top: 10px;
  border: none;
  background-color: transparent;
`;

export default function PlaceForm({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
    event.target.reset();
  }

  return (
    <MainPlaceForm aria-labelledby={formName} onSubmit={handleSubmit}>
      <PlaceLabel htmlFor="name">Name</PlaceLabel>
      <PlaceInput
        id="name"
        name="name"
        type="text"
        defaultValue={defaultData?.name}
      />
      <PlaceLabel htmlFor="image-url">Image Url</PlaceLabel>
      <PlaceInput
        id="image-url"
        name="image"
        type="text"
        defaultValue={defaultData?.image}
      />
      <PlaceLabel htmlFor="location">Location</PlaceLabel>
      <PlaceInput
        id="location"
        name="location"
        type="text"
        defaultValue={defaultData?.location}
      />
      <PlaceLabel htmlFor="map-url">Map Url</PlaceLabel>
      <PlaceInput
        id="map-url"
        name="mapURL"
        type="text"
        defaultValue={defaultData?.mapURL}
      />
      <PlaceLabel htmlFor="description">Description</PlaceLabel>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        defaultValue={defaultData?.description}
      ></textarea>
      <SubmitButton type="submit">
        {defaultData ? 'Update place' : 'Add place'}
      </SubmitButton>
    </MainPlaceForm>
  );
}
