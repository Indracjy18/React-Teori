const myName = ["dita", "indra", "jiran", "komeng"];

const [love, live, ...everything] = myName;

console.log("one", love, "two", live, "cat", everything);

const pacarKu = {
  name: "Dita",
  umur: "25tahun",
  hobby: "Belajar Akutansi",
};

//breakdown
const { hobby, umur } = pacarKu;
console.log(hobby, umur);

const updatePacar = {
  name: "Pradita Putri Damayanti",
  makanFav: "Seblak",
};

const pacar = { ...pacarKu, ...updatePacar };
console.log(pacar);
