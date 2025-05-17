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
        color: "primary.500",
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
    primary: {
      50: "#fff3e6",
      100: "#ffe0bf",
      200: "#ffcc99",
      300: "#ffb873",
      400: "#ffa34d",
      500: "#ff5400", // $primary
      600: "#ffa700", // $primary-hover
      700: "#cc4400",
      800: "#993300",
      900: "#662200",
    },
    primaryHover: "#ffa700", // $primary-hover
    textPrimary: "#fff", // $text-primary
    textSecondary: "#909090", // $text-secondary
    borderPrimary: "#3d3d3d", // $border-primary
    borderSecondary: "#474747", // $border-secondary
    backgroundPrimary: "#272727", // $background-primary
    backgroundSecondary: "#1d1d1d", // $background-secondary
    backgroundTertiary: "#101010", // $background-tertiary
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
