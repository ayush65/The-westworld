/** @format */

import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <h1 className='header__logo'>West World</h1>
      </div>

      <div className='input-contain'>
        <IoMdSearch className='header-icon' />
        <input
          className='header-input input-contain'
          placeholder='Search'
          type='text'
        />
      </div>

      <div className='header__icons'>
        <FaUserAlt />
      </div>
    </div>
  );
}

export default Header;
