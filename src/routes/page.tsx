import { Helmet } from '@modern-js/runtime/head';
import { Fragment } from 'react';
// import { Link } from '@modern-js/runtime/router';

const Index = () => (
  <Fragment>
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
      <title>Marketing page</title>
    </Helmet>
    <main className="flex flex-col h-[calc(100vh-52px)]">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="container mx-auto px-6 text-center p-8">
          <h1 className="text-4xl font-bold mb-2">Welcome to Our Website</h1>
          <h2 className="text-2xl mb-8">Explore our services and offerings</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <footer className="bg-white mt-8">
          <div className="container mx-auto px-6 py-4">
            <p className="text-center text-gray-600 text-sm">
              &copy; 2023 MyBrand. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  </Fragment>
);

export default Index;
