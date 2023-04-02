
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';

function Header() {
  return (
    <div className='header'>
        <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        <div className='header__search'>
          <input className='header__searchInput' type="text">
            
          </input>
          <SearchIcon  className='header_searchIcon'/>
        </div>
      
      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'>
            hello guest
          </span>
          <span className='header_optionLineTwo'>
           Sign In
          </span>
        </div>
        <div className='header_option'>
          <spna className="header_optionLineOne">
          Return
          </spna>
          <spna className="header_optionLineTwo">
          & Orders
          </spna>
        </div>
        
        <div className='header_option'>
          <spna className="header_optionLineOne">
          Your
          </spna>
          <spna className="header_optionLineTwo">
          Prime
          </spna>
        </div>

        <div className='header_optionBasket'>
          < ShoppingBasket />
          
          <spna className="header_optionLineTwo header_basketCount">
          0
          </spna>
        </div>

      </div>

    </div>
  )
}

export default Header