import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={Styles.footer}>
      {new Date().getFullYear()} Jeanine White
      <small className={Styles.byline}>Made with love Fernandooff</small>
    </footer>
  );
}
export default Footer;
