const ImgWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  alt,
  className,
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} className={className} />
    </picture>
  );
};

export default ImgWithFallback;
