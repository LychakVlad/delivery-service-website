import React from 'react';
import './CallBackForm.scss';
import SecondTitle from '../ui/titles/SecondTitle';
import Input from '../form/Input/Input';

const CallBackForm = () => {
  return (
    <div className="call-back">
      <div className="call-back__wrapper">
        <SecondTitle title="We're on our way" />
        <form>
          <Input type="text" label="How do I address you?" />
        </form>
      </div>
    </div>
  );
};

export default CallBackForm;
