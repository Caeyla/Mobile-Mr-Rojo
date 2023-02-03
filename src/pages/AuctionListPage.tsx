import React, { useState } from 'react';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonImg,
  IonBadge,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';

const AuctionListPage = () => {
  const [auctions, setAuctions] = useState([
    {
      id: 1,
      name: 'Auction 1',
      images: [
        'https://example.com/auction1-1.jpg',
        'https://example.com/auction1-2.jpg',
        'https://example.com/auction1-3.jpg',
      ],
      highestBid: 200,
    },
    {
      id: 2,
      name: 'Auction 2',
      images: [
        'https://example.com/auction2-1.jpg',
        'https://example.com/auction2-2.jpg',
        'https://example.com/auction2-3.jpg',
      ],
      highestBid: 500,
    },
    {
      id: 3,
      name: 'Auction 3',
      images: [
        'https://example.com/auction3-1.jpg',
        'https://example.com/auction3-2.jpg',
        'https://example.com/auction3-3.jpg',
      ],
      highestBid: 100,
    },
  ]);

  return (
    <IonPage>
    <IonHeader>
        <IonToolbar>
          <IonTitle>Liste des Encheres</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        {auctions.map((auction) => (
          <IonItem key={auction.id} className="ion-margin-bottom">
            <IonImg src={auction.images[0]} />
            <IonLabel>
              <h2>{auction.name}</h2>
              <IonBadge color="secondary">
                Highest Bid: ${auction.highestBid}
              </IonBadge>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
    </IonPage>
  );
};

export default AuctionListPage;
