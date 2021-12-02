import React from "react";
import { Auth } from "aws-amplify";
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

import { IonReactRouter } from "@ionic/react-router";
import { RouteComponentProps, withRouter } from "react-router-dom";

// have no idea why this is working, but it does.
//added following lines and wrapped the exported component in withRouter

// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
  param1: string;
};

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & {
  someString: string;
};

class Register extends React.Component<PropsType> {
  state = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false,
    },
  };

  //   clearErrorState = () => {
  //     this.setState({
  //       errors: {
  //         cognito: null,
  //         blankfield: false,
  //         passwordmatch: false
  //       }
  //     });
  //   }

  handleSubmit = async (event: any) => {
    event.preventDefault();

    // Form validation
    //   this.clearErrorState();
    //   const error = Validate(event, this.state);
    //   if (error) {
    //     this.setState({
    //       errors: { ...this.state.errors, ...error }
    //     });
    //   }

    // AWS Cognito integration here
    const { username, email, password } = this.state;

    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email,
        },
      });
      console.log(signUpResponse);
      this.props.history.push("/welcome");
    } catch (error: any) {
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err,
        },
      });
    }
  };

  clickButton = () => {
    this.props.history.push("/tasks");
  };

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Registrering</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    placeholder="Användarnamn"
                    onIonChange={(e) =>
                      this.setState((prevState) => ({
                        ...prevState,
                        username: e.detail.value!,
                      }))
                    }
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    placeholder="Email"
                    onIonChange={(e) =>
                      this.setState((prevState) => ({
                        ...prevState,
                        email: e.detail.value!,
                      }))
                    }
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    placeholder="Lösenord"
                    type="password"
                    onIonChange={(e) =>
                      this.setState((prevState) => ({
                        ...prevState,
                        password: e.detail.value!,
                      }))
                    }
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonInput
                    placeholder="Bekräfta lösenord"
                    type="password"
                    onIonChange={(e) =>
                      this.setState((prevState) => ({
                        ...prevState,
                        confirmpassword: e.detail.value!,
                      }))
                    }
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow className="ion-align-items-center">
              <IonCol className="ion-text-center">
                <IonButton onClick={this.handleSubmit}>Registrera</IonButton>
              </IonCol>
            </IonRow>
            <IonRow className="ion-align-items-center">
              <IonCol className="ion-text-center">
                Har du redan ett konto?
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
}

export default withRouter(Register);
