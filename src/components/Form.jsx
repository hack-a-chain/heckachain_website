export default function Form() {
  return (
    <div className="sectionForm py-16 md:px-24 lg:px-8 lg:py-20">
      <div data-aos="zoom-in-down" className="containerForm">
        <h2>Contact Us</h2>
        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">First Name</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Last Name</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Email</span>
              <span className="line"></span>
            </div>
          </div>
          <div className="col">
            <div className="inputBox">
              <input type="text" name="" required />
              <span className="text">Mobile</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <div className="inputBox textarea">
              <textarea required></textarea>
              <span className="text">Type Your Message here...</span>
              <span className="line"></span>
            </div>
          </div>
        </div>

        <div className="row100">
          <div className="col">
            <input
              type="submit"
              value="Send"
              className="text-white px-5 py-2 border border-white rounded cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
