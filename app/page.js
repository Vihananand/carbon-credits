import Image from "next/image";

export default function Home() {
  const stats = [
    {
      data: "20K",
      title: "Customers",
    },
    {
      data: "5K+",
      title: "Downloads",
    },
    {
      data: "5+",
      title: "Countries",
    },
    {
      data: "10M+",
      title: "Total revenue",
    },
  ];

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      title: "Fast Refresh",
      desc: "Fast and live updates of carbon credits of different companies by help of which you can trade better with your money",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      title: "Analytics",
      desc: "Analyze your carbon credit performance which will help you configure and reduce carbon emmission for your bussiness",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      title: "Datacenter security",
      desc: "Our secure database helps you keep all your data and money credits safe with us embedded with advance secured systems",
    },
  ];
  return (
    <>
      <section className="py-14 pt-0 md:pt-32">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <Image
                src="https://plus.unsplash.com/premium_photo-1679655974881-d8d9c056567f?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="md:max-w-lg sm:rounded-lg"
                width={1000}
                height={1000}
                alt="Image"
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h3 className="text-indigo-600 font-semibold">
                Professional services
              </h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Carbon Credits
              </p>
              <p className="mt-3 text-gray-600">
                Our company provides a platform for users to buy and trade
                carbon credits, helping businesses and individuals offset their
                carbon footprints. Additionally, we offer a green e-commerce
                store featuring a wide range of natural and eco-friendly
                products, supporting a sustainable lifestyle.
              </p>
              <a
                href="https://en.wikipedia.org/wiki/Carbon_offsets_and_credits"
                className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:pt-28">
        <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              The fastest way to get your carbon credit
            </h3>
            <p className="mt-3">
              Buy, Sell and Analyze your carbon credit performance with our
              website which has a very wide range of tools to configure
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li key={idx} className="space-y-3">
                  <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-32">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
          <div className="sm:hidden lg:block lg:max-w-xl">
            <Image
              src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="rounded-lg"
              alt="Image"
              width={800}
              height={500}
            />
          </div>
          <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
            <div className="max-w-2xl">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                We do our best to make customers always happy
              </h3>
              <p className="mt-3 max-w-xl">
                We have all of our customers happy with our services and take regular feedback so that we can always improve and make our service better
              </p>
            </div>
            <div className="flex-none mt-6 md:mt-0 lg:mt-6">
              <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                {stats.map((item, idx) => (
                  <li key={idx} className="">
                    <h4 className="text-4xl text-indigo-600 font-semibold">
                      {item.data}
                    </h4>
                    <p className="mt-3 font-medium">{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
