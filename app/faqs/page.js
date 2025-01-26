"use client";

import { useEffect, useState } from "react";

export default function FAQs() {
  const [faqsList, setFaqsList] = useState([]);

  useEffect(() => {
    // UseEffect ensures dynamic logic is applied only on the client side.
    setFaqsList([
      {
        q: "What are carbon credits?",
        a: "Carbon credits are permits that represent the right to emit one ton of carbon dioxide or equivalent greenhouse gas. Businesses can purchase these credits to offset their emissions.",
      },
      {
        q: "Why are carbon credits important for businesses?",
        a: "Carbon credits help businesses reduce their environmental impact by offsetting unavoidable emissions. They also support sustainable practices and help businesses meet regulatory requirements.",
      },
      {
        q: "How do businesses obtain carbon credits?",
        a: "Businesses can buy carbon credits from organizations or projects that reduce or remove greenhouse gases from the atmosphere, such as reforestation or renewable energy initiatives.",
      },
      {
        q: "Can small businesses benefit from carbon credits?",
        a: "Yes, small businesses can use carbon credits to enhance their sustainability efforts, appeal to eco-conscious customers, and comply with environmental regulations.",
      },
      {
        q: "Are carbon credits mandatory for all businesses?",
        a: "Carbon credits are not mandatory for all businesses, but some industries face regulatory requirements. Voluntary participation can also improve a company's brand image and sustainability goals.",
      },
      {
        q: "What types of projects generate carbon credits?",
        a: "Projects like reforestation, renewable energy development, methane capture, and energy efficiency improvements often generate carbon credits by reducing or avoiding emissions.",
      },
    ]);
  }, []);

  return (
    <div className="leading-relaxed mt-16 mb-24 mx-4 md:mx-8">
      <div className="text-center space-y-3">
        <h1 className="block text-gray-800 text-3xl font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Answered all frequently asked questions. Can’t find the answer you’re
          looking for? feel free to contact us.
        </p>
      </div>
      <div
        className="relative bg-white rounded-md mt-10 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto"
        style={{ boxShadow: "0px 7px 20px 7px #F1F1F1" }}
      >
        <div className="grid gap-4 py-8 md:grid-cols-2">
          {faqsList.map((item, idx) => (
            <div className="space-y-3 mt-6 px-8" key={idx}>
              <h4 className="text-gray-800 text-xl font-semibold">{item.q}</h4>
              <p className="text-gray-500">{item.a}</p>
            </div>
          ))}
        </div>
        <span className="w-0.5 h-full bg-gray-200 m-auto absolute top-0 left-0 right-0 hidden md:block"></span>
      </div>
    </div>
  );
}
