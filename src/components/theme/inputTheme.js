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
        _hover: { borderColor: "goldHover" },
        _focus: { borderColor: "goldHover" },
        _active: { borderColor: "goldHover" },
        _invalid: { borderColor: "danger" },
      },
    },
  },
  defaultProps: {
    variant: "custom",
  },
};
export default Input;
