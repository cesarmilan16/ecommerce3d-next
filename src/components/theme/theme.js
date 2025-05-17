import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import Button from "./buttonTheme";
import Tabs from "./tabsTheme";
import Modal from "./modalTheme";
import Select from "./selectTheme";
import Pagination from "./paginationTheme";
import Input from "./inputTheme";
import FormLabel from "./formLabelTheme";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("backgroundPrimary", "backgroundSecondary")(props),
      color: mode("textPrimary", "textSecondary")(props),
    },
    a: {
      color: mode("textPrimary", "textSecondary")(props),
      _hover: {
        color: "primaryHover",
      },
    },
    "input:-webkit-autofill": {
      boxShadow: "0 0 0 1000px #1d1d1d inset",
      WebkitTextFillColor: "#fff",
      transition: "background-color 9999s ease-in-out 0s",
    },
  }),
};

export const theme = extendTheme({
  colors: {
    primary: "#C53E4B",
    primaryHover: "#a73740", // $primary-hover
    gold: "#E3B756",
    goldHover: "#c9a042",
    textPrimary: "#fff", // $text-primary
    textSecondary: "#B8AEB2", // $text-secondary
    borderPrimary: "#3A2A2F", // $border-primary
    borderSecondary: "#4A3A3F", // $border-secondary
    backgroundPrimary: "#24191E ", // $background-primary
    backgroundSecondary: "#1C1517", // $background-secondary
    backgroundTertiary: "#1A1315", // $background-tertiary
    backgroundQuaternary: "#3d3d3d", // $background-quaternary
    backgroundQuaternaryBlur: "#3d3d3d10", // $background-quaternary__blur
    success: "#69af00", // $success
    danger: "#ff0a4e", // $danger
  },
  components: {
    Button,
    Tabs,
    Modal,
    Select,
    Pagination,
    Input,
    FormLabel,
  },
  styles,
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});
