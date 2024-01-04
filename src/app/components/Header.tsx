'use client';

import Image from 'next/image';
import Button from './Button';
import { useState } from 'react';

import downArrow from '../../../public/assets/down-arrow.svg';
import menu from '../../../public/assets/menu.svg';
import close from '../../../public/assets/close.svg';
const navs: { name: string; dropDown?: { name: string; description?: string }[] }[] = [
  {
    name: 'Products',
    dropDown: [
      {
        name: 'Bonsai Workflow',
        description: 'Look professional, win more clients and manage your business from one place',
      },
      {
        name: 'Bonsai Tax',
        description: 'Track expenses, maximize tax write-offs, and estimate taxes without the headache',
      },
      { name: 'Bonsai Cash', description: 'Bonsai’s all-in-one financial hub: No fees and lightning fast payouts' },
    ],
  },
  {
    name: 'Templates',
    dropDown: [
      { name: 'Contract Templates' },
      { name: 'Proposal Templates' },
      { name: 'Invoice Templates' },
      { name: 'Agreement Templates' },
      { name: 'Quote Templates' },
      { name: 'Scope of Work Templates' },
      { name: 'Brief Templates' },
    ],
  },
  { name: 'Pricing' },
  { name: 'Reviews' },
];

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>();

  const handleMenuClick = (): void => {
    setToggleMenu((prevSatete: boolean) => !prevSatete);
  };

  const handleExpandClick = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <header className="sticky left-0 top-0 right-0 bottom-0 z-[100000000]">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4 dark:dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-ocean-green">Bonsai</span>
          </a>

          <ul
            className={`${
              toggleMenu ? 'hidden' : 'flex'
            } flex-col lg:flex-row order-2 gap-5 mt-3 lg:mt-0 w-full lg:w-auto lg:block`}
          >
            <a
              onClick={handleMenuClick}
              href="/login"
              className="text-ocean-green hover:bg-ocean-green font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:text-white border-1 border-ocean-green border-2 border-solid text-center"
            >
              Log in
            </a>
            <a
              onClick={handleMenuClick}
              href="sign-up"
              className="text-white text-center bg-ocean-green hover:bg-primary-800 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            >
              Start Here
            </a>
          </ul>

          <Image className="hover:cursor-pointer lg:hidden" src={menu} alt="menu" onClick={handleMenuClick} />

          <div
            className={`${
              toggleMenu ? 'hidden' : 'flex'
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul
              className={`flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 w-full dark:text-ocean-green`}
            >
              {navs.map(({ name, dropDown }, navIndex) => (
                <li key={name} className="">
                  <a
                    href="#"
                    className="flex justify-between items-center py-2 pr-4 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                    aria-current="page"
                  >
                    {name}
                    <Image src={downArrow} alt="down arrow" onClick={() => handleExpandClick(navIndex)} />
                  </a>
                  {activeIndex === navIndex &&
                    dropDown?.map(({ name, description }) => (
                      <div className="lg:hidden">
                        <h3>{name}</h3>
                        <p className="text-grey">{description}</p>
                      </div>
                    ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
