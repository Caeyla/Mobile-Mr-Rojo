import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Inscription.css';

interface ContainerProps { }

const Inscription: React.FC<ContainerProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [numeroCompte, setNumeroCompte] = useState('');

  const handleLogin = () => {
    console.log('Username: ', username);
    console.log('Password: ', password);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inscription Utilisateur</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ">
        <IonItem fill="solid" className='ion-valid ion-margin-bottom' >
          <IonLabel position="floating">Identifiant</IonLabel>
          <IonInput type="text" value={username} onIonChange={e => setUsername(e.detail.value!)}></IonInput>
        </IonItem>  
        <IonItem fill="solid" className='ion-valid ion-margin-bottom' >
          <IonLabel position="floating">Numero de compte </IonLabel>
          <IonInput type="text" value={numeroCompte} onIonChange={e => setNumeroCompte(e.detail.value!)}></IonInput>
        </IonItem>  
        <IonItem fill="solid" className='ion-valid ion-margin-bottom' >
          <IonLabel position="floating">Mot de passe</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
        </IonItem>
            <IonButton onClick={handleLogin} className='ion-margin-bottom ' expand="full">Inscription</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Inscription;