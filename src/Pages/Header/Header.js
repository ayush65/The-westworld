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

      <div className='header_input'>
        <input className='header-input' placeholder='Search' type='text' />
      </div>
      <button type='button' className='header__button'>
        <IoMdSearch />
      </button>

      <div className='header__icons'>
        <FaUserAlt />
      </div>
    </div>
  );
}

export default Header;
