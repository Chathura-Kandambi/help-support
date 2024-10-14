import styles from './page.module.css';
import FAQ from './components/FAQ';

export default function Home() {
  return (
    <div className={styles.main}>

      <div className={styles.headercontainer}>

          <div className={styles.gencontainer}>
             <div className={styles.genzedu}>GenZedu </div>
             <div className={styles.help}> help and support </div>
          </div>
        <div className={styles.buttons}>
         <button className={styles.button}>Sign in</button>
         <button className={styles.button}>Register</button>
        </div>
      </div>

      <div className={styles.searchContainer}>
      <h2 className={styles.heading}>How can we help you today?</h2>
       <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search here..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <i className="fa fa-search"></i>
        </button>
       </div>
      </div>
     
        <div>
          <FAQ />
        </div>
               

    </div>
    
  );
}
