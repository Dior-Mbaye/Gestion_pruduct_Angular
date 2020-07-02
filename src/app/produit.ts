export class Produit {
    nom:string  ;
  prix: number ;
  description : string ;
  stock : number ;
  id : number ;
  
  constructor(nom, prix, description,stock) {
    this.nom = nom ;
    this.prix = prix ;
    this.description = description ;
    this.stock = stock ;
   }

    
   public getId():number { return this.id }
    public setId(newId:number) { this.id = newId } 

    public getNom():string { return this.nom }
    public setNom(newNom:string) { this.nom = newNom } 

    public getPrix():number { return this.prix }
    public setPrix(newPrix:number) { this.prix = newPrix } 

    public getDescription():string { return this.description }
    public setDescription(newDescription:string) { this.description = newDescription }

    public getStock():number { return this.stock }
    public setStock(newStock:number) { this.prix = newStock }
}
