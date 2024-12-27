import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
            keyframes: {
                ping: {
                    '0%': { transform: 'scale(1)', opacity: '0' }, // Start invisible
                    '25%': { opacity: '0.5' }, // Fade in completely
                    '100%': { transform: 'scale(1)', opacity: '0' }, // Fully faded out
                },
                ping2: {
                    '0%': { transform: 'scale(1)', opacity: '0' }, // Start invisible
                    '25%': { opacity: '0.5' }, // Fade in completely
                    '100%': { transform: 'scale(2)', opacity: '0' }, // Fully faded out
                },
            },
            animation: {
                'slow-ping': 'ping 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Duration adjusted to 4s
                'slow-ping-2': 'ping2 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Duration adjusted to 4s
            },
        },
	},

	plugins: [
		require('daisyui')
	],

	daisyui: {
		themes: ['light'],
	}
} satisfies Config;
