import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ChangePassword({ setDisplayChangePassword }) {
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const storedEmail = JSON.parse(storedUser).email;
      if (storedEmail) {
        setUserEmail(storedEmail);
      }
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage("Password didn't match!");
      return;
    }

    try {
      const response = await axios.post(
        "https://portfoliobackend-zuw0.onrender.com/api/user/changepassword",
        { ...formData, email: userEmail }
      );

      setMessage(response.data.msg);

      if (response.status === 200) {
        setDisplayChangePassword(false);
      }
    } catch (error) {
      setMessage("Something went wrong");
      console.error("Password change failed:", error);
    }
  };

  return (
    <div className="ChangePass-container">
      <div className="crosschngpass">
        <i
          className="fa-solid fa-x"
          onClick={() => setDisplayChangePassword(false)}
        ></i>
      </div>
      <h1>Change Your Password</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Current Password</label>
          <input
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="chngpassmsg">
          <p>{message}</p>
        </div>
        <div className="chngpassbtn">
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
}
