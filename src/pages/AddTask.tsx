import { Camera, CameraResultType } from "@capacitor/camera";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { NONAME } from "dns";
import { camera, refreshOutline, calculatorOutline } from "ionicons/icons";
import React, { useState } from "react";
import { Route, Router } from "react-router";
import Dashboard from "./Dashboard";

const AddTask: React.FC = () => {
  const [task, setTask] = useState({ respArea: "", title: "", desc: "" });
  const [preview, setPreview] = useState<boolean>(false);
  const [imagePath, setImagePath] = useState<any>("");

  const togglePreview = () => {
    setPreview((prevState) => !prevState);
    //button clicked works but seems like prevstate not working.....
  };

  const resetTask = () => {
    setTask({ respArea: "", title: "", desc: "" });
    setPreview(false);
    setImagePath("");
  };

  const takePicture = async () => {
    try {
      const cameraResult = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
      });

      const path = cameraResult?.path || cameraResult?.webPath;

      setImagePath("url(" + path + ")");

      return true;
    } catch (e: any) {
      console.log(e);
    }
  };
  return (
    <IonPage>
      <Route path="./dashboard" component={Dashboard}></Route>
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
                  onIonChange={(e) =>
                    setTask((prevState) => ({
                      ...prevState,
                      respArea: e.detail.value!,
                    }))
                  }
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
                  onIonChange={(e) =>
                    setTask((prevState) => ({
                      ...prevState,
                      title: e.detail.value!,
                    }))
                  }
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
                  onIonChange={(e) =>
                    setTask((prevState) => ({
                      ...prevState,
                      desc: e.detail.value!,
                    }))
                  }
                ></IonTextarea>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton onClick={takePicture} size="large">
                <IonIcon icon={camera}></IonIcon>
              </IonButton>
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
              <IonButton
                color="danger"
                expand="block"
                routerLink="./dashboard"
                onClick={resetTask}
              >
                <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
                Avbryt
              </IonButton>
            </IonCol>
          </IonRow>
          {preview && (
            <IonCard className="task-card">
              <div className="task-img-container" style={{backgroundImage: imagePath}}>
              </div>
              <div className="details-container">
                <IonCardHeader>
                  <IonCardTitle>{task.title}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  {task.desc}
                </IonCardContent>
                <IonButton className="task-button" onClick={togglePreview}>
                  Klar
                </IonButton>
              </div>
            </IonCard>

            // <IonRow>
            //   <IonCol>
            //     <IonCard>
            //       <IonGrid>
            //         <IonRow>
            //           <IonCol>
            //             <IonItem color="primary">Ingen bild vald</IonItem>
            //           </IonCol>
            //         </IonRow>
            //         <IonRow>
            //           <IonCol>
            //             <IonItem>{task.title}</IonItem>
            //           </IonCol>
            //         </IonRow>
            //         <IonRow>
            //           <IonCol className="ion-text-right">
            //               <IonButton>Klar</IonButton>
            //           </IonCol>
            //         </IonRow>
            //       </IonGrid>
            //     </IonCard>
            //   </IonCol>
            // </IonRow>
          )}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default AddTask;
