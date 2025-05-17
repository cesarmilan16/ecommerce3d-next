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
        _hover: { borderColor: "gold.600" },
        _focus: { borderColor: "gold.600" },
        _active: { borderColor: "gold.600" },
        _invalid: { borderColor: "danger" },
      },
    },
  },
  defaultProps: {
    variant: "custom",
  },
};
export default Input;
