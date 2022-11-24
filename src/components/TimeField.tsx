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
    IonInput,
    IonDatetime
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { EventClass } from '../model/event';


interface ContainerProps {
    time: string
}
const TimeField: React.FC<ContainerProps> = (time) => {
    return(
        <div>
            <IonItem class="ion-text-center">
                <IonLabel position="floating"><h2>Time</h2></IonLabel>
                <IonDatetime value={time.time}></IonDatetime>
            </IonItem>
        </div>
    )
}

export default TimeField