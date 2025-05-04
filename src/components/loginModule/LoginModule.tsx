import { useState } from "react";
import styles from "./LoginModule.module.scss";
import openEye from "../../assets/openEye.svg";
import closedEye from "../../assets/closedEye.svg";

export const LoginModule = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>LOGIN</h1>
      <form className={styles.loginForm}>
        <label className={styles.loginLabel}>
          Login
          <input type="text" placeholder="Username" className={styles.loginInput} />
        </label>
        <label className={styles.loginLabel}>
          Password
          <div className={styles.passwordContainer}>
            <input type={showPassword ? "text" : "password"} placeholder="Password" className={styles.loginInput} />
            <img
              src={showPassword ? openEye : closedEye}
              alt="Toggle password visibility"
              className={styles.passwordToggle}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            />
          </div>
        </label>
        <button type="submit" className={styles.loginButton}>
          Continue
        </button>
      </form>
    </div>
  );
};
