import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { registerwithEmailPassword, setUser, handleGoogleSignin } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const email = e.target.email.value;
    const pass = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (pass.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }
    if (!uppercase.test(pass)) {
      setError("Password must contain at least one uppercase letter");
      setLoading(false);
      return;
    }
    if (!lowercase.test(pass)) {
      setError("Password must contain at least one lowercase letter");
      setLoading(false);
      return;
    }

    registerwithEmailPassword(email, pass)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser(userCredential.user);
            navigate(location.state ? location.state : "/profile");
          })
          .catch((error) => {
            setError("Failed to update profile. Please try again.");
            console.log(error);
          });
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setError("This email is already registered. Please login instead.");
        } else {
          setError("Registration failed. Please try again.");
        }
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const googleSignup = () => {
    setError("");
    handleGoogleSignin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state ? location.state : "/profile");
      })
      .catch((err) => {
        setError("Google sign-up failed. Please try again.");
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
            <span className="text-3xl">🐾</span>
          </div>
          <h1 className="text-3xl font-bold text-base-content">
            Create Account
          </h1>
          <p className="text-base-content/60 mt-2">
            Join PetPaw to care for your furry friends
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl border border-base-200">
          <div className="card-body p-6 sm:p-8">
            {error && (
              <div className="alert alert-error mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm">{error}</span>
              </div>
            )}

            <button
              type="button"
              onClick={googleSignup}
              className="btn btn-outline w-full gap-3 hover:bg-base-200"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>

            <div className="divider text-base-content/50 text-sm my-6">
              or register with email
            </div>

            <form onSubmit={handleSubit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Photo URL</span>
                  <span className="label-text-alt text-base-content/50">
                    Optional
                  </span>
                </label>
                <input
                  name="photoUrl"
                  type="url"
                  className="input input-bordered w-full"
                  placeholder="https://example.com/photo.jpg"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Create a password"
                  required
                />
                <label className="label">
                  <span className="label-text-alt text-base-content/50">
                    Min 6 chars, 1 uppercase & 1 lowercase
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full mt-2"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            <p className="text-center text-sm text-base-content/70 mt-6">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
