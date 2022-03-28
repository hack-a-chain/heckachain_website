import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

export default function Faq() {
  const faqs = [
    {
      question: "How long does a security audit take?",
      answer:
        "Audits are usually concluded within 2 business days per smart contract. If you need a faster audit our team can deliver it, you'll be charged an extra fee. After the audit is ready, if there are no vulnerabilities, you'll receive a certification. If there are vulnerabilities, you'll have 7 days to fix them, after that, we'll emit a certification.",
    },
    {
        question: "How can I see which projects Hack-a-Chain has audited?",
        answer:
          "All previous audits can be found in our github page at this link.",
      },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-grayHack" id='faq'>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y divide-secondary">
          <h2 data-aos="fade-down" className="text-center text-3xl font-extrabold text-secondary sm:text-4xl">
            Frequently asked questions
          </h2>
          <dl  data-aos="zoom-in" className="mt-6 space-y-6 divide-y divide-secondary">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-secondary">
                        <span className="font-medium text-white">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-white">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
