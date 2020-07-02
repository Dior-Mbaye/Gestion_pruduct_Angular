import { Injectable } from '@angular/core';
import { Produit } from 'src/app/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitServiceService {
  private produits : Array<Produit>

  constructor() { }
  public getProduits():Array<Produit>{
    return this.produits ;
  }

  public ajouterProduit(newProduit:Produit){
    return this.produits.push(newProduit)
  }

  public getProduit(nom:string):Produit{
    for(const produit of this.produits){
      if(produit.getNom() === nom){
        return produit ;
      }
    }
  }

  public supprimerProduit(nom:string){
    for(const produit of this.produits){
      if(produit.getNom() === nom){
        this.produits.splice(this.produits.indexOf(produit)) ;
      }
    }
  }
}
