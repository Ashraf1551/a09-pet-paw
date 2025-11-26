import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useParams } from "react-router";
import auth from "../firebase/firebase.config";

const ForgetPass = () => {
  const { email } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formEmail = e.target.email.value;
    sendPasswordResetEmail(auth, formEmail)
      .then(() => {
        window.open("https://mail.google.com/mail/u/0/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200 px-4">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-2">
            Reset Password
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                defaultValue={email}
                name="email"
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />
            </div>
            <button className="btn btn-primary w-full mt-4">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
