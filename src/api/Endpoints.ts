import BaseUrl from "./BaseUrl";

abstract class Endpoints {
  private address: string;

  constructor(address: string) {
    this.address = address;
  }

  get(): string {
    return BaseUrl + "/" + this.address;
  }

  getId(id: number): string {
    return BaseUrl + "/" + this.address + "/" + id;
  }
}

export default Endpoints;
