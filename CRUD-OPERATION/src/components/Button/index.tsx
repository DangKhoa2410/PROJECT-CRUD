interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string; 
}

const Button = ({ text, className, ...rest }: ButtonProps) => {
  return (
    <button className={className} {...rest}>{text}</button>
  )
}

export default Button