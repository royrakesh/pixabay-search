import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {PixabayapiService} from '../services/pixabayapi.service';

@Component({
  selector: 'app-pixabay',
  templateUrl: './pixabay.component.html',
  styleUrls: ['./pixabay.component.css']
})
export class PixabayComponent implements OnInit {
  private images;
  query:string;
  constructor(private __pixabayapiServices : PixabayapiService) { }


 
  searchImage() {

    this.__pixabayapiServices.updateQuery(this.query);

    this.__pixabayapiServices.getImage().subscribe(
      image => { this.images = image.hits; console.log(image); }

    )

  }




  ngOnInit() {
  }

}