import React, { useState, useRef } from "react";
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

import { calculatorOutline, refreshOutline } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import TaskCard from "./components/TaskCard";

const App: React.FC = () => {
  const [task, setTask] = useState({respArea: '', title: '', desc: ''});
  const [preview, setPreview] = useState<boolean>(false);

  const togglePreview = () => {
    setPreview(prevState => !prevState);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lägg till uppgift for fucks sake</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Ansvarsområde</IonLabel>
                <IonSelect
                  value={task.respArea}
                  okText="Ok"
                  cancelText="Avbryt"
                  onIonChange={(e) => setTask(prevState => ({...prevState, respArea: e.detail.value!}))}
                >
                  <IonSelectOption value="bar">Bar</IonSelectOption>
                  <IonSelectOption value="golv">Golv</IonSelectOption>
                  <IonSelectOption value="gardeob">Garderob</IonSelectOption>
                  <IonSelectOption value="kök">Kök</IonSelectOption>
                  <IonSelectOption value="disk">Disk</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Uppgiftens titel</IonLabel>
                <IonInput
                  value={task.title}
                  onIonChange={(e) => setTask(prevState => ({...prevState, title: e.detail.value!}))}
                ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Beskrivning</IonLabel>
                <IonTextarea
                  value={task.desc}
                  onIonChange={(e) => setTask(prevState => ({...prevState, desc: e.detail.value!}))}
                ></IonTextarea>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton color="success" expand="block" size="large">
                <IonIcon slot="start" icon={refreshOutline}></IonIcon>
                Publicera
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-left">
              <IonButton color="warning" expand="block" onClick={togglePreview}>
                <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
                Förhandsvisa
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-right">
              <IonButton color="danger" expand="block">
                <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
                Avbryt
              </IonButton>
            </IonCol>
          </IonRow>
          {preview && (<IonRow>
            <IonCol>
              <IonCard>
                <IonItem color="primary">Ingen bild vald</IonItem>
                <IonCardHeader>
                  <IonCardTitle>{task.title}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>{task.desc}</IonCardContent>
                <IonButton>Klar</IonButton>
              </IonCard>
            </IonCol>
          </IonRow>)}
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
