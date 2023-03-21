export default interface IAgenda<T> {
  protocolo: string;
  date: Date;
  regras: T;
}