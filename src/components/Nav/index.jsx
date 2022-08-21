import { h } from 'preact';
import Styles from './styles.module.scss';

function Nav() {
  return (
    <nav className={Styles.nav}>
      <a className={Styles.logolink} href="/">
        <div className={Styles.monogram}>OFF</div>
      </a>
      <a className={Styles.link} href="/projects">
        Portfolio
      </a>
      <a className={Styles.link} href="/about">
        About
      </a>
      <a className={Styles.link} href="https://garden.feernandooff.com">
        Garden
      </a>
      <a className={Styles.social} href="https://twitter.com/me"></a>
    </nav>
  );
}
export default Nav;
