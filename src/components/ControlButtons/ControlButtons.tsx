import { useState } from 'react';
import Button, { ButtonProps } from '../Button/Button';
import styles from './controlButtons.module.css';
import TextInput from '../TextInput/TextInput';

interface ControlButtonsProps {
  controlText: string;
  setControlText: (text: string) => void;
  leftButtons?: ButtonProps[];
  rightButtons?: ButtonProps[];
}

const ControlButtons = ({
  controlText,
  setControlText,
  leftButtons,
  rightButtons,
}: ControlButtonsProps) => {
  return (
    <div className={styles.control}>
      {leftButtons && (
        <div className={styles.control__buttons}>
          {leftButtons.map((buttonProps, index) => (
            <Button {...buttonProps} key={index} />
          ))}
        </div>
      )}
      <TextInput value={controlText} onChange={setControlText} placeholder="Enter the text" />
      {rightButtons && (
        <div className={styles.control__buttons}>
          {rightButtons.map((buttonProps, index) => (
            <Button {...buttonProps} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ControlButtons;
