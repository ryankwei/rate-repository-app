import { Platform } from "react-native";

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      grey: "#e1e4e8",
      dark: "#24292e",
      white: "#FFFFFF",
      error: "#d73a4a"
    },
    fontSizes: {
      body: 14,
      subheading: 16,
    },
    fonts: {
      main: Platform.select({
        android: 'System',
        ios: 'System',
        default: 'System'
      })
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
    formSpacing: {
      margin: 10,
      padding: 10,
    },
    cardStyle: { backgroundColor: '#FFFFFF', padding: 15, margin: 5 }
  };
  
  export default theme;