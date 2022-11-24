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
    IonLabel,
    IonInput
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { EventClass } from '../model/event';


interface ContainerProps {
    location: string
}
const LocationField: React.FC<ContainerProps> = (location) => {
    return(
        <div>
            <IonItem class="ion-text-center">
                <IonLabel position="floating"><h2>Location</h2></IonLabel>
                <IonInput value={location.location}></IonInput>
            </IonItem>
        </div>
    )
}

export default LocationField