interface ImageProps {
  src?: string;
  className?: string;
  alt?: string;
}

export function Image(props: ImageProps) {
  const { src, className, alt } = props;
  return <img src={src} alt={alt} className={className} />;
}
