import React from 'react';
import '../maps/map.css';

const Map = () => {
    return (
        <div className='map'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113666.12775107758!2d-48.97163442457732!3d-27.091199276260998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df47e7c38fa4b3%3A0xf5e4cbe02813448!2sBrusque%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1707676632548!5m2!1spt-BR!2sbr" 
                width="450" 
                height="250" 
                style={{ border: '0'}} 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}

export default Map;