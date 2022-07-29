import '../styles/globals.css';
import { NextUIProvider, createTheme } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  const retro = createTheme({
    type: 'light',
    theme: {
      colors: {
        primary: '#FFD34E',
        primaryLight: 'transparent',
        error: '#EE457E',

        primaryLight: '$yellow200',
        primaryLightHover: '$yellow300',
        primaryLightActive: '$yellow400',
        primaryLightContrast: '$yellow600',
        primaryBorder: '$yellow500', primaryBorderHover: '$yellow600',
        primarySolidHover: '$yellow700',
        primarySolidContrast: '$white',
        primaryShadow: '$yellow500',

      }
    }
  });


  return (
    <NextUIProvider theme={retro}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp
