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
      _focus: { borderColor: "primary.500" },
    },
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      _hover: { bg: "primary.500" },
      _active: { bg: "primary.500" },
    },
  },
};
export default Select;
