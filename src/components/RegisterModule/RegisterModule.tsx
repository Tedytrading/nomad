import { useState } from "react";
import styles from "./RegisterModule.module.scss";
import { RegisterData } from "../../providers/globalProvider/GlobalProvider";
import { useGlobalProvider } from "../../providers/globalProvider/GlobalProviderContext";

interface RegisterModuleProps {
  onSubmit: (data: RegisterData) => void;
}

export const RegisterModule = ({ onSubmit }: RegisterModuleProps) => {
  const { userInputInformation } = useGlobalProvider();
  const [formData, setFormData] = useState<RegisterData>({
    email: userInputInformation.email || "",
    username: userInputInformation.username || "",
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
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
          Username
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={styles.registerInput}
            value={formData.username}
            onChange={handleChange}
          />
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
