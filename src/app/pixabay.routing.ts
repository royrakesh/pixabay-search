import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PixabayComponent } from './pixabay/pixabay.component';
import{NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: PixabayComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '**', component: NotfoundComponent}
];

export const PixabayRoutes = RouterModule.forRoot(routes);
