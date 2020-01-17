module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700&display=swap');
          @import "@/scss/index.scss";
        `,
      },
    },
  },
};
