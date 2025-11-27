import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";

const Login = () => {
  const { setUser, handleGoogleSignin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const email = e.target.email.value;
    const pass = e.target.password.value;

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        toast.success("Login successful! Welcome back.");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        setError("Invalid email or password. Please try again.");
        toast.error("Invalid email or password. Please try again.");
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  const googleSignin = () => {
    setError("");
    handleGoogleSignin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Signed in with Google successfully!");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        setError("Google sign-in failed. Please try again.");
        toast.error("Google sign-in failed. Please try again.");
        console.log(err);
      });
  };

  const handleForget = (e) => {
    e.preventDefault();
    navigate(`/forget/${email}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-base-200 via-base-100 to-base-200 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
            <span className="text-3xl">🐾</span>
          </div>
          <h1 className="text-3xl font-bold text-base-content">
            Welcome Back!
          </h1>
          <p className="text-base-content/60 mt-2">
            Sign in to continue to PetPaw
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
              onClick={googleSignin}
              className="btn btn-outline w-full gap-3 hover:bg-base-200"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>

            <div className="divider text-base-content/50 text-sm my-6">
              or sign in with email
            </div>

            <form onSubmit={handleSubit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pr-12"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/60 hover:text-base-content transition-colors"
                  >
                    {showPassword ? (
                      <FiEyeOff className="w-5 h-5" />
                    ) : (
                      <FiEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <label className="label">
                  <button
                    type="button"
                    onClick={handleForget}
                    className="label-text-alt link link-primary"
                  >
                    Forgot password?
                  </button>
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
                  "Sign In"
                )}
              </button>
            </form>

            <p className="text-center text-sm text-base-content/70 mt-6">
              Don't have an account?{" "}
              <Link to="/signup" className="link link-primary font-semibold">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
