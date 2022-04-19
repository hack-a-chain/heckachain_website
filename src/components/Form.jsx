import NavLink from "./NavLink";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const error = () =>
  toast.warn("Error!", {
    theme: "dark",
  });

const success = () =>
  toast.success("Send!", {
    theme: "dark",
  });

const ErrorComponent = (props) => {
  const { text } = props;
  if (!text) {
    text = "Este campo é obrigatório.";
  }
  return <span className="text-sm font-semibold text-red-600">{text}</span>;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [feedback, setFeedback] = useState({ state: null, message: null });

  const onSubmit = async (data) => {
    const response = await fetch("https://formspree.io/f/mlezpzav", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setFeedback({
        state: "error",
        message: "Erro no envio. Tente novamente mais tarde.",
      });
      error();
      return false;
    }

    const mailSent = await response.json();

    setFeedback({ state: "success", message: mailSent.message });
    success();
  };

  return (
    <div>
      <ToastContainer />
      <form
        id="form"
        className="py-16 sectionForm md:px-24 lg:px-8 lg:py-20 font-anonymous"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div data-aos="zoom-in-down" className="containerForm">
          <h2 className="text-3xl font-bold sm:text-5 xl">Contact us</h2>
          <div className="row100">
            <div className="col">
              <div className="inputBox">
                <input
                  {...register("email", { required: true })}
                  type="text"
                  name="email"
                  id="email"
                />
                {errors.email && <ErrorComponent />}
                <span className="text">Email Address</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputBox">
                <input
                  {...register("telegram", { required: false })}
                  type="text"
                  name="telegram"
                  id="telegram"
                />
                {errors.telegram && <ErrorComponent />}
                <span className="text">Telegram</span>
                <span className="line"></span>
              </div>
            </div>
          </div>

          <div className="row100">
            <div className="col">
              <div className="inputBox">
                <input
                  {...register("github", { required: false })}
                  type="text"
                  name="github"
                  id="github"
                />
                {errors.github && <ErrorComponent />}
                <span className="text">Source code/github (optional)</span>
                <span className="line"></span>
              </div>
            </div>
            <div className="col">
              <div className="inputBox">
                <input
                  {...register("website", { required: false })}
                  type="text"
                  name="website"
                  id="website"
                />
                {errors.website && <ErrorComponent />}
                <span className="text">Website (optional)</span>
                <span className="line"></span>
              </div>
            </div>
          </div>

          <div className="row100">
            <div className="col">
              <div className="inputBox">
                <input
                  {...register("company", { required: false })}
                  type="text"
                  name="company"
                  id="company"
                />
                {errors.company && <ErrorComponent />}
                <span className="text">Company (optional)</span>
                <span className="line"></span>
              </div>
            </div>
          </div>

          <div className="row100">
            <div className="col">
              <div className="inputBox textarea">
                <input
                  {...register("description", { required: false })}
                  type="text"
                  name="description"
                  id="description"
                />
                {errors.description && <ErrorComponent />}
                <span className="text">
                  Project short description (optional)
                </span>
                <span className="line"></span>
              </div>
            </div>
          </div>

          <div className="row100">
            <div className="flex flex-col items-start justify-center col sm:flex-row sm:justify-start sm:items-center">
              <input
                type="submit"
                value="Submit"
                className="px-5 py-2 text-white border border-white rounded cursor-pointer"
              />
              <span className="mt-4 ml-0 text-white sm:ml-4 sm:mt-0">
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
      </form>
    </div>
  );
}
