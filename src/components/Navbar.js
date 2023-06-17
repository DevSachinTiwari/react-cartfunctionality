import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { GrChat } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.searchbar}>search here</div>
      <div className={styles.other}>
         <Link to="/"><GrChat/> Chat</Link>
         <Link to="/"><GrChat/> Chat</Link>
         <Link to="/"><GrChat/> Chat</Link>
         <Link to="/"><GrChat/> Chat</Link>
      </div>
    </div>
  )
}

export default Navbar