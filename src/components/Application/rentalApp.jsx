import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './rentalApp.css';

const rentalApp = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mf2p36o', 'template_3hcb3ue', form.current, {
        publicKey: 'dCgyHooBxqu4mMmpb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className='flexCenter'>
      <div className='formContainer flexCenter' style={{ marginTop: '60px' }}>
        <div>
          <h2>
            APPLICATION for <br /> Buckingham Court Residency
          </h2>
          <p style={{ marginTop: '10px' }}>
          Please prepare your identification and enter the information exactly 
          as it appears on the document. You will receive an email after 
          submitting the information below. Kindly take your time and carefully 
          follow the instructions provided in the email.
          </p>

        </div>

        <div className='flexColCenter'>
          <section>
            <form ref={form} onSubmit={sendEmail}>
              <input type='text' placeholder='Full Name* ' name='user_name' required />
              <input type='email' placeholder='Email*' name='user_email' required />
              <input type='tel' placeholder='Phone Number*' name='phone_number' required />
              <input type='text' placeholder='Subject*' name='subject' required />
              
              {/* Dropdown for Bedrooms */}
              <label htmlFor='bedrooms'>Bedrooms</label>
              <select name='bedrooms' id='bedrooms' style={{height:'30px', marginBottom:'10px'}} required>
                <option value='1'>1 Bedroom</option>
                <option value='2'>2 Bedrooms</option>
                <option value='3'>3 Bedrooms</option>
              </select>

              {/* Date Picker for Move-in Date */}
              <label htmlFor='move_in_date' placeholder='Move-in Date*'>Move In Date</label>
              <input type='date' id='move_in_date' name='move_in_date' style={{height:'30px', marginBottom:'20px'}} required />

              <textarea name='message' cols='30' rows='10' placeholder='Enter message here'></textarea>
              <button type='submit'>Submit</button>
            </form>
          </section>
          {isSuccess && <div className='success-message'>Your message was sent successfully!</div>}
        </div>
      </div>
    </div>
  );
};

export default rentalApp;
