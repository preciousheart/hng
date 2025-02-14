import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './App.css'; 


const AttendeeDetails = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const ticketData = location.state || {};

    const [formData, setFormData] = useState(
        {
            name:'',
            email:'',
            about:'',
            image:null,
        }
    );
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]:e.target.value});
    };
  
    const handleFilechange = (e) => {
        const file = e.target.files[0];
        if(file)
        setFormData({ ...formData, image:URL.createObjectURL(file)});
    };

    const handleSubmit= () => {
        if(!formData.name || !formData.email || ! formData.about || !formData.image){
            alert('All feilds are required');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            alert('Enter a valid email.');
            return;
        }
        navigate('/ticket-generation',{
            state:{ ...ticketData, ...formData }
        });
    };
    return(
        <div className='attendee-details-page'>


            <div className='attendee-details-container'>
                {formData.image &&(
                    <div className='image-preview'>
                        <img src={formData.image} alt='profile preview' className='profile-image'/>
                    </div>
                )}
                <input type='file' accept='image/*'onChange={handleFilechange} required className='file-input' />

                <div className='form-container'>
                  <input type='text' name='name'
                  placeholder='Enter your name' value={formData.name}
                   onChange={handleInputChange}  required 
                   className='input-feild' />

                 <input type='text' name='email'
                  placeholder='Enter your email' value={formData.email}
                   onChange={handleInputChange}  required 
                   className='input-feild' />

                   <textarea name='about' placeholder='About yourself'
                   value={formData.about}
                   onChange={handleInputChange} required
                   className='textarea-feild'></textarea>
                   <div className='button-group'>
                    <button onClick={() => navigate ('/select.ticket')} 
                    className='back-button'>Back</button>
                    <button onClick={handleSubmit} className='submit-button'>Get My ticket</button>
                   </div>
                </div> 
            </div>
        </div>
    );
};

export default AttendeeDetails