import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';

export const Header = () => {
 const[{basket} , dispatch] = useStateValue();

 console.log(basket);

  return (
    <nav className="header">
        <Link to="/">
            <img className ="header_logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="amazon logo"/>
        </Link>
        <div className='header_search'>
            <input className='header_searchInput' />
            <SearchIcon className='header_searchIcon'/>
        </div>

        <div className='header_nav'>
            <Link to="/login" className='header_link'>
                <div className='header_option'>
                    <span className="header_optionLineOne">hello Rahul</span>
                    <span className="header_optionLineTwo">sign in </span>
                </div>

            </Link>
        

        
            <Link to="/" className='header_link'>
                <div className='header_option'>
                    <span className="header_optionLineOne">returns</span>
                    <span className="header_optionLineTwo">& orders</span>
                </div>

            </Link>
        

        
            <Link to="/" className='header_link'>
                <div className='header_option'>
                    <span className="header_optionLineOne">your</span>
                    <span className="header_optionLineTwo">prime</span>
                </div>

            </Link>

            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
         
    </nav >
  )
}

export default Header;
