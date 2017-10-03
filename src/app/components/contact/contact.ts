export class Contact {

  constructor(
    public id: number = undefined,
    public firstName: string = "",
    public name: string = "",
    public street: string = "",
    public houseNumber: number = undefined,
    public province: string = "",
    public postalCode: number = undefined,
    public city: string = "",
    public country: string = "",
    public email: string = "",
    public phone: number = undefined,
    public fax: number = undefined,
    public website: string = "",
    public iban: number = undefined,
    public bic: number = undefined
  ){};

}
