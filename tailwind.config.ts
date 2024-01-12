import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:`class`,
  theme: { 
    extend: {
      colors: {
        'bg-mygrey': '#242426',
        'bg-myyellow': '#fff67a',
        'bg-mydurkgrey': '#3e4043',
        'bg-myLightkgrey': '#e8e9ee',
        'bg-myLightGreen': '#a1ff9a',
        'bg-myBlueSky': '#baffff',
        'bg-myRedPink': '#f87272',
        'bg-myOrange': '#fbbd23',
      },
      width: {
        'w-900': '900px',
        'w-300': '300px',
        '90%':'90%',
        '91%':'91%',
        '92%':'92%',
        '93%':'93%',
        '94%':'94%',
        '95%':'95%',
        
        
      },
      height:{
        '90%':'90%',
        '95%':'95%',
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
        'Figtree': ["Figtree"],
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config
