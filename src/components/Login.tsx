import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

interface ContainerProps { }

const Login: React.FC<ContainerProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username: ', username);
    console.log('Password: ', password);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Utilisateur</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ">
        <IonItem fill="solid" className='ion-valid ion-margin-bottom' >
          <IonLabel position="floating">Identifiant</IonLabel>
          <IonInput type="text" value={username} onIonChange={e => setUsername(e.detail.value!)}></IonInput>
        </IonItem>  
        <IonItem fill="solid" className='ion-valid ion-margin-bottom' >
          <IonLabel position="floating">Mot de passe</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}></IonInput>
        </IonItem>
            <IonButton onClick={handleLogin} className='ion-margin-bottom ' expand="full">Connexion</IonButton>
            <a className='ion-margin-bottom '  href='/home'>s'incrire</a>
      </IonContent>
    </IonPage>
  );
};

export default Login;
