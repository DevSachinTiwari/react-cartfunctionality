import styles from './Sidebar.module.scss';
import { BsFillBadgeCcFill, BsFillFilterCircleFill } from "react-icons/bs";
import SidebarMenu from './SidebarMenu';

const SidebarComponent = () => {
  return (
    <>
       <div className={styles.logo_wrap}>
          <div className={styles.logo}>
            <BsFillBadgeCcFill/>
          </div>
          <div className={styles.name}>
            <h2>ProductsKart</h2>
            <p>Thu 16 Jun</p>
          </div>
          <div className={styles.close}><span></span></div>
       </div>
       <div className={styles.menu_wrap}>
          <div className={styles.menu_logo}>
            <BsFillBadgeCcFill/>
          </div>
          <div className={styles.menu_name}>
            <p>Menu</p>
            <h2>Burger</h2>
          </div>
          <div className={styles.filter}>
            <BsFillFilterCircleFill/> Filter
          </div>
       </div>
       <div className={styles.menus}>
          <h2>Menu dashboard</h2>
          <SidebarMenu name={"Dashboard"} icon={""} link={"/"} highlighter={"new"}/>
          <SidebarMenu name={"Dashboard"} icon={""} link={"/"} highlighter={"new"}/>
          <SidebarMenu name={"Dashboard"} icon={""} link={"/"} highlighter={"new"}/>
          <SidebarMenu name={"Dashboard"} icon={""} link={"/"} highlighter={"new"}/>
          <SidebarMenu name={"Dashboard"} icon={""} link={"/"} highlighter={"new"}/>
       </div>
       <div className={styles.menus_bottom}>
          <h2>general</h2>
          <SidebarMenu name={"Dashboard"} icon={""} link={"/"} highlighter={"new"}/>
          <SidebarMenu name={"Dashboard"} icon={""} link={"/"} highlighter={"new"}/>
          <SidebarMenu name={"Dashboard"} icon={""} link={"/"} highlighter={"new"}/>
          <SidebarMenu name={"Dashboard"} icon={""} link={"/"} highlighter={"new"}/>
          <SidebarMenu name={"Dashboard"} icon={""} link={"/"} highlighter={"new"}/>
       </div>
    </>
  )
}

export default SidebarComponent