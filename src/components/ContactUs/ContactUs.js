import React, { useState } from "react";
import { useFormik } from "formik";
import "./ContactUs.scss";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const errors = {};

  const validate = (values) => {
    if (!values.email) {
      errors.email = "Podaj adres email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Niepoprawny adres email";
    }

    if (!values.message) {
      errors.message = "Jakie masz pytania?";
    } else if (values.message.length < 10) {
      errors.message = "Napisz coś więcej";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validate,
    onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
      const formdata = new FormData();

      formdata.append("email", values.email);
      formdata.append("message", values.message);

      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        if (xhr.status === 200) {
          setSubmitting(false);
          if (xhr.responseText === "send") {
            setIsSent(true);
            resetForm();
          } else {
            setIsError("Error from server");
          }
        }
      };
      xhr.open("POST", "question.php", true);
      xhr.send(formdata);
    },
  });
  return (
    <div className="contactus-container">
      <header>
        <div className="contactus-header-image"></div>
        <div className="contactus-header-title">
          <h1>Kontakt</h1>
        </div>
      </header>
      <div className="contactus-form">
        <div className="contactus-form-title">
          <h1>
            Formularz kontaktowy <i className={"icon-mail-alt"} />{" "}
          </h1>
          <p>Masz pytania? Napisz.</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          {formik.errors.email ? (
            <label htmlFor={"email"} className={"error"}>
              {formik.errors.email}
            </label>
          ) : (
            <label htmlFor={"email"}>Email:* </label>
          )}
          <input
            type={"text"}
            id={"email"}
            name={"email"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.message ? (
            <label htmlFor={"message"} className={"error"}>
              {formik.errors.message}
            </label>
          ) : (
            <label htmlFor={"message"}>Wiadomość:* </label>
          )}
          <textarea
            id={"message"}
            name={"message"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {isSent && (
            <div className={"sent-success"}>
              <strong>Wysłano!</strong>
            </div>
          )}
          {isError && (
            <div className={"sent-error"}>
              <strong>Coś poszło nie tak :(</strong>
            </div>
          )}
          <button type={"submit"} disabled={formik.isSubmitting}>
            {formik.isSubmitting ? (
              <div className={"loading-spinner"} />
            ) : (
              "Wyślij"
            )}
          </button>

          <div className={"contactus-agreements"}>
            Wypełnienie formularza oznacza, że podane w nim dane osobowe będą
            przetwarzane w celu nawiązania kontaktu i przedstawienia oferty.
            Zasady przetwarzania i informacje o administratorze znajdziesz{" "}
            <Link to={"/privacy"}>tutaj</Link>.
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
