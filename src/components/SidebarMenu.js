import styles from './SidebarMenu.module.scss';
import { Link } from 'react-router-dom'

const SidebarMenu = () => {
  return (
    <Link className={styles.name}>
        <div className={styles.img}>
            <img src='img/290143_cash_money_payment_wallet_icon.png' />
            <h3>Dashboard</h3>
        </div>
        <div className={styles.highlighter}>new</div>
    </Link>
  )
}

export default SidebarMenu