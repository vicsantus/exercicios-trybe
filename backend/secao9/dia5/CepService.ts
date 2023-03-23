// ./CepService.ts
import { IAdByCepCepByAd } from './interfaces';

class CepService {
  private readonly cepApi: IAdByCepCepByAd;

  constructor(api: IAdByCepCepByAd) {
    this.cepApi = api;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;