import {Link} from 'react-router-dom';
function Navigation(){
    return (
           <nav>
               <ul className='nav-links'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/dashboard'><li>Dashboard</li></Link>
                </ul>
           </nav>
    );
  }
  
  export default Navigation;