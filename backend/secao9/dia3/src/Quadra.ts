import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";

// src/Quadra.ts
abstract class Quadra {
  abstract reservar(qd: Date): IAgenda<IFutebol>;
}

export default Quadra;