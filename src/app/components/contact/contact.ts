export class Contact {

  constructor(
    public id: number,
    public firstName: string,
    public name: string,
    public street: string,
    public houseNumber: number,
    public province: string,
    public postalCode: number,
    public city: string,
    public country: string,
    public email: string,
    public phone: number,
    public fax: number,
    public website: string,
    public iban: number,
    public bic: number
  ){};

}
