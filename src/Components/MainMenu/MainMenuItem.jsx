import Button from '../ui/Button';
import ImgWithFallback from '../ui/ImgWithFallback';
import FirstTitle from '../ui/titles/FirstTitle';
import './MainMenu.scss';

const MainMenuItem = ({ img, title, text, btn, webp }) => {
  return (
    <div>
      <div className="main-menu__wrapper">
        <FirstTitle title={title} className="title--white" />
        <p className="main-menu__text">{text}</p>
        <Button style={`button--white button--w-111`} link="call-back">
          {btn}
        </Button>
      </div>
      <ImgWithFallback
        src={webp}
        fallback={img}
        alt="slide-img"
        className="main-menu__img"
      />
    </div>
  );
};

export default MainMenuItem;
