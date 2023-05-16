import React from 'react';
import FirstTitle from '../ui/titles/FirstTitle';
import './PrivacyBlock.scss';
import ThirdTitle from '../ui/titles/ThirdTitle';

const PrivacyBlock = () => {
  return (
    <div className="privacy">
      <div className="container">
        <FirstTitle title="Privacy Policy" />
        <div className="privacy__wrapper">
          <ThirdTitle title="Information Collection and Use" />
          <p className="privacy__text">
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you. Personally identifiable information may include, but
            is not limited to, your email address, name, phone number, postal
            address, and other information ("Personal Information").
          </p>
          <ThirdTitle title="Log Data" />
          <p className="privacy__text">
            We collect information that your browser sends whenever you visit
            our Service ("Log Data"). This Log Data may include information such
            as your computer's Internet Protocol ("IP") address, browser type,
            browser version, the pages of our Service that you visit, the time
            and date of your visit, the time spent on those pages, and other
            statistics.
          </p>
          <ThirdTitle title="Cookies" />
          <p className="privacy__text">
            Cookies are files with a small amount of data, which may include an
            anonymous unique identifier. Cookies are sent to your browser from a
            website and stored on your computer's hard drive. We use "cookies"
            to collect information. You can instruct your browser to refuse all
            cookies or to indicate when a cookie is being sent. However, if you
            do not accept cookies, you may not be able to use some portions of
            our Service.
          </p>
          <ThirdTitle title="Service Providers" />
          <p className="privacy__text">
            We may employ third-party companies and individuals to facilitate
            our Service, to provide the Service on our behalf, to perform
            Service-related services, or to assist us in analyzing how our
            Service is used. These third parties have access to your Personal
            Information only to perform these tasks on our behalf and are
            obligated not to disclose or use it for any other purpose.
          </p>
          <ThirdTitle title="Security" />
          <p className="privacy__text">
            The security of your Personal Information is important to us, but
            remember that no method of transmission over the Internet or method
            of electronic storage is 100% secure. While we strive to use
            commercially acceptable means to protect your Personal Information,
            we cannot guarantee its absolute security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyBlock;
