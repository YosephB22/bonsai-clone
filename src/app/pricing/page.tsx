import { FC } from 'react';
import { pricing } from './constant';

import check from '../../../public/assets/check.svg';
import Image from 'next/image';

const Pricing: FC = () => {
  return (
    <>
      <h1 className="text-center mb-4">Plans & Pricing</h1>
      <article className="gap-4 mx-auto flex flex-col md:flex-row">
        {pricing.map(({ description, features, price, type }) => (
          <div
            key={type}
            className="w-full block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <h2 className="font-semibold text-gray-500 dark:text-gray-400">{type}</h2>
            <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">{description}</p>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">{price}</span>
              <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
            </div>
            {features.map((feature) => (
              <ul key={feature} role="list" className="space-y-5 my-7">
                <li className="flex items-center">
                  <Image src={check} alt="tick" />
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    {feature}
                  </span>
                </li>
              </ul>
            ))}
            <button
              type="button"
              className="text-white bg-ocean-green focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center mb-auto"
            >
              Choose plan
            </button>
          </div>
        ))}
      </article>
    </>
  );
};

export default Pricing;
