import headerStyles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={headerStyles.hdrCont}>
      <div className={headerStyles.homeLink}>
        <Link href={'/'}>Matthew Carroll's Portfolio</Link>
      </div>
      <div className={headerStyles.link1}>
        <a href="https://www.linkedin.com/in/mattcarroll777/">LinkedIn</a>
      </div>
      <div className={headerStyles.link2}>
        <a href="https://github.com/mattcarroll777">Github</a>
      </div>
    </div>
  );
}
