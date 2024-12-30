// src/config.js

// Importing images correctly within src/
import logoSiteA from "./images/logo-siteA.png";
import logoSiteB from "./images/logo-siteB.png";
import logoDefault from "./images/logo-default.png";

export const API_BASE_URL: string = 'http://localhost:5002/api/';
export const CAPTCHA_SITEKEY: string = '6LfbfYkqAAAAACzT786U-o4ypQDPeUP3OPXI2INP';
export const COMMENT_THRESHOLD: number = 3;
const config = {
  siteA: {
    siteName: "BBC",
    logo: {
      src: logoSiteA,
      alt: "BBC Logo",
    },
    colors: {
      primary: "#FF0000",
      secondary: "#00FF00",
    },
  },
  siteB: {
    siteName: "Vice",
    logo: {
      src: logoSiteB,
      alt: "Vice Logo",
    },
    colors: {
      primary: "#0000FF",
      secondary: "#FF00FF",
    },
  },
  default: {
    siteName: "CNN",
    logo: {
      src: logoDefault,
      alt: "CNN Logo",
    },
    colors: {
      primary: "#CCCCCC",
      secondary: "#333333",
    },
  },
};

// Determine which config to export based on environment variable
const currentConfig = process.env.REACT_APP_CONFIG
  ? config[process.env.REACT_APP_CONFIG]
  : config.default;

export default currentConfig;
