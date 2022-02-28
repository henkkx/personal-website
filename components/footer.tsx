import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="max-w-screen">
      <div className="p-20 flex justify-between  items-center max-w-screen">
        <div className="flex item-center my-2 ">
          <Link href="/">
            <a className="flex h-12 w-12 ml-4">
              <Logo />
            </a>
          </Link>
          <p className="ml-2 mt-2"> © Henrik Hiltunen 2022 </p>
        </div>
        <ul className="md:flex md:flex-row">
          <li>
            <Link href="/">
              <a className="footer-link">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="footer-link">About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="footer-link">Blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
