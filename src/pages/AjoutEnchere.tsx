import React from 'react';
import {
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
  IonSelect,
  IonSelectOption,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton
} from '@ionic/react';

const AjoutEnchere: React.FC = () => {
  return (
  <IonPage>
    <IonHeader>
        <IonToolbar>
          <IonTitle>Ajout Enchere</IonTitle>
        </IonToolbar>
    </IonHeader>

    <form>
      <IonItem className='ion-valid ion-margin-bottom' >
        <IonLabel position="stacked" >Description</IonLabel>
        <IonInput name="description" type="text" />
      </IonItem>

      <IonItem className='ion-valid ion-margin-bottom'>
        <IonLabel position="stacked">Catégorie</IonLabel>
        <IonSelect name="category">
          <IonSelectOption value="category1">Catégorie 1</IonSelectOption>
          <IonSelectOption value="category2">Catégorie 2</IonSelectOption>
          <IonSelectOption value="category3">Catégorie 3</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem className='ion-valid ion-margin-bottom'>
        <IonLabel position="stacked">Prix de mise enchère</IonLabel>
        <IonInput name="prix" type="number" />
      </IonItem>


      <IonItem className='ion-valid ion-margin-bottom'>
        <IonLabel position="stacked">Durée enchère (Heure)</IonLabel>
        <IonInput name="duree" type="number" />
      </IonItem>
      <IonButton className='ion-margin-bottom ' expand="full">Ajouter</IonButton>
    </form>
  </IonPage>
  );
};

export default AjoutEnchere;
