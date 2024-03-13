import styles from './button.module.css';

export interface ButtonProps {
  buttonText: React.ReactNode;
  buttonClickHandler: (value: any) => void;
}

const Button = ({ buttonText, buttonClickHandler }: ButtonProps) => (
  <button className={styles.button} type="button" onClick={buttonClickHandler}>
    {buttonText}
  </button>
);

export default Button;
