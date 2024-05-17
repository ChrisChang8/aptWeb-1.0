import {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

import './c_Form.css'
const c_Form = () => {
    const form = useRef()
    const [isSuccess, setIsSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_psktp0t', 'template_r78jka5', form.current, {
            publicKey: 'UfTHBuoEt4xIFImHe',
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
            },
          );
          e.target.reset();
      };
  return (
    <div className='flexCenter'>
        <div className='formContainer flexCenter' style={{marginTop: '60px'}}>
            <div>
                <h2 style={{marginBottom: '10px'}}>CONTACT US ABOUT OUR UPSCALE APARTMENTS <br/> IN GARLAND, TX</h2>
                <p3>We’d love to show you the upscale apartments in GARLAND, TX, for rent 
                with spacious renovated floor plans, peaceful community, 
                and upscale amenities. If you have any questions, leave us a message!</p3>                
            </div>
            
            <div className='flexColCenter'>
                <section>
                    <form ref={form} onSubmit={sendEmail}>
                        <input 
                            type="text" 
                            placeholder="Full Name* "
                            name="user_name" required />
                        <input 
                            type="email" 
                            placeholder="Email*"
                            name="user_email" required />
                        <input 
                            type="tel" 
                            placeholder="Phone Number*"
                            name="phone_number" required />
                        <input 
                            type="text" 
                            placeholder="Subject*"
                            name="subject" required />
                        <textarea 
                            name="message" 
                            cols="30" rows="10" 
                            placeholder="Enter message here*"
                            required></textarea>
                        <button type="submit">Send Message</button>
                    </form>

                </section>
                {isSuccess && <div className="success-message">Your message was sent successfully!</div>}
            </div>
        </div>
    </div>

    
  )
}

export default c_Form
