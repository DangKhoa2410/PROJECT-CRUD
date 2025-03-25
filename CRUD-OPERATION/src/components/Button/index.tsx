interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  style?: React.CSSProperties;
}

const Button = ({ text, ...rest }: ButtonProps) => {
  return (
    <button {...rest}>{text}</button>
  )
}

export default Button