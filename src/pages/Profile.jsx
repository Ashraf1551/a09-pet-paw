import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import auth from "../firebase/firebase.config";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const { setUser, user } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
    setSuccess(false);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        setUser({ ...user, photoURL: photoUrl, displayName: name });
        setSuccess(true);
        setIsOpen(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="card bg-base-100 shadow-xl overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-primary to-secondary"></div>

          <div className="card-body pt-0 -mt-16">
            <div className="flex flex-col items-center">
              <div className="avatar mb-4">
                <div className="w-28 h-28 rounded-full ring-4 ring-base-100 shadow-lg">
                  <img
                    src={user?.photoURL || "https://i.pravatar.cc/150?img=3"}
                    alt={user?.displayName || "User"}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-base-content">
                {user?.displayName || "User"}
              </h2>
              <p className="text-base-content/60 flex items-center gap-2 mt-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {user?.email}
              </p>
            </div>

            <div className="divider my-6"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-base-200 rounded-xl p-4">
                <p className="text-sm text-base-content/60 mb-1">
                  Member Since
                </p>
                <p className="font-semibold">
                  {user?.metadata?.creationTime
                    ? new Date(user.metadata.creationTime).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                    : "N/A"}
                </p>
              </div>
              <div className="bg-base-200 rounded-xl p-4">
                <p className="text-sm text-base-content/60 mb-1">
                  Last Sign In
                </p>
                <p className="font-semibold">
                  {user?.metadata?.lastSignInTime
                    ? new Date(user.metadata.lastSignInTime).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                    : "N/A"}
                </p>
              </div>
            </div>

            {success && (
              <div className="alert alert-success mb-4">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Profile updated successfully!</span>
              </div>
            )}

            <button
              onClick={handleOpenForm}
              className={`btn ${
                isOpen ? "btn-ghost" : "btn-primary"
              } w-full gap-2`}
            >
              {isOpen ? (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Cancel
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Edit Profile
                </>
              )}
            </button>

            {isOpen && (
              <form
                onSubmit={handleUpdate}
                className="mt-6 space-y-4 bg-base-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-4">
                  Update Your Profile
                </h3>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Display Name</span>
                  </label>
                  <input
                    defaultValue={user?.displayName}
                    name="name"
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Photo URL</span>
                  </label>
                  <input
                    defaultValue={user?.photoURL}
                    name="photoUrl"
                    type="url"
                    className="input input-bordered w-full"
                    placeholder="https://example.com/photo.jpg"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full mt-4"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
