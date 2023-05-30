import React, { Suspense } from 'react';
import TopMenu from '../components/TopMenu/TopMenu';
import MidCardsBlock from '../components/Cards/MidCardsBlock/MidCardsBlock';
import LargeCardsBlock from '../components/Cards/LargeCardsBlock/LargeCardsBlock';
import SmallCardsBlock from '../components/Cards/SmallCardsBlock/SmallCardsBlock';
import MenuList from '../components/MenuList/MenuList';
import BigSlider from '../components/BigSlider/BigSlider';
import IconsSection from '../components/IconsSection/IconsSection';
import CallBackForm from '../components/CallBackForm/CallBackForm';
import LargeCardIcon from '../assets/delivery-illustration.svg';
import slide1 from '../assets/slide1.jpeg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.jpeg';
import slide1w from '../assets/slide1.webp';
import slide2w from '../assets/slide2.webp';
import slide3w from '../assets/slide3.webp';
import CardIcon1 from '../assets/card-icon1.svg';
import CardIcon2 from '../assets/card-icon2.svg';
import CardIcon3 from '../assets/card-icon3.svg';
import LoadingBlock from '../components/LoadingBlock/LoadingBlock';
import Photo from '../assets/photo.jpeg';
import Photo1 from '../assets/photo1.jpeg';
import Photo2 from '../assets/photo2.jpeg';
import Photo3 from '../assets/photo3.jpeg';
import Photo4 from '../assets/photo4.jpeg';
import Photo5 from '../assets/photo5.jpeg';

const Map = React.lazy(() => import('../components/Map/Map'));
const Calculator = React.lazy(() =>
  import('../components/Calculator/Calculator')
);

const Main = () => {
  const pointsThree = [
    {
      number: 1,
      text: 'Register and sign the offer online',
    },
    {
      number: 2,
      text: 'Create an order through a personal account, API or module',
    },
    {
      number: 3,
      text: 'Bring the parcel to the collection point or give it to the courier',
    },
    {
      number: 4,
      text: 'Order a pass for our driver',
    },
    {
      number: 5,
      text: 'Track shipping online',
    },
  ];

  const smallCards = [
    {
      title: 'About',
      linkText: 'Read more',
      link: '/about',
    },
    {
      title: 'API',
      linkText: 'Read more',
      link: '/api',
    },
    {
      title: 'CMS',
      linkText: 'Read more',
      link: '/cms',
    },
    {
      title: 'Widget',
      linkText: 'Read more',
      link: '/widget',
    },
  ];

  const headingSlides = [
    {
      title: 'Delivery for online stores',
      text: "Develop your business, and we'll bring the orders",
      btn: 'Connect',
      img: slide1,
      webp: slide1w,
    },
    {
      title: 'Fast and Reliable Delivery',
      text: 'Get your products delivered quickly and reliably to your customers',
      btn: 'Connect',
      img: slide2,
      webp: slide2w,
    },
    {
      title: 'Global Reach for Your Business',
      text: "Expand your online store's reach worldwide with our international delivery services",
      btn: 'Connect',
      img: slide3,
      webp: slide3w,
    },
  ];

  const midCards = [
    {
      title: 'Easy Order Management',
      img: CardIcon1,
    },
    {
      title: 'Fast Delivery',
      img: CardIcon2,
    },
    {
      title: 'Global Shipping',
      img: CardIcon3,
    },
  ];

  const largeCards = [
    {
      title: 'Easy Returns',
      text: 'Convenient returns for uncollected parcels',
      digit: '50% Off',
      icon: LargeCardIcon,
      shadow: true,
    },
    {
      title: 'Fast Delivery',
      text: 'Quick and reliable delivery service',
      digit: 'On-time',
      icon: LargeCardIcon,
      shadow: true,
    },
    {
      title: 'Global Shipping',
      text: 'Expand your business worldwide',
      digit: 'International Reach',
      icon: LargeCardIcon,
      shadow: true,
    },
    {
      title: 'Real-time Tracking',
      text: 'Track orders in real-time',
      digit: 'Track Every Step',
      icon: LargeCardIcon,
      shadow: true,
    },
  ];

  const sliderContent = [
    {
      name: 'Mike Polo',
      company: 'Amazon',
      role: "Head of Buyer's Orders Department",
      text: 'I would like to express my gratitude to the logistics company that has been providing excellent and punctual delivery services for our goods across the country for the past six months.',
      img: Photo,
    },
    {
      name: 'Sarah Johnson',
      company: 'Google',
      role: 'Senior Software Engineer',
      text: "I'm incredibly impressed with the technical expertise and problem-solving skills demonstrated by this logistics company. They have been instrumental in ensuring the smooth delivery of our software products.",
      img: Photo1,
    },
    {
      name: 'Emily Thompson',
      company: 'Apple',
      role: 'Marketing Manager',
      text: 'The marketing team at this logistics company has been a true partner in our promotional efforts. Their creative ideas and execution have significantly contributed to the success of our campaigns.',
      img: Photo2,
    },
    {
      name: 'John Doe',
      company: 'Microsoft',
      role: 'Product Manager',
      text: 'As a product manager, I rely on efficient logistics services to ensure our products reach customers on time. This logistics company has consistently delivered exceptional service, helping us meet customer expectations.',
      img: Photo3,
    },
    {
      name: 'David Smith',
      company: 'Facebook',
      role: 'Operations Manager',
      text: 'The operations team at this logistics company has played a crucial role in streamlining our supply chain. Their attention to detail and commitment to quality have significantly improved our operational efficiency.',
      img: Photo4,
    },
    {
      name: 'Jeff Lee',
      company: 'Netflix',
      role: 'Content Strategist',
      text: 'Working with this logistics company has been a pleasure. Their expertise in content distribution and their dedication to delivering our shows and movies on time have been instrumental in our success.',
      img: Photo5,
    },
  ];

  const largeCardsTitle = 'More perks';

  return (
    <>
      <TopMenu content={headingSlides} withDelivery={true} />
      <MidCardsBlock content={midCards} withButton={true} />
      <Suspense fallback={<LoadingBlock />}>
        <Calculator />
      </Suspense>
      <Suspense fallback={<LoadingBlock />}>
        <Map />
      </Suspense>

      <LargeCardsBlock content={largeCards} title={largeCardsTitle} />
      <SmallCardsBlock content={smallCards} position={true} />
      <MenuList points={pointsThree} />
      <BigSlider content={sliderContent} />
      <IconsSection />
      <CallBackForm />
    </>
  );
};

export default Main;
