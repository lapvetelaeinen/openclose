import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Route } from "react-router";
import AddTask from "./AddTask";
import Dashboard from "./Dashboard";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route path="/dashboard" component={Dashboard} />
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput placeholder="Email"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput placeholder="Lösenord"></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-align-items-center">
              <IonCol className="ion-text-center">
                <IonButton routerLink="./dashboard">Logga in</IonButton>
              </IonCol>
            </IonRow>
            <IonRow className="ion-align-items-center">
              <IonCol className="ion-text-center">
                Har du glömt ditt lösenord?
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonRouterOutlet>
    </IonPage>
  );
};
export default Login;
