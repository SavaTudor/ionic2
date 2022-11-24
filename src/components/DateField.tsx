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
    date: string
}
const DateField: React.FC<ContainerProps> = (date) => {
    return(
        <div>
            <IonItem class="ion-text-center">
                <IonLabel position="floating"><h2>Date</h2></IonLabel>
                <IonInput value={date.date}></IonInput>
            </IonItem>
        </div>
    )
}

export default DateField