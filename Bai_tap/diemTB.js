function tinhDiem() {
let diemLy =+document.getElementById("diemLy").value;
let diemHoa =+document.getElementById("diemHoa").value;
let diemSinh =+document.getElementById("diemSinh").value;
let tongDiem = diemLy + diemHoa + diemSinh;
let diemTB = (diemLy + diemHoa + diemSinh) / 3;
document.getElementById("tong").innerText = tongDiem;
document.getElementById("trungBinh").innerText = diemTB;
}
