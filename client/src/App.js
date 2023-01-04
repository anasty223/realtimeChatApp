import io from 'socket.io-client'
import './App.css';
import {useEffect, useState} from "react"
import Chat from './Chat';

// let socket;
// const CONNECTION_PORT='https://serverchat-mxy7.onrender.com'

const socket = io.connect('https://serverchat-mxy7.onrender.com');

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  // useEffect(()=>{
  //   socket=io(CONNECTION_PORT)
  // },[CONNECTION_PORT])

  const joinRoom=()=>{
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
setShowChat(true)
    }
  }

  return (
    <div className="App">

{!showChat ?(

     <div className='joinChatContainer'>
       <h3>Join A Chat</h3>
      <input    type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}/>
      <input type="text" placeholder="Room id.." onChange={(event) => {
              setRoom(event.target.value);
            }}/>
      <button onClick={joinRoom}>Join A Room</button></div>
)
      :
      (<Chat socket={socket}  username={username} room={room}/>)}
    </div>
  );
}

export default App;
