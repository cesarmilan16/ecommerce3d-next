const Button = {
  baseStyle: {
    container: {
      fontWeight: "bold",
      borderRadius: "6px",
      color: "textPrimary",
      px: "30px",
      py: "15.5px",
    },
  },
  variants: {
    primary: {
      bg: "primary.500",
      _hover: {
        bg: "primary.600",
      },
    },
    secondary: {
      bg: "primary.200",
      _hover: {
        bg: "primary.300",
      },
    },
  },
  defaultProps: {
    colorScheme: "primary",
    variant: "primary",
  },
};
export default Button;
