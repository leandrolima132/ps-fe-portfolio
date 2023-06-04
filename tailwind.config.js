/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        alt: 'var(--font-bai-jamjuree)',
        poppins: 'var(--font-poppins)',
      },
      colors: {},
      backgroundImage: {
        stripes:
          'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent)',
      },
      backgroundSize: {
        stripes: '100% 8px',
      },
      blur: {
        full: '194px',
      },
    },
    plugins: [],
  },
}
