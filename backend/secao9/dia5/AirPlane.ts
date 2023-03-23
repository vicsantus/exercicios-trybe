import { IVehFly } from "./interfaces";

export default class AirPlane implements IVehFly {
  fly(): void { console.log('Flying a AirPlane'); }
}