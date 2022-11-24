import React, { useEffect, useRef, useState } from 'react';
import { EventClass } from '../model/event';
import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import EventList from '../components/EventList';
import AddButton from '../components/AddButton';
import { add, save, exit, locate } from 'ionicons/icons';
import EventDetailsPopUp from '../components/EventDetailsPopUp';
import { Network } from '@capacitor/network';
import { Geolocation } from '@capacitor/geolocation';

const Home: React.FC = () => {
  const [show, setShow] = useState(false);
  const [eventSelected, setEventSelected] = useState(false)
  const [event, setEvent] = useState(new EventClass(0, "", "", ""))
  const [connected, setConnected] = useState(true)
  const [showStatus, setShowStatus] = useState(true)
  const [latitude, setLatitude] = useState()
  const [longitute, setLongitude] = useState()
 

  const handleEditAddClick = (event?: EventClass) => {
    setShow(!show)
    if (event !== undefined) {
      setEvent(event)
      setEventSelected(true)
    } else {
      setEventSelected(false)
    }
  }

  Network.addListener('networkStatusChange', status => {
    console.log('Network status changed', status);
  });


  const logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
  
    setConnected(status.connected)
  };


  const openLocation = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    window.open("https://maps.google.com?q="+coordinates.coords.latitude+","+coordinates.coords.longitude);
  };


  useEffect(()=>{
    logCurrentNetworkStatus()
    setTimeout(() => {
      setShowStatus(false);
    }, 3000);
  }, [])



  const saveEvent = (id: number, name: string, location: string, time: string) => {
    setEvent(new EventClass(id, name, location, time))
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader >
          {connected && showStatus &&
            <IonToolbar color="success" class = "network">
            <IonTitle class="ion-padding title">Online</IonTitle>
            </IonToolbar>
          }
          {!connected && showStatus &&
            <IonToolbar color="danger" class="network">
            <IonTitle class="ion-padding title">Offline</IonTitle>
            </IonToolbar>
          }
          <IonToolbar color="primary">
            <IonTitle class="ion-padding title">My Events</IonTitle>
          </IonToolbar>
        </IonHeader>
        {show && (
          <div>
            <EventDetailsPopUp eventSelected={eventSelected} event={event} method={handleEditAddClick} />

          </div>
        )}

        {!show && (
          <div>
            <EventList method={handleEditAddClick} />

            <IonFooter className="ion-no-border">
              <IonButton className="ion-padding" shape="round" onClick={() => handleEditAddClick(undefined)}>
                <IonIcon slot="icon-only" icon={add}></IonIcon>
              </IonButton>
              <IonButton className="ion-padding ion-float-right" shape="round" onClick={() => openLocation()}>
                <IonIcon slot="icon-only" icon={locate}></IonIcon>
              </IonButton>
            </IonFooter>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
