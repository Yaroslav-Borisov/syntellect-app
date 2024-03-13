import styles from './textInput.module.css';

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const TextInput = ({ value, onChange, placeholder }: TextInputProps) => (
  <input
    className={styles.input}
    value={value}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
    type="text"
    placeholder={placeholder}
  />
);

export default TextInput;
