const Pagination = {
  baseStyle: {
    container: {
      borderColor: "borderPrimary",
      bg: "backgroundQuaternary",
    },
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "textPrimary",
      _active: { bg: "backgroundTertiary", color: "textPrimary" },
      _focus: { bg: "backgroundTertiary", color: "textPrimary" },
      _hover: { bg: "backgroundTertiary", color: "textPrimary" },
    },
  },
};
export default Pagination;
