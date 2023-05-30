import webDesignLogo from "../assets/images/webDesignImg.svg";

const TestPage = () => {
  return (
    <div className="p-5 md:p-10 text-gray-800">
      <section className="bg-purple-200 rounded-2xl p-5 mb-10">
        <div className="container mx-auto">
          <div className="flex">
            <a
              className="font-bold text-md pr-5 border-r border-purple-300 mr-5"
              href=""
            >
              Agency
            </a>

            <div className="my-auto">
              <button className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <ul className="lg:flex hidden font-bold text-gray-800 text-xs">
                <li className="pr-5">
                  <a
                    className="px-3 py-2 border hover:border-purple-300 rounded"
                    href=""
                  >
                    Home
                  </a>
                </li>
                <li className="pr-5">
                  <a
                    className="px-3 py-2 border hover:border-purple-300 rounded"
                    href=""
                  >
                    About
                  </a>
                </li>
                <li className="pr-5">
                  <a
                    className="px-3 py-2 border hover:border-purple-300 rounded"
                    href=""
                  >
                    Serivces
                  </a>
                </li>
                <li className="pr-5 ">
                  <a
                    className="px-3 py-2 border hover:border-purple-300 rounded"
                    href=""
                  >
                    Portfolio
                  </a>
                </li>
                <li className="pr-5">
                  <a
                    className="px-3 py-2 border hover:border-purple-300 rounded"
                    href=""
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <a
              className="flex ml-auto bg-red-500 rounded-md text-xs text-white font-semibold py-auto pt-1 px-3"
              href=""
            >
              <span className="pr-1 hidden lg:block"> Get a quote</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="hidden">
            <ul className="lg:hidden font-bold text-gray-800 text-xs">
              <li className="mt-1">
                <a className="py-2" href="">
                  Home
                </a>
              </li>
              <li className="mt-1">
                <a className="py-2" href="">
                  About
                </a>
              </li>
              <li className="mt-1">
                <a className="py-2" href="">
                  Serivces
                </a>
              </li>
              <li className="mt-1">
                <a className="py-2" href="">
                  Portfolio
                </a>
              </li>
              <li className="mt-1">
                <a className="py-2" href="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex py-12 lg:py-36 ">
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl text-center lg:text-left font-bold lg:text-5xl lg:font-semibold ">
                World class design for your products.
              </h1>
              <p className="mt-4 text-center lg:text-left lg:mt-8 text-xl text-gray-600">
                Lets bring life to your brand.
              </p>
              <div className="flex mt-5 justify-center lg:justify-start">
                <a
                  className="mr-5 bg-purple-600 px-3 py-1 rounded-md text-white font-semibold"
                  href=""
                >
                  Serivces
                </a>
                <a
                  className="mr-5 bg-red-600 px-3 py-1 rounded-md text-white font-semibold"
                  href=""
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="w-1/2 hidden lg:flex">
              <img src={webDesignLogo} alt="webDesignLogo" />
            </div>
          </div>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z"
                clip-rule="evenodd"
              />
            </svg>

            <span className="ml-2 font-semibold text-xs">Scroll Down</span>
          </div>
        </div>
      </section>
      <section className="bg-red-200 rounded-2xl p-5 mb-10">
        <div className="container mx-auto">
          <div className="py-28">
            <h2 className="text-center text-2xl font-bold">Our Services</h2>
            <p className="w-1/2 text-center mx-auto mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex flex-wrap pb-28">
            <div className="w-1/3 p-5">
              <div className="bg-white rounded-2xl shadow-lg p-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 mb-10 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>

                <h3 className="font-bold mb-2"> Design </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="w-1/3 p-5">
              <div className="bg-white rounded-2xl shadow-lg p-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 mb-10  text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>

                <h3 className="font-bold mb-2"> Development </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="w-1/3 p-5">
              <div className="bg-white rounded-2xl shadow-lg p-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 mb-10  text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                  />
                </svg>
                <h3 className="font-bold mb-2"> Digital Marketing </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestPage;
