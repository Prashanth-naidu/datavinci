import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./index.css"

const Nav = () => {
  return (
    <>
    <div className='nav_mobile '>
      <FontAwesomeIcon icon={faBars} /> 
      <img src="https://i.ibb.co/1YxrxMdx/Link-SVG.png" alt="Link-SVG" />
      <div>
        <FontAwesomeIcon icon={faUser} /> 
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
    <nav className='nav_lap'>
      <p className='nav_item1'>WHICH MANUKA IS FOR ME?</p>
      <p>Shop</p>
      <p>Explore</p>
      <img src="https://i.ibb.co/1YxrxMdx/Link-SVG.png" alt="Link-SVG" />
      <p>About</p>
      <p>Rewards</p>
      <p>Contact</p>
      <div>
        <FontAwesomeIcon icon={faUser} /> 
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </nav>
    </>
  );
};

export default Nav;

