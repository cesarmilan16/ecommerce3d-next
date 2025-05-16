const Input = {
  variants: {
    custom: {
      field: {
        border: "2px solid",
        borderColor: "borderPrimary",
        bg: "backgroundSecondary",
        color: "textPrimary",
        padding: "14px",
        borderRadius: "6px",
        _hover: { borderColor: "primary.500" },
        _focus: { borderColor: "primary.500" },
        _active: { borderColor: "primary.500" },
        _invalid: { borderColor: "danger" },
      },
    },
  },
  defaultProps: {
    variant: "custom",
  },
};
export default Input;
