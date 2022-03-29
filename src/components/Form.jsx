import NavLink from "./NavLink";

export default function Form() {
  return (
    <div id="form" className="sectionForm py-16 md:px-24 lg:px-8 lg:py-20">
      <div data-aos="zoom-in-down" className="containerForm">
        <h2>Request an audit</h2>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Email Address</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Telegram</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Source code/github</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Website (optional)</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="inputBox textarea">
              <textarea required></textarea>
              <span className="text">Project description (optional)</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 px-4">
          <div className="col-span-3 flex flex-col">
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-primary"
              />
              <span class="ml-2 text-white">Smart contract security audit</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-primary"
              />
              <span class="ml-2 text-white">Blockchain development</span>
            </label>
          </div>

          <div className="col-span-3 flex flex-col">
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-primary"
              />
              <span class="ml-2 text-white">KYC verification</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-primary"
              />
              <span class="ml-2 text-white">Security consulting</span>
            </label>
          </div>
        </div>

        <div className="row100">
          <div className="col flex flex-col sm:flex-row justify-center items-start sm:justify-start sm:items-center">
            <input
              type="submit"
              value="Submit"
              className="text-white px-5 py-2 border border-white rounded cursor-pointer"
            />
            <span className="text-white mt-4 ml-0 sm:ml-4 sm:mt-0">
              In a hurry?
              <NavLink
                className="ml-2 hover:text-primary"
                href="https://t.me/hackachain"
                target="blank"
              >
                Contact us on telegram for a faster reply
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
