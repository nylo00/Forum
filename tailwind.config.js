module.exports = {
    purge: [],
    mode: "jit",
    purge: [
     "./public/*.html",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
       extend: {},
    },
    variants: {
       extend: {},
    },
    plugins: [
        require("daisyui")
    ],
}