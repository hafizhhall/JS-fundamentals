// nilai const tidak dapat diubah ubah sama sekali
// const x = 1;

// nilai yang dapat diubah ubah
// let y = 2;

// usia pada let akan ditimpa dengan usia yang baru saja dibuat
// let usia = 30;
// usia = 35;
// console.log("Hallo usia kamu adalah " + usia);
// alert(usia);

// let usia = prompt("berapa usia kamu?");
// alert("usia anda adalah " + usia);

let nama = "hafizh athallah"; //string
let usia = 40; //integer
let tinggiBadan = 170.5; //double floating
let beratBadan;
let pacar = null;
beratBadan = 80;
pacar = 2;

if (pacar == null) {
	pacar = "belum punya";
} else {
	pacar = "sudah punya";
}

// switch (pacar) {
// 	case 1:
// 		pacar = "punya 1 aja";
// 		break;
// 	case 2:
// 		pacar = "punya pacar 2, aku cukup playboy";
// 		break;
// 	default:
// 		pacar = "belum punya pacar";
// 		break;
// }

let saldoAwal = 10000;
let saldoTambahan = 90000;
const hutang = 12000;
const saldoAkhir = saldoAwal + saldoTambahan - hutang;

alert(
	`nama saya ${nama} usia saya itu ${usia} tinggi badan saya adalah ${tinggiBadan} berat badan ${beratBadan} dan pacar saya ${pacar}`
);

alert(
	`saldo awal saya sebesar Rp ${saldoAwal} & saldo tambahan yang akan saya miliki sebesar Rp ${saldoTambahan} jadi total saldo yang saya miliki adalah sebanyak Rp ${saldoAkhir}`
);
