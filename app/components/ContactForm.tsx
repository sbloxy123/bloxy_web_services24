import "../css/form.css";

const ContactForm = () => {
  return (
    <div className="my-formy xsmall:h-auto py-[6rem] bg-theme_black-900">
      <div className="content-container py-12">
        <div className="d-flex justify-content-center align-items-center login-box px-[5%]">
          <div className="">
            <h2 className="text-theme_white-900 text-center w-full small:w-[40%] mx-auto py-[6rem]">
              GET IN TOUCH
            </h2>

            <div className="col-span-12 text-left">
              <form
                action="https://formspree.io/f/meqvjrla"
                //change action address on completion
                method="POST"
                className="form-elements w-[90%] small:w-[60%] m-auto"
              >
                <div className="grid grid-cols-1">
                  <label
                    htmlFor="name"
                    className="form-control-label  text-theme_white-900 m-0"
                  >
                    YOUR NAME
                  </label>
                  <input name="name" type="text" className="form-control" />
                </div>
                <div className="grid grid-cols-1">
                  <label
                    htmlFor="email"
                    className="form-control-label  text-theme_white-900 m-0"
                  >
                    YOUR EMAIL ADDRESS
                  </label>
                  <input name="email" type="email" className="form-control" />
                </div>
                <div className="grid grid-cols-1">
                  <label
                    htmlFor="message"
                    className="form-control-label  text-theme_white-900 m-0"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    cols={10}
                    rows={5}
                    className="form-control bg-theme_black-900 text-white text-[1.6rem] pt-[2rem]"
                  ></textarea>
                </div>
                <div className="p-0 mt-[6rem]">
                  <button type="submit" className="contact-button">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="text-center bg-theme_peach-900  text-theme_black-900 mx-auto max-w-[750px] mt-[6rem] small:w-[60%]">
            <p className="contact__para p-[5%] text-[1.6rem]">
              With today&apos;s technology, communication is effortless via
              video calls, emails, and messaging services. Located in North
              Hertfordshire, I am ideally positioned for in-person meetings if
              you&apos;re based in London, Hertfordshire, Cambridgeshire, Essex,
              or nearby areas
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
