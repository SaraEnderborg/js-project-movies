export const theme = {
  colors: {
    background: {
      primary: "#141414",
      secondary: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#e5e5e5",
      muted: "#b3b3b3",
      label: "#a0a0a0",
    },
    accent: {
      yellow: "#f6c700",
      yellowText: "#000000",
    },
    hover: "#e50914",
  },

  fontSize: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },

  fontWeight: {
    semibold: 600,
    bold: 700,
  },

  spacing: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
    xxxl: "4rem",
  },

  borderRadius: {
    md: "0.5rem",
    lg: "1rem",
  },

  shadows: {
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  },

  transitions: {
    normal: "300ms ease-in-out",
  },

  breakpoints: {
    mobile: "320px",
    tablet: "768px",
    wide: "1280px",
  },

  api: {
    key: "078d26b045391fd7de2a999106ddf939",
    baseUrl: "https://api.themoviedb.org/3",
    imageBaseUrl: "https://image.tmdb.org/t/p",
    imageSizes: {
      poster: {
        mobile: "/w342",
        tablet: "/w500",
        desktop: "/w780",
      },
      backdrop: {
        mobile: "/w780",
        desktop: "/w1280",
      },
    },
  },
};
