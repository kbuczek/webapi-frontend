import Endpoints from "./Endpoints";

class Customer extends Endpoints {
  constructor() {
    super("Customer");
  }

  getSingleCustomerById(id: number): string {
    return super.get() + "/" + id;
  }

  deleteSingleCustomerById(id: number): string {
    return super.get() + "/" + id;
  }
}

export default Customer;
