// tailwind.config.js
module.exports = {
    purge: [
        // Use *.tsx if using TypeScript
        './pages/**/*.js',
        './components/**/*.js'
    ],
    theme: {
        screens: {
            'xs': '360px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',

        },
        fontFamily: {
            san: ['Encode Sans Expanded'],
        },
        extend: {
            backgroundColor: {
                colorinput: '#F3F4F7',
                '#1472BE': '#1472BE',
                modal1: 'rgb(0,0,0)',
                modal2: 'rgba(0,0,0,0.5)',
            },
            colors: {
                cyan: '#9cdbff',
                color1472BE: '#1472BE'
            },
            spacing: {
                '96': '24rem',
                '128': '32rem',
            },
            width: {
                'ct21': '21rem',
                'ct23': '23rem',
                '40%': '50%',
                '90%': '90%',
                '7': "1.75em"

            },
            height: {
                '80vh': '80vh',
                '85vh': '85vh',
                '55vh': '55vh',
                '18': '4.5rem',
                '10n': '2.625rem',
            },
            top: {
                '1': '1rem',
                '2': '2rem',
                '3': '3rem',
                '4': '4rem',
            },
            maxWidth: {
                '13rem': '13rem',
                '38rem': '38rem'
            },

        },

        minWidth: {
            '0': '0',
            '115': '115px',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
        },
        maxHeight: {
            '0': '0',
            '115': '115px',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            '90%': '90%',
            'full': '100%',
            '30rem': '30rem',
            '80vh': '80vh',
            '85vh': '85vh',
        }

    }
}