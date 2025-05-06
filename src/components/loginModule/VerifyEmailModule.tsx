import { useState } from "react";
import styles from "./verifyEmailModule.module.scss";

interface VerifyEmailModuleProps {
  onConfirmEmail: (emailCode: string | null) => void;
  onResendCode: () => void;
  onChangeEmail: () => void;
}
export const VerifyEmailModule = ({ onConfirmEmail, onResendCode, onChangeEmail }: VerifyEmailModuleProps) => {
  const [emailCodeInput, setEmailCodeInput] = useState<string | null>(null);

  return (
    <div className={styles.verifyEmailContainer}>
      <h1 className={styles.verifyEmailTitle}>CONFIRM EMAIL</h1>
      <div className={styles.verifyEmailForm}>
        <label className={styles.verifyEmailLabel}>
          Code from email
          <input
            type="text"
            placeholder="code"
            className={styles.verifyEmailInput}
            onChange={(e) => setEmailCodeInput(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className={styles.primaryEmailButton}
          onClick={() => {
            onConfirmEmail(emailCodeInput);
          }}
        >
          CONFIRM
        </button>
        <button
          type="submit"
          className={styles.secondaryEmailButton}
          onClick={() => {
            onResendCode();
          }}
        >
          RE_SEND CODE
        </button>
        <button
          type="submit"
          className={styles.secondaryEmailButton}
          onClick={() => {
            onChangeEmail();
          }}
        >
          CHANGE EMAIL
        </button>
      </div>
    </div>
  );
};
