import Link from 'next/link';
import { PathName } from '../';
import { HomeIcon } from '@primer/octicons-react';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' }
];

export const Navbar = () => {

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <Link href='/' className='flex items-center'><HomeIcon className='mr-2' /> Home</Link>
          </div>
          <ul className="flex space-x-4">
            {/* <li><a href="/" className="text-white hover:text-gray-400">Home</a></li> */}
            {
              navItems.map((item) => (
                <PathName key={item.path} path={item.path} name={item.name} />
              ))
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}
