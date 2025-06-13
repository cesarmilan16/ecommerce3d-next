import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import { m } from "framer-motion";

const Tabs = {
  parts: parts.keys,
  variants: {
    line: {
      tab: {
        fontWeight: "bold",
        color: "textSecondary",
        borderBottom: "3px solid",
        borderColor: "transparent",
        borderRadius: 0,
        
        _selected: {
          color: "primaryHover",
          borderColor: "primaryHover",
          bg: "transparent",
        },
        _hover: {
          color: "primaryHover",
          borderColor: "primaryHover",
          bg: "transparent",
        },
        _focus: {
          boxShadow: "none",
        },
      },
      tablist: {
        borderBottom: "2px solid",
        borderColor: "borderSecondary", // el mismo color que el fondo
        mb: 4,
      },
      tabpanel: {
        p: 0,
      },
    },
  },
};

export default Tabs;
