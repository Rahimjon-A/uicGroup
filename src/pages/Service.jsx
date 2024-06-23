import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Service = () => {
  return (
    <div>
      <Navbar />

      <div className='pt-[100px] bg-[#1f1f21] '>

      </div>
      <Services title={'What solution do you want?'} desc={'IS THERE A PROBLEM?'} />

      <Footer />
    </div>
  );
};

export default Service;
