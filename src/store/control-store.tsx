import { makeAutoObservable } from 'mobx';

class ControlStore {
  firstControlText = '';
  secondControlText = '';
  thirdControlText = '';
  fourthControlText = '';

  constructor() {
    makeAutoObservable(this);
  }

  setFirstControlText = (value: string) => {
    this.firstControlText = value;
  };

  setSecondControlText = (value: string) => {
    this.secondControlText = value;
  };

  setThirdControlText = (value: string) => {
    this.thirdControlText = value;
  };

  setFourthControlText = (value: string) => {
    this.fourthControlText = value;
  };
}

export default new ControlStore();
