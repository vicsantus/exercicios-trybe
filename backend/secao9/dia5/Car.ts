import { IVehDrive } from "./interfaces";

export default class Car implements IVehDrive {
  drive(): void { console.log('Drive a normal car'); }
}