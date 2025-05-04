import styles from "./PreRegisterModule.module.scss";
import ArrowRegister from "../../assets/arrowsRegister.svg";

interface PreRegisterModuleProps {
  onClick: () => void;
}

export const PreRegisterModule = ({ onClick }: PreRegisterModuleProps) => {
  return (
    <div className={styles.PreRegistercontainer}>
      <img src={ArrowRegister} alt="Arrow Register" className={styles.image} />
      <div className={styles.headingContainer}>
        <h1>
          <span className={styles.witheHeading}>TRACK YOUR COIN WITH </span>
          <span className={styles.greenHeading}>THE EASIEST WAY</span>
        </h1>
      </div>
      <p className={styles.paragraph}>
        Have you ever found it very difficult to manage your crypto? now you don't have to worry
      </p>
      <button className={styles.Registerbutton} onClick={() => onClick()}>
        REGISTER
      </button>
    </div>
  );
};
