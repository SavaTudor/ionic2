import './EventList.css';
import React, { useEffect, useRef, useState } from 'react';
import { Storage } from '@ionic/storage'
import {
    IonRow,
    IonCol,
    IonItemSliding,
    IonItem,
    IonItemOption,
    IonItemOptions
} from '@ionic/react';
import { EventClass } from '../model/event';


interface ContainerProps {
    method: any
}

const EventList: React.FC<ContainerProps> = (method) => {
    const [data, setData] = useState<Array<EventClass>>()
    const [disabled, setDisabled] = useState(false)
    const store = new Storage();
    

    const deleteEvent = () => {
        // fetch('https://httpbin.org/post', {
        //      method: 'POST',
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({a: 7, str: 'Some string: &=&'})
        //     }).then(res => res.json())
        //     .then(res => console.log(res));
    }


    useEffect(() => {
        store.create();
        fetch("http://localhost:8080/events")
            .then(response => response.json())
            .then(res => setData(res))
            .catch(error => console.error(error))
        if (data !== undefined) {
            for (let i = 0; i < data?.length; i++) {
                console.log(data[i].id + " " + data[i].name + " " + data[i].location + " " + data[i].time);
                store.set(data[i].id.toString(), data[i].toString())
            }
        }
        // console.log(store.keys())
      
    }, [!disabled])


    const repaintTable = () =>{
        fetch("http://localhost:8080/events")
        .then(response => response.json())
        .then(res => setData(res))
        .catch(error => console.error(error))
    if (data !== undefined) {
        for (let i = 0; i < data?.length; i++) {
            console.log(data[i].id + " " + data[i].name + " " + data[i].location + " " + data[i].time);
        }
    }
    }

    if (data != undefined) {
        return (
            <div>
                {data.map((event) => (
                    <IonItemSliding key={event.id} >
                        <IonItemOptions side="start">
                            <IonItemOption color="success">Done</IonItemOption>
                        </IonItemOptions>
                        <IonItem>
                            <IonRow className="row" key={event.id}>
                                <IonCol className="ion-align-self-start">
                                    <p>{event.id}</p>
                                </IonCol>
                                <IonCol className="ion-align-self-start">
                                    <p>{event.name}</p>
                                </IonCol>
                                <IonCol className="ion-align-self-start ion-padding">
                                    {/* <p>{event.time.split('T')[0]}</p> */}
                                    <p>{new Intl.DateTimeFormat("en-GB", {
                                        year: "numeric",
                                        month: "short",
                                        day: "2-digit"
                                    }).format(Date.parse(event.time.split('T')[0]))}
                                    </p>
                                </IonCol>
                                <IonCol className="ion-align-self-start ion-padding">
                                    <p>{event.time.split('T')[1].slice(0, -3)}</p>
                                </IonCol>
                                <IonCol className="ion-align-self-start">
                                    <p>{event.location}</p>

                                </IonCol>
                            </IonRow>
                        </IonItem>
                        <IonItemOptions side="end">
                            <IonItemOption color="secondary" onClick={() => {
                                method.method(event)
                                repaintTable();
                            }}>Edit</IonItemOption>
                            <IonItemOption color="danger" >Delete</IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                ))}
            </div>
        );
    } else {
        return (
            <div>
                <IonRow>
                    <IonCol size="9">
                        <p>No records to show</p>
                    </IonCol>
                </IonRow>

            </div>
        )
    }
};

export default EventList;
