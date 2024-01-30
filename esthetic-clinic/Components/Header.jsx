import styles from './Header.module.css';
import Image from 'next/image';
import mainImg from '../Assets/main-img.svg';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.menu}>
          <div>
            <h1>Logo</h1>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li id="servico">Nossos serviços</li>
              <li id="sobre">Sobre</li>
              <li id="contato">Contato</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.divimg}>
            <Image src={mainImg} height={350} className={styles.img}></Image>
          </div>
          <div>
            <h1>Salvando peles</h1>
            <h2>Com cuidados personalizados</h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
