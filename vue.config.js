module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/index.scss";
          @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap');
        `,
      },
    },
  },
};
