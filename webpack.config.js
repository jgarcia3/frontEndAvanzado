const path = require("path");

module.exports = {
  //en src estarán los archivos fuente de la aplicación
  entry: "./src/entry.js",

  output: {
    filename: "bundle.js",
    //en dist estará el código listo para producción
    path: path.resolve(__dirname, "dist")
  }
};
