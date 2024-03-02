<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap')
</style>
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-transparent mt-10 text-white ml-10 mr-10 ">
      
      <div className="flex items-center">
        <span className="text-4xl" style={{fontFamily:"cursive,Dancing Script"}}>Akash </span>
      </div>

     
      <div className="flex items-center space-x-16">
        <button>Home</button>
        <button>Subscribe</button>
      </div>

    
      <p></p>
    </nav>
  );
};

export default Navbar;
