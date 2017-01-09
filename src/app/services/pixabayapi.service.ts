import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import  'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PixabayapiService {

    private query:string;
    private API_KEY:string;
    private BASE_URl:string
    private URL:string;

constructor(private __http:Http) { 

    this.API_KEY = '2440376-b554a0961a2d5fb08b71ac205';
    this.BASE_URl = 'https://pixabay.com/api/?key=';
    this.URL = this.BASE_URl + this.API_KEY + '&q=';
  

}

getImage(){
    return this.__http.get(this.URL+this.query)
            .map(res => res.json())

}


updateQuery(query:string){
    this.query = query;

}

}



