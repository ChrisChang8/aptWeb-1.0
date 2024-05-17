import React from 'react';
import './c_Hero.css';

const c_Hero = () => {
  return (
    <div className="imgBlock2">
      <div className="imgOverlay"></div> 
      <div className="c_centeredText">
        <h1 style={{margin: '20px', marginTop:'80px'}}>OUR TEAM<br/> IS HERE TO HELP</h1>
        <p className='flexColCenter'>
        <a href="tel:+1234567890" style={{textDecoration: 'underline'}}>(972) 375-3588</a> 
        <a href="https://www.google.com/maps/place/3520+W+Buckingham+Rd,+Garland,+TX+75042/@32.9309353,-96.6864153,17z/data=!3m1!4b1!4m6!3m5!1s0x864c1e69b606517d:0x4c4f3d9c5fbe98cb!8m2!3d32.9309353!4d-96.6838404!16s%2Fg%2F11bw4c31qb?entry=ttu" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '20px', textDecoration: 'underline' }}>
          3520 W Buckingham Rd
        </a>
        </p>
      </div>
      
    </div>
  );
}

export default c_Hero;
