import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import Quadra from "./Quadra";

class QuadraFutebol extends Quadra {
  reservar(qd: Date): IAgenda<IFutebol> {
    const prot = qd.getTime();
    return {
      // protocolo é o "id" da reserva, gere de forma aleatória
      protocolo: String(prot),
      date: qd,
      regras: { chuteira: 'cravo' }
    }
  }
}

export default QuadraFutebol;