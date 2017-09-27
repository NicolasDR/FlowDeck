export class Bedrijf{

  constructor(
    public id: number,
    public companyName: string,
    public vatNumber: string,
    public address: Address,
    public email: string,
    public phone: number,
    public website: string,
    public fax: number,
    public iban: number,
    public bic: number
  ){}
}

interface Address{
  street: string,
  houseNumber: number,
  province: string,
  postalCode: number,
  city: string,
  country: string
}
