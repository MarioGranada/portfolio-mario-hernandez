import Link from 'next/link';
import PortfolioLogo from './PortfolioLogo';

const Header = () => {
  return (
    <header>
      <div className="px-4 flex justify-between w-full xl:max-w-2/3 justify-self-center p-4 items-center shadow-lg shadow-black/5">
        <Link href="/">
          <PortfolioLogo className="text-3xl w-full flex" />
        </Link>
        <div className="flex gap-4">
          <ul className="flex gap-4 items-center">
            <li>
              <Link href="about">About</Link>
            </li>
            <li>
              <Link href="projects">Projects</Link>
            </li>
            <li>
              <Link href="it-bible">It Bible &#128679;</Link>
            </li>
          </ul>
          <button className="btn btn-primary">Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
