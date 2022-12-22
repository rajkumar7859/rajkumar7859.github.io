import React from 'react';
import Typed from 'react-typed';

const Textloop = () => {
  return (
    <div>
      <Typed
                    strings={[
                        'Full Stack Web Developer 🖥',
                        'Mern Stack Developer 💻',
                        'Frontend Developer💻']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
    </div>
  )
}

export default Textloop
