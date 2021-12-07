export class Customer {
   public customerName !: string;
   public customerID !: number;
   public customerAddress !: string;
   public customerPhone !: number;
constructor(name :string,  id :number, address:string , phone : number)
{
    this.customerName=name;
    this.customerID=id;
    this.customerAddress=address;
    this.customerPhone=phone;
}
}
