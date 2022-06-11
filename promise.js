const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme


const processData = (data, emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi == undefined) {
      reject("Data not found")
    } else {
      let result = 0
      for (let index = 0; index < data.length; index++) {
        if (emosi == data[index]['hasil']) {
          result++;
        }
      }
      resolve(result)
    }
  })
}

const promiseOutput = async (emosi) => {
  const totalIXX = await promiseTheaterIXX()
    .then((hasilSetelahMenonton) => processData(hasilSetelahMenonton, emosi))
  const totalVGC = await promiseTheaterVGC()
    .then((hasilSetelahMenonton) => processData(hasilSetelahMenonton, emosi))
  return totalIXX + totalVGC
};


module.exports = {
  promiseOutput,
};
