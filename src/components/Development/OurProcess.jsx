import { useState } from "react";
import NavLink from "../NavLink";
import BlockChainAnimate from "./BlockChainAnimate";

import ModalProcess from "./ModalProcess";

export default function OurProcess() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const process = {
    architecture: [
      {
        id: 1,
        title: "Requirements debriefing",
      },
      {
        id: 2,
        title: "Smart Contract Interface",
      },
      {
        id: 3,
        title: "Data Structure",
      },
    ],
    coding: [
      {
        id: 1,
        title: "Smart Contract test development",
      },
      {
        id: 2,
        title: "Smart Contract implementation",
      },
    ],
    deployment: [
      {
        id: 1,
        title: "Testnet deployment",
        desc: "In this phase the contract will be deployed to the testnet, so that we can test it against a real blockchain environment and uncover bugs and security flaws that went undetected on the initial testing phase.",
      },
      {
        id: 2,
        title: "Front-end testing",
        desc: "After deployment to testnet it is possible to release the website in a beta version, only interacting with the testnet, so that enthusiasts and the team can test the interface to uncover bugs and improvements.",
      },
      {
        id: 3,
        title: "External security Audit",
        desc: "It is essential for blockchain projects to receive an external security audit. Even though our firm performs security audits, the conflict of interest in having the same firm develop and test the software is obvious, because of that, the contract will be submitted to a third-party auditor and all security recommendations they give will be implemented.",
      },
      {
        id: 4,
        title: "Mainnet Deployment",
        desc: "We'll implement all the corrections needed based on the testnet deployment and frontend testing steps. After that, the application is ready to go live on mainnet, so that real users can finally interact with it! After deployment the project is considered fully delivered.",
      },
    ],
  };

  const architectureContent = [
    "Requirements debriefing:We’ll conduct meetings with you to understand what exactly you want to build, with all the requirements. We’ll actively participate in the process sharing ideas and best practices to help you refine your product",
    "Smart Contract Interface:After understanding all the requirements for the product, the team will develop the smart contract interface, that is, the information and transaction flow that's going to happen between the blockchain and your application.",
    "Data Structure:The final architectural phase is to carefully construct the data storage structures that the smart contract is going to use. Heavy software engineering skills are required to select the most appropriate structures to hold your application's data in a storage and processing constrained environment such as the blockchain.",
  ];

  const codingContent = [
    "Smart Contract development:After finalizing the architecture of the software, the next step is to develop automated tests (both unit and simulation tests). These tests ensure that the smart contract does precisely what it is intended to, with no errors or hacks.",
    "Smart Contract implementation:Now it's time to code the internal logic of the contract and run it through the tests. This is an iterative process that will be repeated until the code passes all quality tests in an efficient and reliable manner.",
  ];

  const deploymentContent = [
    "Testnet deployment:In this phase the contract will be deployed to the testnet, so that we can test it against a real blockchain environment and uncover bugs and security flaws that went undetected on the initial testing phase.",
    "Front-end testing:After deployment to testnet it is possible to release the website in a beta version, only interacting with the testnet, so that enthusiasts and the team can test the interface to uncover bugs and improvements.",
    "External security Audit:It is essential for blockchain projects to receive an external security audit. Even though our firm performs security audits, the conflict of interest in having the same firm develop and test the software is obvious, because of that, the contract will be submitted to a third-party auditor and all security recommendations they give will be implemented.",
    "Mainnet Deployment:We'll implement all the corrections needed based on the testnet deployment and frontend testing steps. After that, the application is ready to go live on mainnet, so that real users can finally interact with it! After deployment the project is considered fully delivered.",
  ];

  return (
    <div
      id="ourprocess"
      className="relative py-10 flex flex-col items-center bg-grayHack px-4 mx-auto    md:px-24 lg:px-8 lg:py-20"
    >
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-30"
          src="/graphics/grafismo-05.png"
          alt="background"
        />
        <div
          className="absolute inset-0 bg-secondary mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <div data-aos="fade-down" className="mb-6 mx-auto">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
          <BlockChainAnimate />
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12"
      >
        <h2 className="my-6  text-3xl font-bold leading-none tracking-tight text-secondary sm:text-4xl lg:text-5xl md:mx-auto">
          Our Development Process
        </h2>
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 max-w-7xl mb-12"
      >
        <div className="relative p-3 lg:p-5 text-primary duration-300 transform bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-dashed rounded shadow-sm border-secondary  hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary">
              1
            </p>
            <p className="text-2xl font-bold leading-5">Architecture</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mt-2 w-full flex justify-center">
              <ul className="divide-y divide-secondary divide-opacity-50">
                {process.architecture.map((item) => (
                  <li key={item.id} className="py-1">
                    <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                      <h3 className="font-anonymous text-xl font-semibold text-white">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.title}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 lg:absolute lg:bottom-5">
              <button
                onClick={() => {
                  setOpen(true);
                  setTitle("Architecture");
                  setContent(architectureContent);
                }}
                className="cursor-pointer text-lg font-medium transition-colors duration-200 text-white hover:text-primary"
              >
                View details<span aria-hidden="true"> &rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative p-3 lg:p-5 text-primary duration-300 transform bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-dashed rounded shadow-sm border-secondary hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary">
              2
            </p>
            <p className="text-2xl font-bold leading-5">Coding</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mt-2 w-full flex justify-center">
              <ul className="divide-y divide-secondary divide-opacity-50">
                {process.coding.map((item) => (
                  <li key={item.id} className="py-1">
                    <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                      <h3 className="font-anonymous text-xl font-semibold text-white">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.title}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 lg:absolute lg:bottom-5">
              <button
                onClick={() => {
                  setOpen(true);
                  setTitle("Coding");
                  setContent(codingContent);
                }}
                className="cursor-pointer text-lg font-medium transition-colors duration-200 text-white hover:text-primary"
              >
                View details<span aria-hidden="true"> &rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <div className="relative p-3 lg:p-5 text-primary duration-300 transform bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 rounded shadow-sm border-secondary hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary">
              3
            </p>
            <p className="text-2xl font-bold leading-5">Deployment</p>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="mt-2 w-full flex justify-center">
              <ul className="divide-y divide-secondary divide-opacity-50">
                {process.deployment.map((item) => (
                  <li key={item.id} className="py-1">
                    <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                      <h3 className="font-anonymous text-xl font-semibold text-white">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {item.title}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <button
                onClick={() => {
                  setOpen(true);
                  setTitle("Deployment");
                  setContent(deploymentContent);
                }}
                className="cursor-pointer text-lg font-medium transition-colors duration-200 text-white hover:text-primary"
              >
                View details<span aria-hidden="true"> &rarr;</span>
              </button>
            </div>
          </div>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-secondary sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-grayHack w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
      </div>

      <div data-aos="fade-left" style={{zIndex: '9999'}}>
        <NavLink
          href="#form"
          className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-grayHack transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-secondary hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
        >
          Build your project
        </NavLink>
      </div>

      <ModalProcess
        title={title}
        content={content}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}
