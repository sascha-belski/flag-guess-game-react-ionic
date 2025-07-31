import React from 'react';
import { IonPage, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { IonCard, IonCardContent } from '@ionic/react';

import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

import { IonIcon } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';

const About: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <span>About</span>
            <span style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
              <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                <img src={viteLogo} className="logo" alt="Vite logo" style={{ maxHeight: '24px' }} />
              </a>
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" style={{ maxHeight: '24px' }} />
              </a>
              <a href="https://ionicframework.com" target="_blank" rel="noopener noreferrer">
                <IonIcon icon={logoIonic} color="primary"></IonIcon>
              </a>
            </span>
          </div>
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
        <IonCardContent>
          <p>This is a demonstration project built using <strong>React</strong>, <strong>TypeScript</strong>, <strong>Vite</strong>, and the <strong>Ionic Framework</strong> to explore public holidays by country and date.</p>

          <p><strong>Note:</strong> This app uses a free REST API courtesy of
          <a href="https://openholidaysapi.org/swagger/index.html" target="_blank">openholidaysapi.org</a>
          for <strong>educational and demonstrational purposes only</strong>.</p>

          <p>If you're interested, feel free to fork the corresponding GitHub repository.
          Improvements and contributions are highly appreciated!</p>
          <br />
          <p>Alexander Belski 2025</p>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </IonPage>
);

export default About;
