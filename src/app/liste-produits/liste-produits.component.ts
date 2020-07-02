import {Component, Input, OnInit} from '@angular/core';
import {ProductServices} from '../services/produits.services';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  @Input() indexProduct: number;
  @Input() productName: string;
  @Input() index: number;
  @Input() id: number;

  products: any[];
  nbProducts: number;
  nbProductsTotal: number;
  totalEnStock: number;

  constructor(private produitService: ProductServices, private router: Router) {
  }


  ngOnInit() {
    this.products = this.produitService.products;
    this.nbProducts = this.products[(this.products.length - 1)].id + 1;
    this.totalEnStock = 0;
    this.nbProductsTotal = 0;
    for (let p of this.products) {
      this.totalEnStock += +p.prix;
      this.nbProductsTotal += +p.quantite;
    }
  }

  onSubmit(form: NgForm) {
    const id = form.value.id;
    if (this.produitService.getProductByName(id) != null) {
      console.log(this.produitService.getProductByName(id));
    } else if (this.produitService.getProductByName(id) != null) {
      console.log(this.produitService.getProductByName(id));
    }
  }


  delete(id: number) {
    if (confirm('Vous allez supprimer un produit')) {
      this.produitService.deleteProduit(id);
      this.router.navigate(['/Liste']);
    } else {
      this.router.navigate(['/Liste']);
    }
  }

}
