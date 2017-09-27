export class Factuur {

    constructor(
      public id: number,
      public customer: number,
      public factuurItem: FactuurItem,
      public date: Date,
      public paymentTerms: number
    ){}

}

interface FactuurItem{
  id: number,
  description: string,
  price: number,
  amount: number,
  tax: number
}
