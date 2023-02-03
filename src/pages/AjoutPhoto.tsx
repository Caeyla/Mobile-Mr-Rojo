import React, { useState } from 'react';
import { IonInput, IonButton, IonImg } from '@ionic/react';

const AjoutPhoto = () => {
  const [photos, setPhotos] = useState([]);

  const handleFileInputChange = (event:Event) => {
    
  };

  return (
    <>
    {/* type='file'  onChange={handleFileInputChange}  */}
      <IonInput />
      <IonButton onClick={() => setPhotos([])}>Ajouter des photos</IonButton>
      {photos.map((photo) => (
        // key={photo.name}
        <IonImg  src={URL.createObjectURL(photo)} />
      ))}
    </>
  );
};

export default AjoutPhoto;
