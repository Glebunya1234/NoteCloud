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
        'bg-myyellow': '#fff67a',
        'bg-mydurkgrey': '#3e4043',
        'bg-RedPink': '#f87272',
        'bg-myOrange': '#fbbd23',
      },
      width: {
        'w-900': '900px',
        'w-300': '300px',
        'w90%':'90%',
        
        
      },
      height:{
        'h90%':'90%',
      },
      minWidth:{
        'wmin':'700px',
        'wm90%':'90%',
        'blockContent72rem':'18rem'
      },
      fontFamily: {
        'Orbitron': ["Orbitron"],
        'Ubuntu': ["Ubuntu"],
        'Raleway': ["Raleway"],
        'Poppins': ["Poppins"],
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
