import { Outlet } from '@modern-js/runtime/router';
import './index.css';
import { Fragment } from 'react';

export default function Layout() {
  return (
    <Fragment>
      <header className="sticky top-0">
        <nav className="bg-white shadow">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold">MyBrand</div>
              <div className="hidden md:flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Services
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </Fragment>
  );
}
