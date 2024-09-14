import React, { useState, useEffect } from "react";
import axios from "axios";
import ChangePassword from "./ChangePassword.js";
export default function UserProfileDemo({
  handleCloseUserProfile,
  user,
  token,
  setUser,
}) {
  const [message, setMessage] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [displayChangePassword, setDisplayChangePassword] = useState(false);

  const [uploadnotComplete, setUploadnotComplete] = useState(true);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleChangePassword = () => {
    setDisplayChangePassword(true);
  };

  const handleEditProfile = () => {
    setEditProfile(true);
    setUploadnotComplete(true);
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser && token) {
      setUser(JSON.parse(storedUser)); // Correctly parsing stored user
      setEmail(JSON.parse(storedUser).email);
      setUserName(JSON.parse(storedUser).userName);
      setAvatarUrl(JSON.parse(storedUser).avatarUrl);
    }
    const storedAvatarUrl = localStorage.getItem("avatarUrl");
    if (storedAvatarUrl && token) {
      setAvatarUrl(storedAvatarUrl);
    }
  }, []);

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("email", user.email); // Include email in formData

    setLoading(true);
    try {
      const response = await axios.post(
        "https://portfoliobackend-zuw0.onrender.com/api/user/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data.msg);
      setUploadnotComplete(false);
      const avatarUrl = response.data.avatarUrl;
      localStorage.setItem("avatarUrl", avatarUrl);
      setAvatarUrl(avatarUrl);
    } catch (error) {
      console.error("File upload failed:", error);
      setMessage("File upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-profile-card">
      <div className="user-avatar">
        <img src={avatarUrl} alt="User-Profile" />
        <h4>{userName}</h4>
      </div>
      {editProfile && uploadnotComplete ? (
        <form onSubmit={handleSubmitFile}>
          <div>
            <input
              type="file"
              accept="image/*"
              capture="camera"
              onChange={handleFileChange}
            />
          </div>
          <div>
            {avatarUrl ? (
              <button type="submit">Update Profile</button>
            ) : (
              <button type="submit" disabled={loading}>
                {loading ? "Uploading..." : "Upload"}
              </button>
            )}
            <p>{message}</p>
          </div>
        </form>
      ) : (
        <h3 className="edit-profile" onClick={handleEditProfile}>
          Edit Profile
        </h3>
      )}
      <div>
        <div className="user-profile-email">
          <span>
            <i className="fa-solid fa-envelope"></i>
          </span>
          <span>{userEmail}</span>
        </div>
        <div className="user-profile-password">
          <span>
            <i className="fa-solid fa-lock"></i>
          </span>
          <span onClick={handleChangePassword}>Change password</span>
          {displayChangePassword && (
            <ChangePassword
              setDisplayChangePassword={setDisplayChangePassword}
            ></ChangePassword>
          )}
        </div>
      </div>
      <div className="user-profile-crossoff">
        <i className="fa-solid fa-x" onClick={handleCloseUserProfile}></i>
      </div>
    </div>
  );
}
