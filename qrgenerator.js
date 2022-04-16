const QR = require("qrcode");
const Excel = require("xlsx");

function createQR(filename, data) {
  try {
    QR.toFile("images/" + filename + ".png", data, {
      width: 500,
      color: {
        dark: "#14b4e6",
        light: "#fff",
      },
    });
  } catch (e) {
    console.log("C'è un errore!");
  }
}

const ws = Excel.readFile("urls.xlsx").Sheets["Foglio1"];
const data = Excel.utils.sheet_to_json(ws);

console.log(data);

data.forEach(function (r) {
  createQR(r.FILENAME, r.URL);
});
