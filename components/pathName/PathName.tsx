'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
// import style from './ActiveLink.module.css';

interface PathNameProps {
  path: string;
  name: string;
}


export const PathName = ({path, name}: PathNameProps) => {
  const pathName = usePathname();

  return (
    <>
      <li key={path}>
        <Link 
          href={path} 
          className={`text-white hover:text-gray-400 ${pathName === path && 'text-blue-500 font-bold'}`}>
            {name}
        </Link>
      </li>
    </>
  )
}
