/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    marineBlue: "hsl(214, 95%, 19%)",
                    purplishBlue: "hsl(244, 100%, 65%)",
                    pastelBlue: "hsl(229, 99%, 83%)",
                    lightBlue: "hsl(210, 93%, 88%)",
                    strawberryRed: "hsl(356, 85%, 58%)",
                },
                neutral: {
                    coolGray: "hsl(231, 11%, 63%)",
                    lightGray: "hsl(229, 24%, 87%)",
                    magnolia: "hsl(217, 100%, 97%)",
                    alabaster: "hsl(231, 100%, 99%)",
                },
            },
            screens: {
                sm: "768px",
            },
            backgroundImage: theme => ({
                "desktop": "url('src/assets/bg-sidebar-desktop.svg')",
                "mobile": "url('./assets/bg-sidebar-mobile.svg')",
            }),
        },
    },
    plugins: [],
}