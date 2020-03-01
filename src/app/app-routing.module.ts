import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelListComponent} from './travel-list/travel-list.component'
import { BlogComponent} from './blog/blog.component'
import { TravelDescriptionComponent } from './travel-description/travel-description.component';
import { CartComponent} from './cart/cart.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },{
    path: 'travel-list', component: TravelListComponent
  },{
    path: 'trips/:tripId', component: TravelDescriptionComponent
  },{
    path: 'cart', component: CartComponent
  
  },{
    path: 'blog', component: BlogComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
