import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Ensure Navbar is correctly imported
import { useNavigate } from 'react-router-dom';
import './App.css'; 

const TicketSelection = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const navigate = useNavigate;

  const tickets = [
    { id: 1, type: 'VIP', price: '$100' },
    { id: 2, type: 'Regular', price: '$50' },
    { id: 3, type: 'Student', price: '$30' },
  ];

  const handleSelectTicket = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleNext = () => {
    if (!selectedTicket) {
      alert('Please select a ticket before proceeding.');
      return;
    }
    navigate('/attendee-details', { state: { selectedTicket } });
  };

  return (
    <div className='ticket-selection-page'>
      <Navbar />
      <h1>Select Your Ticket</h1>
      <div className='ticket-options'>
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className={'ticket-card' + (selectedTicket?.id === ticket.id ? ' selected' : '')}
            onClick={() => handleSelectTicket(ticket)}
          >
            <h3>{ticket.type}</h3>
            <p>{ticket.price}</p>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className='next-button'>
        Next
      </button>
    </div>
  );
};

export default TicketSelection;
