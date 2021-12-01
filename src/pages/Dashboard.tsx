import {
  IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonRouterOutlet,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import React from "react";
import { Route } from "react-router";
import AddTask from "./AddTask";
  
  const Dashboard: React.FC = () => {
    return (
      <IonPage>
          <Route path="./addtask" component={AddTask}></Route>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonButton routerLink="./addtask">
            Skapa ny uppgift
          </IonButton>
        </IonContent>
      </IonPage>
    );
  };
  export default Dashboard;