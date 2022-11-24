import React, {useEffect, useRef, useState} from 'react';
import {
    IonRow,
    IonCol,
    IonItemSliding,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonButton,
    IonIcon,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonFooter,
    IonInput,
    IonLabel,
    IonDatetime,
    IonAlert
} from '@ionic/react';
import { EventClass } from '../model/event';
import NameField from '../components/NameField'
import LocationField from '../components/LocationField'
import TimeField from '../components/TimeField'
import DateField from '../components/DateField'
import { add,save, exit} from 'ionicons/icons';
interface ContainerProps {
    eventSelected:boolean,
    event?: EventClass,
    method?:any
}
const EventDetailsPopUp: React.FC<ContainerProps> = (props) => {
    const [id, setId] = useState<number | undefined>();
    const [name, setName] = useState<string | undefined>("")
    const [location, setLocation] =  useState<string | undefined>("")
    const [time, setTime] =  useState<string | undefined>("")
    const [showAlert, setShowAlert] = useState(false);

    const verifyInput = () =>{
        let err = "";
        if(name==""){
            err += "Please insert a name\n"
        }
        if(location==""){
            err+="Please insert a place\n"
        }
        if(time==null){
            err += "Please select a time\n"
        }
        if(err!==""){
            console.log("ALERTA")
            setShowAlert(true)
        }else{
            console.log("FARA ALERTA")
            setShowAlert(false)
        }
        console.log(showAlert)   
    }


    const sendPostRequest = () =>{
       
        
            if(name!==undefined && location!==undefined && time!==undefined){
                console.log(JSON.stringify(new EventClass(0, name, location, time.concat(":00"))));
                let xhr = new XMLHttpRequest();
                xhr.open("POST", "http://localhost:8080/events");
            
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json");
            
            
                if(id!==undefined){
                    xhr.send(JSON.stringify(new EventClass(id,  name, time, location)));
                }
                else{
                    xhr.send(JSON.stringify(new EventClass(0,  name, time.slice(0,-6), location)));
                }
            }
    }

    useEffect(() =>{
        if(props?.eventSelected){
            setId(props?.event?.id)
            setName(props.event?.name)
            setLocation(props.event?.location)
            setTime(props.event?.time)
        }else{
            setName("")
            setLocation("")
            setTime("")
        }
    }, [])



    return(
        <div>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{(props.event!==undefined)
                    ?   "Details"
                    :   "New Event"
            }</IonTitle>
                </IonToolbar>
            </IonHeader>
            <div>
            <IonItem class="ion-text-center">
                <IonLabel position="floating"><h2>Name</h2></IonLabel>
                <IonInput value={name} onIonChange={(e:any) =>setName(e.target.value)}></IonInput>
            </IonItem>
            </div>
            <div>
            <IonItem class="ion-text-center">
                <IonLabel position="floating"><h2>Location</h2></IonLabel>
                <IonInput value={location} onIonChange={(e:any) =>setLocation(e.target.value)}></IonInput>
            </IonItem>
            </div>
            <div>
            <IonItem class="ion-text-center">
                <IonLabel position="floating"><h2>Time</h2></IonLabel>
                <IonDatetime value={time} onIonChange={(e:any) =>setTime(e.target.value)}></IonDatetime>
            </IonItem>
            </div>
             <IonFooter className="ion-no-border">
              <IonButton className="ion-padding item-start" shape="round" onClick={()=>{
                verifyInput()
                console.log(showAlert)
                if(showAlert){
                    console.log("AICI MA")
                }else{
                    console.log("KASDJOSAID")

                    sendPostRequest()
                    props?.method()
                }
              }}>
                {showAlert && (
                <div>
                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header="Alert"
                    subHeader="Important message"
                    message="This is an alert!"
                    buttons={['OK']}
                />
                </div>
        )}
              <IonIcon slot="icon-only" icon={save}></IonIcon>
              </IonButton>
              <IonButton className="ion-padding ion-float-right" shape="round" onClick={()=>{props?.method()}}>
              <IonIcon slot="icon-only" icon={exit}></IonIcon>
              </IonButton>
            </IonFooter>
        </div>
    )
}

export default EventDetailsPopUp