import NavLink from "./NavLink";

export default function Form() {
  return (
    <div id="form" className="sectionForm py-16 md:px-24 lg:px-8 lg:py-20">
      <div data-aos="zoom-in-down" className="containerForm">
        <h2 className="text-3xl font-bold sm:text-4xl">Contact us</h2>
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
              <span className="text">Source code/github (optional)</span>
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
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Company (optional)</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="inputBox textarea">
              {/* <textarea required></textarea> */}
              <input type="text" name="" required />

              <span className="text">Project short description (optional)</span>
              <span className="line"></span>
            </div>
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
