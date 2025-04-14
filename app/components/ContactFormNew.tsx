"use client";
import React, { useState } from "react";
import "../css/form.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ToastContainer, toast } from "react-toastify";
import { validationSchema } from "./utils/validations";

type FormValues = {
  name: string;
  email: string;
  message: string;
  phone: string;
};

const ContactFormNew = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={async (
          values: FormValues,
          {
            setSubmitting,
            resetForm,
          }: {
            setSubmitting: (isSubmitting: boolean) => void;
            resetForm: () => void;
          }
        ) => {
          try {
            setIsLoading(true);
            // Send form data along with image URLs to your backend
            const response = await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...values }),
            });
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }

            // Reset the form and uploaded images
            resetForm();
            toast.success("Form submitted successfully!");
          } catch (error) {
            console.error("Error submitting form:", error);
            toast.error(
              "Oops.. something went wrong! If the issue persists, please email us directly 🙂"
            );
          } finally {
            setSubmitting(false);
            setIsLoading(false);
          }
        }}
      >
        {() => (
          <div className="bg-theme_black-900 py-28">
            <Form>
              <h2 className="text-theme_white-900 text-center w-full small:w-[40%] mx-auto py-[6rem]">
                GET IN TOUCH
              </h2>
              <div className="px-[5%] small:px-layout-small">
                {isLoading && (
                  <div className="absolute h-full w-full inset-0 bg-gray-600 opacity-50 flex justify-center items-center z-50 backdrop:blur-md">
                    <div className="loading"></div>

                    {/* <div className="h-20 w-20 bg-white rounded-lg flex justify-center items-center">
                      <div className="animate-spin bg-white text-4xl">⏳</div>
                    </div> */}
                  </div>
                )}
                <div className="flex flex-wrap -m-2">
                  {/* Name Field */}
                  <div className="p-2 pr-6 w-full xsmall:w-1/2">
                    <div className="relative">
                      <label className="form-control-label leading-7 text-sm text-theme_white-900">
                        Name:
                      </label>
                      <Field
                        type="text"
                        id="name"
                        name="name"
                        className="form-control "
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="p-2 w-full xsmall:w-1/2">
                    <div className="relative">
                      <label className="form-control-label leading-7 text-sm text-theme_white-900">
                        Email:
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="p-2 pr-6 w-full xsmall:w-1/2 ">
                    <div className="relative">
                      <label className="form-control-label leading-7 text-sm text-theme_white-900">
                        Phone Number:
                      </label>
                      <Field
                        type="phone"
                        id="phone"
                        name="phone"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  {/* Current Website URL */}
                  <div className="p-2 w-full xsmall:w-1/2">
                    <div className="relative">
                      <label className="form-control-label leading-7 text-sm text-theme_white-900">
                        Current Website URL:
                      </label>
                      <Field
                        type="text"
                        id="currentWebsite"
                        name="currentWebsite"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="currentWebsite"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label className="form-control-label leading-7 text-sm text-theme_white-900">
                        Message:
                      </label>
                      <Field
                        id="message"
                        name="message"
                        as="textarea"
                        cols={10}
                        rows={5}
                        className="form-control"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="contact-button"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>

      {/* Toast Notifications */}
      <ToastContainer
        position="bottom-center"
        autoClose={20000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default ContactFormNew;
