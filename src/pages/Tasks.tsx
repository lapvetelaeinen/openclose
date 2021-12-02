import {
  IonAlert,
  IonButton,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonReorder,
  IonReorderGroup,
  IonRouterOutlet,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { ItemReorderEventDetail } from "@ionic/core";
import { Route } from "react-router";
import AddTask from "./AddTask";
import { add, refreshOutline } from "ionicons/icons";

const Tasks: React.FC = () => {
  const [showAlert4, setShowAlert4] = useState(false);
  const [newTask, setNewTask] = useState("");

  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log("Dragged from index", event.detail.from, "to", event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }

  return (
    <IonPage>
      <Route path="./addtask" component={AddTask}></Route>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stängning bar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="fab-button" onClick={() => setShowAlert4(true)}>
          <IonIcon slot="start" icon={add}></IonIcon>
        </div>
        <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
          <IonItem
            className="task-list-item"
            onClick={() => console.log(newTask)}
          >
            <IonLabel>Task 1</IonLabel>
            <IonReorder slot="end" />
          </IonItem>
          <IonItem className="task-list-item">
            <IonLabel>Task 2</IonLabel>
            <IonReorder slot="end" />
          </IonItem>
          <IonItem className="task-list-item">
            <IonLabel>Task 3</IonLabel>
            <IonReorder slot="end" />
          </IonItem>
        </IonReorderGroup>
        <IonAlert
          isOpen={showAlert4}
          onDidDismiss={() => setShowAlert4(false)}
          cssClass="my-custom-class"
          header={"Ny uppgift"}
          inputs={[
            {
              name: "task",
              type: "text",
              placeholder: "Uppgiftens namn",
            },
          ]}
          buttons={[
            {
              text: "Avbryt",
              role: "cancel",
              cssClass: "secondary",
              handler: () => {
                console.log("Confirm Cancel");
              },
            },
            {
              text: "Ok",
              handler: (data) => {
                setNewTask(data.task);
              },
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};
export default Tasks;
