import React from 'react'
import { ThemeProvider } from "styled-components"

const theme = {
    colors: {
      white: "#FFFDF9",
      green: "#06B49A",
      blue: "#AFDBD2",
      onyx: "#36313D",
      activeNav: "#FFFDF9"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
  };
  
  const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  );
  
  export default Theme;

