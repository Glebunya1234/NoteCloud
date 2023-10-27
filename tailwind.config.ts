import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { 
    extend: {
      colors: {
        'bg-mygrey': '#242426',
      },
      width: {
        'w-1200': '900px',
        'w90%':'90%',
        
      },
      minWidth:{
        'wmin':'620px',
        'wm90%':'90%'
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config
