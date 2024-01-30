import styles from './page.module.css';
import SlideNav from '../../Components/SlideNav';

export default function Home() {
  return (
    <div className={styles.container}>
      <SlideNav />
      <div className="arrow-nav">
        <button className="prev">Prev</button>
        <button className="next">Next</button>
      </div>
    </div>
  );
}
