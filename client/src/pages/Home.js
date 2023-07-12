import React, { useEffect } from 'react';
import backgroundImage from '../images/banner-bg.png';
import SplitType from 'split-type';
import gsap from 'gsap';


const Home = () => { 
      //text effect imported into the h1 id
  useEffect(() => {
    let text = new SplitType('#text');
    let characters = document.querySelectorAll('.char');

    for (let i = 0; i < characters.length; i++) {
      characters[i].classList.add('translate-y-full');
    }

    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.5,
      repeat: -1, // Infinite loop
      repeatDelay: 1, // Delay between each loop iteration
      yoyo: true, // Reverse the animation at the end of each loop
    })

  }, []);
//css clip path
    const containerStyle = {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      lineHeight: '1.4',

    }; 

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='flex justify-center items-justified'>
        <h1 id = "text" className='sm:text-4xl text-2xl font-bold my-6 text-white ' style = {containerStyle}> Web Wizardry</h1></div>
        <p className='mxauto leading-relaxed text-base mb-4 text-gray-200'> 
  "Step into a world of inspiration, knowledge, and endless possibilities! As you embark on this exciting journey with me, prepare to be delighted by valuable insights, practical tips, and captivating experiences across a wide range of fascinating topics. Get ready to embark on an exciting journey into the realm of modern web development.  </p>


  <p className='mxauto leading-relaxed text-base mb-4 text-gray-200'>Whether you're a seasoned developer looking to enhance your skills or a curious beginner eager to dive into the world of web development, you've come to the right place. This blog is designed to provide you with valuable insights, practical tips, and hands-on tutorials that will empower you to become a proficient React and Node.js developer.</p>

  <p className='mxauto leading-relaxed text-base mb-4 text-gray-200'>But this blog is not just about learning. It's about embracing creativity, innovation, and collaboration. We believe that web development is an art form, and we encourage you to think outside the box, experiment with new ideas, and contribute to the vibrant web development community.</p>

  <p className='mxauto leading-relaxed text-base mb-4 text-gray-200'>Buckle up, fellow developers, and get ready to unleash your potential. The world of React and Node.js awaits you. Let's dive in and make magic happen!

  Remember, it all starts here. Welcome to the immersive world of React and Node.js!</p>
      </div>

    </>
  );
};

export default Home;