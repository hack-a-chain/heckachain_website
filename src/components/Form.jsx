import NavLink from "./NavLink";
import { Controller, useForm } from "react-hook-form";
import NumberFormat from "react-number-format";
import { useState } from "react";

const Feedback = ({ state, message }) => {
  if (state == "error") {
    return (
      <div className="p-4 rounded-md bg-red-50">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="w-5 h-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">{message}</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 mt-5 rounded-md bg-green-50">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="w-5 h-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">Sucesso!</h3>
          <div className="mt-2 text-sm text-green-700">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    const response = await fetch("/api/email", {
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
      return false;
    }

    const mailSent = await response.json();

    setFeedback({ state: "success", message: mailSent.message });
  };

  return (
    <div>
      {feedback.state && (
        <Feedback state={feedback.state} message={feedback.message} />
      )}
      {feedback.state != "success" && (
        <form
          id="form"
          className="sectionForm py-16 md:px-24 lg:px-8 lg:py-20 font-anonymous"
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
                    {...register("telegram", { required: true })}
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
                    {...register("github", { required: true })}
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
                    {...register("website", { required: true })}
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
                    {...register("company", { required: true })}
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
                    {...register("description", { required: true })}
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
        </form>
      )}
    </div>
  );
}
