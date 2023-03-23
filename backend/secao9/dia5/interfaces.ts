// ./interfaces.ts
export interface IVehDrive {
  drive(): void;
}

export interface IVehFly {
  fly(): void;
}

export interface IVehicleFuturistic extends IVehDrive, IVehFly {}

export interface IAdressbyCep {
  getAddressByCEP(cep: string, number: number): Promise<string>;
}

export interface ICepByAddress {
  getCepByAddress(address: string, number: number): Promise<string>;
}

export interface IAdByCepCepByAd extends IAdressbyCep, ICepByAddress { }