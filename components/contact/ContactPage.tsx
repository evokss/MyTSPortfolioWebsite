"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

// Import components
import SuccessConfirmationModal from "./core/SuccessConfirmationModal";
import SocialLinks from "./core/SocialLinks";

// Import the function responsible for submitting form data to an external API  
import { submitForm } from "./api/formSubmission";

// Define interface for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

// Define interface for submission status
interface SubmissionStatus {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>({
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset submission status
    setSubmissionStatus({
      isLoading: true,
      isSuccess: false,
      error: null,
    });

    const result = await submitForm(formData);

    if (result.success) {
      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setSubmissionStatus({
        isLoading: false,
        isSuccess: true,
        error: null,
      });
    } else {
      setSubmissionStatus({
        isLoading: false,
        isSuccess: false,
        error: result.error ?? null,  // Convert undefined to null
      });
    }
  };

  const closeSuccessConfirmationModal = () => {
    setSubmissionStatus((prev) => ({
      ...prev,
      isSuccess: false,
    }));
  };

  return (
    <>
      {/* Success Confirmatio Modal */}
      {submissionStatus.isSuccess && (
        <SuccessConfirmationModal onClose={closeSuccessConfirmationModal} />
      )}

      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-8 py-16 dark:bg-transparent dark:text-white">
        <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row dark:shadow-none dark:border-2 dark:border-orange-400">
          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 p-8 bg-gray-50 dark:bg-gray-900 dark:text-white">
            <h2 className="text-3xl font-bold text-orange-400 mb-4 dark:text-rose-600">
              Let&apos;s create something amazing together
            </h2>
            <p className="text-gray-600 mb-6 dark:text-slate-50">
              The perfect time to start is now. Let&apos;s collaborate and turn
              your concepts into something exceptional—contact me today!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-rose-500"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-rose-600 dark:text-gray-800"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-rose-500"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-rose-600 dark:text-gray-800"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-rose-500"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-rose-600 dark:text-gray-800"
                ></textarea>
              </div>
              {submissionStatus.error && (
                <div className="text-red-500 text-sm mb-4">
                  {submissionStatus.error}
                </div>
              )}
              <button
                type="submit"
                disabled={submissionStatus.isLoading}
                className={`w-full text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-600 transition-colors duration-300 ${
                  submissionStatus.isLoading
                    ? "bg-rose-400 cursor-not-allowed"
                    : "bg-rose-600 hover:bg-rose-400 dark:hover:bg-rose-700"
                }`}
              >
                {submissionStatus.isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Social Links Section */}
          <div className="w-full md:w-1/2 bg-orange-400 p-8 flex flex-col justify-center items-center text-white dark:text-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Connect With Me
            </h3>
            <SocialLinks />
            <div className="mt-8 text-center">
              <p className="text-sm italic">
                &quot;The only way to do great work is to love what you
                do.&quot; <br />- Steve Jobs
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
