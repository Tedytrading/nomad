import { useState } from "react";
import styles from "./RegisterModule.module.scss";
import closedEye from "../../assets/closedEye.svg";
import openEye from "../../assets/openEye.svg";

export const RegisterModule = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.registerTitle}>REGISTER</h1>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <label className={styles.registerLabel}>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.registerInput}
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className={styles.registerLabel}>
          Login
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={styles.registerInput}
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label className={styles.registerLabel}>
          Password
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={styles.registerInput}
              value={formData.password}
              onChange={handleChange}
            />
            <img
              src={showPassword ? openEye : closedEye}
              alt="Toggle password visibility"
              className={styles.passwordToggle}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            />
          </div>
        </label>
        <label className={styles.registerLabel}>
          Confirm password
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className={styles.registerInput}
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <img
              src={showPassword ? openEye : closedEye}
              alt="Toggle password visibility"
              className={styles.passwordToggle}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            />
          </div>
        </label>
        <label className={styles.termsContainer}>
          <input
            type="checkbox"
            name="termsAccepted"
            className={styles.checkbox}
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <span>I agree to the Terms of Service</span>
        </label>
        <button
          disabled={!formData.termsAccepted}
          type="submit"
          className={`${styles.registerButton} ${!formData.termsAccepted ? styles.disabledButton : ""}`}
        >
          Continue
        </button>
      </form>
    </div>
  );
};
