import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router' ;
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ListeProduitsComponent} from './liste-produits/liste-produits.component';
import {AjoutProduitComponent} from './ajout-produit/ajout-produit.component';
import { AlertModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {ProductServices} from '../app/services/produits.services';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const appRoutes: Routes = [
  {path: 'Liste', component: ListeProduitsComponent},
  {path: 'Ajout', component: AjoutProduitComponent},
  {path: 'Liste/:id', component: UpdateProduitComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ListeProduitsComponent,
    AjoutProduitComponent,
    UpdateProduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot()
  ],
  providers: [
    ProductServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
