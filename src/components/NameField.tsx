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
    name: string
}
const NameField: React.FC<ContainerProps> = (name) => {
    return(
        <div>
            <IonItem class="ion-text-center">
                <IonLabel position="floating"><h2>Name</h2></IonLabel>
                <IonInput value={name.name}></IonInput>
            </IonItem>
        </div>
    )
}

export default NameField