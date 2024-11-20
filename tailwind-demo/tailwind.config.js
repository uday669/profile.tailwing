
module.exports = {
  content: ["*"],
  theme: {
    container: {
      center: true,
    },
   
          fontFamily:{
          'Poppins':"Poppins",
          'Roboto':"Roboto"

          },

          extend: {
            colors: {
              'regal-green': 'rgba(159, 214, 133, 1)',
              'light-black':'rgba(65, 65, 65, 1)',
              'bakgroun-light':'rgba(248, 248, 248, 1)',
              'color-text-light':'rgba(94, 91, 91, 1)',
              'light-bround':'rgba(159, 159, 159, 1)',
              'btn-bg-light':'rgba(74, 74, 74, 1)'
            },
            boxShadow:{
              'box-shod-img':'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
            }
          }
  },
  plugins: [],
}

