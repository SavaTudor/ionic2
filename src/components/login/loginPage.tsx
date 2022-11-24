import { IonCol, IonRow, IonHeader, IonItem, IonTitle, IonToolbar, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonInput, IonButton, IonList } from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Redirect, Route } from 'react-router';
import Home from '../../pages/Home';
import { useHistory } from "react-router-dom";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();


    const handleLogin = () => {
        history.push("/dashboard");
        //validate inputs code not shown
        // const loginData = {
        //     email: email,
        //     password: password,
        // };
        // const api = axios.create({
        //     baseURL: `https://reqres.in/api`,
        // });
        // api.post("/login", loginData)
        //     .then((res) => {
        //         console.log(res)
        //         // history.push("/dashboard");
        //     })
        //     .catch((error) => {
        //         postMessage("Auth failure! Please create an account");
        //     });
    };



    return (
        <IonList>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>


          
                    <IonIcon
                        style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={personCircle}
                    />
                

           
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput
                            type="text"
                            value={email}
                            onIonChange={(e) => setEmail(e.detail.value!)}
                        >
                        </IonInput>
                    </IonItem>
               
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="floating"> Password</IonLabel>
                        <IonInput
                            type="password"
                            value={password}
                            onIonChange={(e) => setPassword(e.detail.value!)}
                        >
                        </IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton expand="block" onClick={()=>handleLogin()}>
                        Login
                    </IonButton>
                </IonCol>
            </IonRow>
            {/* <IonPage>
                <IonRouterOutlet>
                    <Route exact path="/dashboard" component={Home} />
                </IonRouterOutlet>
            </IonPage> */}
        </IonList>
    )

}

export default LoginPage;