import { Link } from 'react-router-dom';
import './App.css'; 

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-logo'>Event Ticket</div>
            <ul className='nav-links'>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='/my-tickets'>My Tickets</Link></li>
                <li><Link to='/about'>About Project</Link></li>
            </ul>
            <button className='my-tickets-button'>My Tickets</button>
        </nav>
    );   
};

export default Navbar;
