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

        <div className="row100">
          <div className="col">
            <input
              type="submit"
              value="Submit"
              className="text-white px-5 py-2 border border-white rounded cursor-pointer"
            />
            <span className="text-white ml-4">
              In a hurry?
              <NavLink className='ml-2 hover:text-primary' href="https://t.me/hackachain" target="blank">
                Contact us on telegram for a faster reply
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
