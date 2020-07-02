import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProductServices} from '../services/produits.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  constructor(private productService: ProductServices, private router: Router) {
  }
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const nom = form.value['nom'];
    const description = form.value['description'];
    const prix = form.value['prix'];
    const quantite = form.value['quantite'];
    const photo = form.value['photo'];
    this.productService.addProduct(nom, description, prix, quantite, photo);
    this.router.navigate(['/Liste']);
  }

}

