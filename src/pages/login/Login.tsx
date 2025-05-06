import { RegisterModule } from "../../components/RegisterModule/RegisterModule";
import QrLogo from "../../assets/Qrlogo.svg";
import styles from "./Login.module.scss";
import { useMemo, useState } from "react";
import { PreRegisterModule } from "../../components/PreRegisterModule/PreRegisterModule";
import { useGlobalProvider } from "../../providers/globalProvider/GlobalProviderContext";
import { useAPI } from "../../providers/api/APIProvider";
import { RequestHandler } from "../../providers/api/RequestHandler";
import { VerifyEmailModule } from "../../components/loginModule/VerifyEmailModule";
import { RegisterData } from "../../providers/globalProvider/GlobalProvider";

export const Login = () => {
  const { mutations } = useAPI();
  const [registerModuleActive, setRegisterModuleActive] = useState(false);
  const { registrationStatus, setRegistrationStatus, setUserInputInformation } = useGlobalProvider();

  const handleNewRegister = async (data: RegisterData) => {
    if (!data.email || !data.username || !data.termsAccepted) {
      return;
    }
    const completeRegistrationResponse = await RequestHandler(
      mutations.completeRegistration(data.email, data.username)
    );
    if (completeRegistrationResponse)
      setRegistrationStatus((prev) => ({
        ...prev,
        registrationNotCompleted: false,
        emailNotVerified: true,
      }));
  };

  const handleOnConfirmEmail = async (emailCode: string | null) => {
    if (!emailCode) {
      return;
    }

    const confirmEmailResponse = await RequestHandler(mutations.verifyEmail(emailCode));
    console.log("Confirm email response:", confirmEmailResponse);
  };

  const handleOnResendCode = async () => {
    const response = await RequestHandler(mutations.resendCode());
    console.log("Resend code response:", response);
  };

  const handleOnChangeEmail = () => {
    setRegisterModuleActive(true);
    setRegistrationStatus((prev) => ({
      ...prev,
      registrationNotCompleted: true,
      emailNotVerified: false,
    }));
  };

  const contentToRender = useMemo(() => {
    if (registrationStatus.registrationNotCompleted && !registerModuleActive) {
      return (
        <PreRegisterModule
          onClick={() => {
            setRegistrationStatus((prev) => ({
              ...prev,
              registrationNotCompleted: true,
            }));
            setRegisterModuleActive(true);
          }}
        />
      );
    }

    if (registrationStatus.registrationNotCompleted && registerModuleActive) {
      return (
        <RegisterModule
          onSubmit={(data) => {
            console.log("Register data:", data);
            setUserInputInformation(data);
            handleNewRegister(data);
          }}
        />
      );
    }

    if (registrationStatus.emailNotVerified) {
      return (
        <VerifyEmailModule
          onConfirmEmail={(emailCode) => handleOnConfirmEmail(emailCode)}
          onResendCode={() => handleOnResendCode()}
          onChangeEmail={() => handleOnChangeEmail()}
        />
      );
    }
  }, [registrationStatus]);

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
      {contentToRender || null}
    </div>
  );
};
