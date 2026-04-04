/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '../backend/portfolio/templates/**/*.html', // scan all HTML templates
        '../backend/**/*.py',             // optional: scan Python files for inline classes
    ],
    theme: {
        extend: {
            colors: {
                // optional custom colors
                'star-black': '#000000',
            },
            fontFamily: {
                sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            
        },
    },
    plugins: [],
}