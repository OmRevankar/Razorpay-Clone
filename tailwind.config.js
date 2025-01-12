/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        inter:["Inter","serif"],
        mullish:["Mulish" , "sans-serif"],
      },
      colors:{
        background : "#02042B",
        hover : "#2B84EA",
        green: '#61CEA6',
        dark_hover:'#0B72E7',
        background_2 : '#181C2E',
        purple_hover_d:'#4430D5',
        purple_hover_l : '#3E55F3',
        company:'#F4F8FF',
      },
      keyframes:{
        translate_up:{
          '0%':{
            transform : 'translateY(0)'

          },

          '100%':{
            transform : 'translateY(-61%)'
          }
        },
      },
      animation:{
        'companies' : 'translate_up 30s linear 0s infinite normal',
      } 
    },
  },
  plugins: [],
}

