import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css'; 

const TicketGeneration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email, about, image, selectedTicket } = location.state || {};

  if (!name || !email || !selectedTicket) {
    return <h2>No ticket details found. Please go back and fill in the details.</h2>;
  }

  return (
    <div className="ticket-generation-page">
      <Navbar />
      <h1>Your Ticket is Booked!</h1>
      <div className="ticket-preview">
        {image && <img src={image} alt="Profile" className="profile-image" />}
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>About: {about}</p>
        <h3>Ticket Type: {selectedTicket.type}</h3>
        <p>Price: {selectedTicket.price}</p>
      </div>
      <button onClick={() => navigate('/')} className="home-button">Back to Home</button>
    </div>
  );
};

export default TicketGeneration;