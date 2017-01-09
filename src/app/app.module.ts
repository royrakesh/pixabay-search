import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {PixabayRoutes} from './pixabay.routing';

/*Component*/
import { AppComponent } from './app.component';
import { PixabayComponent } from './pixabay/pixabay.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';

/*Services*/
import {PixabayapiService} from './services/pixabayapi.service';

@NgModule({
  declarations: [
    AppComponent,
    PixabayComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    NotfoundComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PixabayRoutes
  ],
  providers: [PixabayapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
