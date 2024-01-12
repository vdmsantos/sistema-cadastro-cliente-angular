/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "custom-bg": "#f0f0f0",
                custom: {
                    100: "rgb(239,12,90)",
                    200: "rgb(239,12,90)",
                    300: "rgb(239,12,90)",
                    400: "rgb(239,12,90)",
                    500: "rgb(239,12,90)",
                    600: "rgb(239,12,90)",
                    700: "rgb(239,12,90)",
                    800: "rgb(239,12,90)",
                    900: "rgb(239,12,90)",
                },
            },
        },
    },
    plugins: [],
};
