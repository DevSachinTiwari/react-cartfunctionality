import styles from './Heading.module.scss';

const Heading = () => {
  return (
    <div className={styles.heading_wrap}>
      <div className={styles.back}><span></span></div>
      <div className={styles.title_wrap}>
          <ul className={styles.link}>
            <li>
              menus
            </li>
            <li>
              food
            </li>
            <li>
              Hamburger
            </li>
          </ul>
          <div className={styles.title}>
            <h1>Hamburger</h1>
            <p>Discover Whatever you need easily</p>
          </div>
      </div>
    </div>
  )
}

export default Heading