import { IonApp } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css'

import AppMenu from './components/AppMenu';

import Game from './pages/Game';
import About from './pages/About';

const App: React.FC = () => (

    <>
      <IonApp>
        {/* <IonReactHashRouter basename="/holidays-react-ionic-app"></IonReactHashRouter> */}
        <IonReactHashRouter>
        {/* <div className="app-device-frame"> */}
            <AppMenu />
            <IonRouterOutlet id="main-content">
              <Switch>
                <Route exact path="/game" component={Game} />
                <Route exact path="/about" component={About} />
                <Redirect exact from="/" to="/game" />
              </Switch>
            </IonRouterOutlet>
          {/* </div> */}
        </IonReactHashRouter>
      </IonApp>
    </>
  );

export default App
