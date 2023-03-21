import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const flamengo = new Clube();
const maracana = new QuadraFutebol();
const quadraDaBarra = new QuadraTenis();

flamengo.adicionarQuadra(maracana);
console.log(maracana.reservar(new Date(Date.now())));
flamengo.adicionarQuadra(quadraDaBarra);
console.log(quadraDaBarra.reservar(new Date('2023/05/20')));