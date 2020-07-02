import {Component, OnInit} from '@angular/core';
import {ProductServices} from '../services/produits.services';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {

  nom: string;
  description: string;
  prix: string;
  quantite: string;
  photo: string;

  constructor(private productServices: ProductServices, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.nom = this.productServices.getProductById(+id).nom;
    this.description = this.productServices.getProductById(+id).description;
    this.prix = this.productServices.getProductById(+id).prix;
    this.quantite = this.productServices.getProductById(+id).quantite;
    this.photo = this.productServices.getProductById(+id).photo;
  }

  onSubmit(form: NgForm) {
    const id = this.route.snapshot.params['id'];
    const nom = form.value['nom'];
    const description = form.value['description'];
    const prix = form.value['prix'];
    const quantite = form.value['quantite'];
    const photo = form.value['photo'];
    this.productServices.updateProduct(+id, nom, description, prix, quantite, photo);
    this.router.navigate(['/Liste']);
  }
}
