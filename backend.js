// luas persegi
function lPersegi() {
    let sisiPersegi = document.getElementById("slPersegi").value;
    const luasPersegi = sisiPersegi * sisiPersegi;
    document.getElementById("lhPersegi").innerHTML = `Luas Persegi Adalah ${luasPersegi} cm`;
}

// keliling persegi
function kPersegi() {
    let sisiPersegi = document.getElementById("skPersegi").value;
    const kelilingPersegi = 4 * sisiPersegi;
    document.getElementById("khPersegi").innerHTML = `Keliling Persegi Adalah ${kelilingPersegi} cm`;
}

// luas lingkaran
function lLingkaran() {
    let jari = document.getElementById("rlLingkaran").value;
    const phi = 3.14
    const luasLingkaran = phi * jari * jari;
    // const luasLingkarans = Math.round(luasLingkaran);
    document.getElementById("lhLingkaran").innerHTML = `Luas Lingkaran Adalah ${luasLingkaran} cm`;
}

// keliling Lingkaran
function kLingkaran() {
    let jari = document.getElementById("rkLingkaran").value;
    const phi = 3.14
    const kelilingLingkaran = 2 * phi * jari;
    // const kelilingLingkarans = Math.round(kelilingLingkaran) ;
    document.getElementById("khLingkaran").innerHTML = `Keliling Lingkaran Adalah ${kelilingLingkaran} cm`;
}

// luas segitiga
function lSegitiga(){
    let alas = document.getElementById("lAlas").value;
    let tinggi = document.getElementById("lTinggi").value;
    const luasSegitiga = 1/2 * alas * tinggi;
    document.getElementById("lhSegitiga").innerHTML = `Luas Segitiga Adalah ${luasSegitiga} cm`;
}

// keliling segitiga
function kSegitiga(){
    let sisi1 = document.getElementById("skSegitiga1").value;
    let sisi2 = document.getElementById("skSegitiga2").value;
    let sisi3 = document.getElementById("skSegitiga3").value;
    const kelilingSegitiga = sisi1 * sisi2 * sisi3;
    document.getElementById("khSegitiga").innerHTML = `Keliling Segitiga Adalah ${kelilingSegitiga} cm`;
}

// luas jajar genjang
function lJajar(){
    let alas = document.getElementById("laJajar").value;
    let tinggi = document.getElementById("ltJajar").value;
    const luasJajar = alas * tinggi;
    document.getElementById("lhJajar").innerHTML = `Luas Jajar Genjang Adalah ${luasJajar} cm`;
}

// keliling jajar genjang
function kJajar(){
    let saJajar = document.getElementById("saJajar").value;
    let ssJajar = document.getElementById("ssJajar").value;
    
    let saJajars = parseInt(saJajar);
    let ssJajars = parseInt(ssJajar); 
    const kelilingJajar = 2 * (saJajars + ssJajars);
    document.getElementById("khJajar").innerHTML = `Luas Jajar Genjang Adalah ${kelilingJajar} cm`;
}

// luas persegi panjang
function lPanjang(){
    let panjang = document.getElementById("plPanjang").value;
    let lebar = document.getElementById("pkPanjangr").value;
    const luas = panjang * lebar;
    document.getElementById("lhPanjang").innerHTML = `Luas Persegi Panjang Adalah ${luas} cm`;
}

// keliling persegi panjang
function kPanjang(){
    let panjang = document.getElementById("pkPanjang").value;
    let lebar = document.getElementById("lpPanjang").value;
    const keliling = 2 * (panjang * lebar);
    document.getElementById("khPanjang").innerHTML = `Keliling Persegi Panjang Adalah ${keliling} cm`;
}
