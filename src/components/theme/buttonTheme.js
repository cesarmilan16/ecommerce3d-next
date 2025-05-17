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
      bg: "primary.500", // Rojo logo
      _hover: {
        bg: "primary.600",
      },
    },
    secondary: {
      bg: "gold.500", // Oro
      color: "backgroundPrimary",
      _hover: {
        bg: "primary.400",
        color: "textPrimary",
      },
    },
    outline: {
      border: "2px solid",
      borderColor: "gold.500",
      color: "gold.500",
      bg: "transparent",
      _hover: {
        bg: "gold.500",
        color: "backgroundPrimary",
      },
    },
  },
  defaultProps: {
    colorScheme: "primary",
    variant: "primary",
  },
};
export default Button;
