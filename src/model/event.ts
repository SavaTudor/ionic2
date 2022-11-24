export class EventClass{
    id: number;
    name: string;
    time: string;
    location:string;

    constructor(i: number, n:string, t:string, l:string){
        this.id = i;
        this.name = n;
        this.time = t;
        this.location = l;
    }

    public toString = () : string => {
        return `${this.name});${this.time};${this.location}\n`;  
    }

}