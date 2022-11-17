import { useEffect, useState } from 'react';
import './App.css';
import { Mensagens } from './Mensagens';

function App() {
  const [mensage, setMsg] = useState([{
    id: 1,
    title: "Primeira mensagem",
    status: 0
  },
  {
    id: 2,
    title: "Segunda mensagem",
    status: 0
  }]);

  useEffect(() => {
    const algum = mensage.every(msg => msg.status === 1);
    if (algum) {
      alert('Parabéns! Você leu todas suas mensagens!')
    }
  }, [mensage]);

  const setMsgStatus = (msg, newStatus) => {
    const newMsg = mensage.map(atual => {
      if (atual.id === msg) {
        console.log('entrou');
        return {...atual, status: newStatus}
      }
      return atual;
    });
    setMsg(newMsg);
  }

  const handleClick = ({target}) => {
    const newMsg = mensage.map(msg => {
      if (target.name === 'lido') {
        return { ...msg, status: 1}
      }
      return {...msg, status: 0}
    })
    setMsg(newMsg)
  }
  
  return (
    <div className="App">
      <button onClick={handleClick} name='lido'>Marcar todas como lidas</button>
      <button onClick={handleClick} name='nlido'>Marcar todas como não lidas</button>
      <Mensagens msgs={mensage} setMsgStatus={setMsgStatus} />
    </div>
  );
}

export default App;
