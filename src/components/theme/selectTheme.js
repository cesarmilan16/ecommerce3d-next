const Select = {
  baseStyle: {
    field: {
      bg: "backgroundTertiary",
      borderRadius: "5px",
      _focus: { borderColor: "primary.500" },
    },
    dropdown: {
      bg: "backgroundSecondary",
      borderRadius: "6px",
      border: 0,
      mt: "10px",
      _focus: { borderColor: "primary" },
    },
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      _hover: { bg: "primary" },
      _active: { bg: "primary" },
    },
  },
};
export default Select;
