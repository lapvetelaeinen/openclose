import React, { useState, useRef } from "react";
import {
  IonApp,
  IonRouterOutlet,
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

import { IonReactRouter } from "@ionic/react-router";

import { Camera, CameraResultType } from "@capacitor/camera";
import { calculatorOutline, camera, refreshOutline } from "ionicons/icons";

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
import "./theme/custom-components.css";

import TaskCard from "./components/TaskCard";
import { Redirect, Route, useHistory } from "react-router";
import Login from "./pages/Login";
import AddTask from "./pages/AddTask";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Register from "./components/auth/Register";
import Welcome from "./pages/Welcome";

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
        <Route path="/login" component={Login} />
        <Route path="/addtask" component={AddTask} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/register" component={Register} />
        <Route path="/welcome" component={Welcome} />
        <Redirect exact from="/" to="/login" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
