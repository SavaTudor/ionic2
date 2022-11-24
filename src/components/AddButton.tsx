import React, {useEffect, useRef, useState} from 'react';
import {
    IonRow,
    IonCol,
    IonItemSliding,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonButton,
    IonIcon
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { EventClass } from '../model/event';


interface ContainerProps { }

const AddButton: React.FC<ContainerProps> = () => {
    return(
        <IonButton className="ion-padding" shape="round">
           <IonIcon slot="icon-only" icon={add}></IonIcon>
        </IonButton>
    )
}

export default AddButton;