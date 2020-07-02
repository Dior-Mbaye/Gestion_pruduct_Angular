export class ProductServices {

  products = [
    {
      id: 0,
      nom: 'Chips paysannes',
      description: 'description chocolat',
      prix: '250',
      quantite: '8',
      photo: 'https://www.monoprix.fr/assets/images/grocery/2712162/580x580.jpg?impolicy=Small_Grocery'
    },
    {
      id: 1,
      nom: 'Jus de pomme',
      description: 'description chocolat',
      prix: '700',
      quantite: '12',
      photo: 'https://www.monoprix.fr/assets/images/grocery/1682628/580x580.jpg?impolicy=Small_Grocery'
    },
    {
      id: 2,
      nom: 'Confiture',
      description: 'description chocolat',
      prix: '650',
      quantite: '52',
      photo: 'https://www.monoprix.fr/assets/images/grocery/3010907/580x580.jpg?impolicy=Small_Grocery'
    },
    {
      id: 3,
      nom: 'Ferrero Rocher',
      description: 'description chocolat',
      prix: '1200',
      quantite: '32',
      photo: 'https://www.monoprix.fr/assets/images/grocery/289/580x580.jpg?impolicy=High_Grocery'
    },
  ];



  addProduct(nom: string, description: string, prix: string, quantite: string, photo: string) {
    const produit = {
      id: 0,
      nom: '',
      description: '',
      prix: '',
      quantite: '',
      photo: ''
    };

    produit.nom = nom;
    produit.description = description;
    produit.prix = prix;
    produit.quantite = quantite;
    produit.photo = photo;
    produit.id = this.products[(this.products.length - 1)].id + 1;
    this.products.push(produit);
  }

  getProductById(id: number) {
    const produit = this.products.find(
      (product) => {
        return product.id === id;
      }
    );
    return produit;
  }

  getProductByName(nom: string) {
    const produit = this.products.find(
      (product) => {
        return product.nom.toLowerCase() === nom.toLowerCase();
      }
    );
    return produit;
  }


  updateProduct(id: number, nom: string, description: string, prix: string, quantite: string, photo: string) {
    for (const i in this.products) {
      if (this.products[i].id === id) {
        this.products[i].nom = nom;
        this.products[i].description = description;
        this.products[i].prix = prix;
        this.products[i].quantite = quantite;
        this.products[i].photo = photo;
        this.products.push();
      }


    }

  }

  deleteProduit(id: number) {
    for (const i in this.products) {
      if (this.products[i].id === id) {
        this.products.splice(+i, 1);
      }
    }
  }
}
