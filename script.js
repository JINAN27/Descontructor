//contoh destructur object
const MyCar = {
  Merk: "Mclaren",
  Color: "Merah",
  Tahun: "2024",
    Pemilik: {
      nama: "Jinan",
      negara: "Indonesia"
    }
};

const MerkCar= MyCar.Merk;
const ColorCar= MyCar.Color;
const namaPemilik= MyCar.Pemilik.nama;
console.log(MerkCar, ColorCar, namaPemilik);

//descontructuring

const {
  Merk,
  Color,
  Pemilik: {nama},
  ...lainnya
} = MyCar;

console.log(Merk, Color,nama, lainnya);

//contoh destructur parameter fungsi

function motor([yamaha, suzuki]) {
  const total = yamaha + suzuki;
  const pesan = `Hasil dari penjumlahan adalah ${total}`;
  console.log(pesan);
}
motor([10, 20]);

function TampilkanMyCar ({Merk, Color, Tahun, Pemilik:{nama}}) {
  const pesan = `Mobil saya ${Merk} warna ${Color} dengan pembuatan ${Tahun} dimiliki oleh ${nama}`
  console.log(pesan);
}
TampilkanMyCar(MyCar);
