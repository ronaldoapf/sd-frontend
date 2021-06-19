import { Button as MaterialButton } from '@material-ui/core';

const Button = ({ children, onClick, variant, color, type }) => {
  return (
    <MaterialButton 
      type={type}
      color={color}
      onClick={onClick}
      variant={variant} 
    >
      {children}
    </MaterialButton>
  )
};

export default Button;