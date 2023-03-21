import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import Quadra from "./Quadra";

class QuadraTenis extends Quadra {
  reservar(qd: Date): IAgenda<IFutebol> {
    const prot = qd.getTime();
    return {
      // protocolo é o "id" da reserva, gere de forma aleatória
      protocolo: String(prot),
      date: qd,
      regras: { chuteira: 'tenis liso' }
    }
  }
}

export default QuadraTenis;