import { LoginModule } from "../../components/loginModule/LoginModule";
import { RegisterModule } from "../../components/RegisterModule/RegisterModule";
import QrLogo from "../../assets/Qrlogo.svg";
import styles from "./Login.module.scss";
import { useState } from "react";
import { PreRegisterModule } from "../../components/PreRegisterModule/PreRegisterModule";
import { useGlobalProvider } from "../../providers/globalProvider/GlobalProviderContext";

export const Login = () => {
  const { registrationStatus } = useGlobalProvider();
  const [registerModuleActive, setRegisterModuleActive] = useState(false);

  const contentToRender = () => {
    if (registrationStatus) {
      return <LoginModule />;
    }

    if (!registrationStatus && !registerModuleActive) {
      return <PreRegisterModule onClick={() => setRegisterModuleActive(true)} />;
    }

    if (registerModuleActive) {
      return <RegisterModule />;
    }
  };

  return (
    <div className={styles.loginContainer}>
      <img
        src={QrLogo}
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      {contentToRender()}
    </div>
  );
};
