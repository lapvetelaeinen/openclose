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
  
  const Welcome: React.FC = () => {
    return (
      <IonPage>
          <Route path="/dashboard" component={Dashboard} />
          <IonHeader>
            <IonToolbar>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonGrid className="center-box">
                <IonRow>
                    <IonCol>
                        <div className="title-text">
                            Välkommen!
                        </div>
                        <div className="body-text">
                            Vi har skickat en mail till dig. Följ länken i mailet för att börja använda openclose. Kul att ha dig ombord!
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
          </IonContent>
      </IonPage>
    );
  };
  export default Welcome;
  