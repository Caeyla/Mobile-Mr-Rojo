import React, { FormEvent, useState } from 'react';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonToast,
} from '@ionic/react';

const RechargeForm = () => {
  const [password, setPassword] = useState('');
  const [amount, setAmount] = useState(0);
  const [showToast, setShowToast] = useState(false);
  
  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();
    // Valider le mot de passe et le montant
    if (password === 'secret' && amount > 0) {
      // Réaliser la recharge du compte
      setShowToast(true);
    }
  };

  return (
    <IonContent>
      <form onSubmit={(event) => handleSubmit(event)}>
        <IonItem>
          <IonLabel position="floating">Mot de passe</IonLabel>
          <IonInput
            type="password"
            value={password}
            onIonChange={(event) => setPassword(event.detail.value!)}
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Montant</IonLabel>
          <IonInput
            type="number"
            value={amount}
            onIonChange={(event) => setAmount(parseInt(event.detail.value!))}
            required
          />
        </IonItem>
        <IonButton type="submit">Recharger</IonButton>
      </form>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Le compte a été rechargé avec succès"
        duration={3000}
      />
    </IonContent>
  );
};

export default RechargeForm;
