import { useNavigate } from 'react-router-dom';
import './App.css';  


function App() {
  const navigate = useNavigate();

  return (
    <div className='app'>
      <h1>Event Ticket Booking</h1>
      <button onClick={() => navigate('/select-ticket')}>
        Start Booking
      </button>
    </div>
  );
}

export default App;
