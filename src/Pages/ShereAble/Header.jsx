import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
  return (
    <header className='flex flex-col items-center gap-2 my-4 mt-6'>
      <img src={logo} alt="Logo" className='my-2' />
      <p className='text-neutral-500 text-lg leading-[30px]'>Journalism Without Fear or Favour</p>
      <p className='text-neutral-500 text-xl font-medium leading-[30px]'>{moment().format('dddd , LL')}</p>
    </header>
  );
}

export default Header;
