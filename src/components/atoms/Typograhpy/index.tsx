interface TypograhpyProps {
  variant?: string;
  className?: string;
  children: React.ReactNode;
}

export function Typograhpy(props: TypograhpyProps) {
  const { variant, className, children } = props;
  if (variant === 'h1') {
    return (<h1 className={className}>{children}</h1>)
  }
  if (variant === 'h2') {
    return (<h2 className={className}>{children}</h2>)
  }
  if (variant === 'h3') {
    return (<h3 className={className}>{children}</h3>)
  }
  if (variant === 'h4') {
    return (<h4 className={className}>{children}</h4>)
  }
  if (variant === 'h5') {
    return (<h5 className={className}>{children}</h5>)
  }
  if (variant === 'h6') {
    return (<h6 className={className}>{children}</h6>)
  }
  return (<p className={className}>{children}</p>)
};