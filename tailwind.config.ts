/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./templates/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                color: {
                    1: "#6BDAD5",
                    2: "#65B2E8",
                    3: "#5894FF",
                    4: "#425CC7",
                    5: "#655DC6",
                    6: "#D579EF",
                },
                stroke: {
                    1: "#26242C",
                },
                n: {
                    1: "#FFFFFF",
                    2: "#CAC6DD",
                    3: "#ADA8C3",
                    4: "#757185",
                    5: "#3F3A52",
                    6: "#252134",
                    7: "#15131D",
                    8: "#0E0C15",
                },
            },
            fontFamily: {
                sans: ["var(--font-sora)", ...fontFamily.sans],
                code: "var(--font-code)",
                grotesk: "var(--font-grotesk)",
            },
            letterSpacing: {
                tagline: ".15em",
            },
            spacing: {
                0.25: "0.0625rem",
                7.5: "1.875rem",
                15: "3.75rem",
            },
            opacity: {
                15: ".15",
            },
            transitionDuration: {
                DEFAULT: "200ms",
            },
            transitionTimingFunction: {
                DEFAULT: "linear",
            },
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
            },
            borderWidth: {
                DEFAULT: "0.0625rem",
            },
            backgroundImage: {
                "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
                "conic-gradient":
                    "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
            },
        },
    },
    plugins: [],
};
export default config;
