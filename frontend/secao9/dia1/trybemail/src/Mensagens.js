export function Mensagens(props) {
  const {msgs, setMsgStatus} = props;

  return (
    <div>
      {msgs.map(msg => (
        <div key={msg.id}>
          <p>{msg.title}</p>
          <button onClick={() => setMsgStatus(msg.id, 1)}>Marcar como lida</button>
          <button onClick={() => setMsgStatus(msg.id, 0)}>Marcar como não lida</button>
        </div>
      ))}
    </div>
  )
}
