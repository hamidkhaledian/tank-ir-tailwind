/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './{html,js}',
        './**/*.{html,js}'

    ],
    theme: {
        extend: {
            fontSize: {
                'font48': "48px",
                'inherit': "inherit",
                'font14': "14px",
                'font18': "18px",
                "font875": ".875rem"
            },
            colors: {
                'h-666': "#666666",
                'h-fff': "#ffffff",
                'h-313131': "#313131",
                'e651100': "#e65110",
                'h-111' : "#111111",
                'h-888': "#888888",
                'h-045':"#0048A5",
                'h-000':"#000000",
                'h-6f6':"#6f6f6f",
                'h525':"#525252",


            },
            fontFamily:{
                'sans': "sans-serif",
                'inherit':"inherit",

            },
        },
    },
    plugins: [],
}




