import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="flex justify-between">
        <div>
          <Link href="/">mario hernandez</Link>
        </div>
        <div className="flex gap-4">
          <ul className="flex gap-4">
            <li>
              <Link href="about">about</Link>
            </li>
            <li>
              <Link href="projects">projects</Link>
            </li>
            <li>
              <Link href="it-bible">it bible</Link>
            </li>
          </ul>
          <button>contact with calendly</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
