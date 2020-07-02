import { Component, OnInit } from '@angular/core';
import { ProduitServiceService } from '../produit-service.service';
import { Produit } from 'src/app/produit';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private produitService:ProduitServiceService) { }

  ngOnInit() {
  }

  isAdded = false ;
  ajouterProduit(produit:Produit){
    this.produitService.ajouterProduit(produit) ;
    this.isAdded = true ;
  }

}
