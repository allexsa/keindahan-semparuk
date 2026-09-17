/* =========================
   LOGIN ADMIN
========================= */

// Username dan password admin
const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "semparuk123";


const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("loginMessage");


        if (
            username === ADMIN_USERNAME &&
            password === ADMIN_PASSWORD
        ) {

            localStorage.setItem(
                "adminLogin",
                "true"
            );

            message.style.color = "green";

            message.innerHTML =
                "Login berhasil! Mengarahkan...";

            setTimeout(function() {

                window.location.href =
                    "dashboard.html";

            }, 700);

        } else {

            message.style.color = "red";

            message.innerHTML =
                "Username atau password salah!";

        }

    });

}


/* =========================
   CEK LOGIN DASHBOARD
========================= */

if (
    window.location.pathname.includes("dashboard.html")
) {

    const sudahLogin =
        localStorage.getItem("adminLogin");

    if (sudahLogin !== "true") {

        window.location.href =
            "admin.html";

    }

}


/* =========================
   LOGOUT
========================= */

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function() {

            localStorage.removeItem(
                "adminLogin"
            );

            window.location.href =
                "admin.html";

        }
    );

}


/* =========================
   NAVIGASI SECTION
========================= */

function showSection(id) {

    const section =
        document.getElementById(id);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================
   TENTANG
========================= */

function simpanTentang() {

    const judul =
        document.getElementById(
            "judulTentang"
        ).value;

    const deskripsi =
        document.getElementById(
            "deskripsiTentang"
        ).value;


    localStorage.setItem(
        "judulTentang",
        judul
    );

    localStorage.setItem(
        "deskripsiTentang",
        deskripsi
    );


    alert(
        "Data Tentang Desa berhasil disimpan!"
    );

}


/* =========================
   WISATA
========================= */

function simpanWisata() {

    const nama =
        document.getElementById(
            "namaWisata"
        ).value.trim();

    const deskripsi =
        document.getElementById(
            "deskripsiWisata"
        ).value.trim();


    if (!nama || !deskripsi) {

        alert(
            "Nama dan deskripsi wisata harus diisi!"
        );

        return;

    }


    const wisata =
        JSON.parse(
            localStorage.getItem(
                "dataWisata"
            )
        ) || [];


    wisata.push({

        nama: nama,

        deskripsi: deskripsi

    });


    localStorage.setItem(
        "dataWisata",
        JSON.stringify(wisata)
    );


    document.getElementById(
        "namaWisata"
    ).value = "";

    document.getElementById(
        "deskripsiWisata"
    ).value = "";


    tampilkanWisata();

    alert(
        "Wisata berhasil ditambahkan!"
    );

}


function tampilkanWisata() {

    const container =
        document.getElementById(
            "daftarWisata"
        );

    if (!container) return;


    const wisata =
        JSON.parse(
            localStorage.getItem(
                "dataWisata"
            )
        ) || [];


    container.innerHTML = "";


    wisata.forEach(function(item, index) {

        const div =
            document.createElement("div");

        div.className =
            "wisata-item";


        div.innerHTML = `

            <h3>🌄 ${item.nama}</h3>

            <p>${item.deskripsi}</p>

            <button
                onclick="hapusWisata(${index})"
                style="
                    margin-top:10px;
                    padding:8px 12px;
                    border:0;
                    border-radius:6px;
                    background:#c0392b;
                    color:white;
                    cursor:pointer;
                "
            >
                Hapus
            </button>

        `;


        container.appendChild(div);

    });

}


function hapusWisata(index) {

    const wisata =
        JSON.parse(
            localStorage.getItem(
                "dataWisata"
            )
        ) || [];


    wisata.splice(index, 1);


    localStorage.setItem(
        "dataWisata",
        JSON.stringify(wisata)
    );


    tampilkanWisata();

}


/* =========================
   GALERI
========================= */

function simpanFoto() {

    const nama =
        document.getElementById(
            "namaFoto"
        ).value.trim();

    const url =
        document.getElementById(
            "urlFoto"
        ).value.trim();


    if (!nama || !url) {

        alert(
            "Nama foto dan URL harus diisi!"
        );

        return;

    }


    const galeri =
        JSON.parse(
            localStorage.getItem(
                "dataGaleri"
            )
        ) || [];


    galeri.push({

        nama: nama,

        url: url

    });


    localStorage.setItem(
        "dataGaleri",
        JSON.stringify(galeri)
    );


    document.getElementById(
        "namaFoto"
    ).value = "";

    document.getElementById(
        "urlFoto"
    ).value = "";


    tampilkanGaleri();


    alert(
        "Foto berhasil ditambahkan!"
    );

}


function tampilkanGaleri() {

    const container =
        document.getElementById(
            "daftarGaleri"
        );

    if (!container) return;


    const galeri =
        JSON.parse(
            localStorage.getItem(
                "dataGaleri"
            )
        ) || [];


    container.innerHTML = "";


    galeri.forEach(function(item, index) {

        const div =
            document.createElement("div");

        div.className =
            "gallery-item";


        div.innerHTML = `

            <img
                src="${item.url}"
                alt="${item.nama}"
            >

            <div>

                ${item.nama}

                <br>

                <button
                    onclick="hapusFoto(${index})"
                    style="
                        margin-top:8px;
                        padding:7px 10px;
                        border:0;
                        border-radius:6px;
                        background:#c0392b;
                        color:white;
                        cursor:pointer;
                    "
                >
                    Hapus
                </button>

            </div>

        `;


        container.appendChild(div);

    });

}


function hapusFoto(index) {

    const galeri =
        JSON.parse(
            localStorage.getItem(
                "dataGaleri"
            )
        ) || [];


    galeri.splice(index, 1);


    localStorage.setItem(
        "dataGaleri",
        JSON.stringify(galeri)
    );


    tampilkanGaleri();

}


/* =========================
   KONTAK
========================= */

function simpanKontak() {

    const alamat =
        document.getElementById(
            "alamat"
        ).value;

    const email =
        document.getElementById(
            "email"
        ).value;

    const telepon =
        document.getElementById(
            "telepon"
        ).value;


    localStorage.setItem(
        "alamat",
        alamat
    );

    localStorage.setItem(
        "email",
        email
    );

    localStorage.setItem(
        "telepon",
        telepon
    );


    alert(
        "Informasi kontak berhasil disimpan!"
    );

}


/* =========================
   LOAD DATA
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        tampilkanWisata();

        tampilkanGaleri();


        const judul =
            localStorage.getItem(
                "judulTentang"
            );

        const deskripsi =
            localStorage.getItem(
                "deskripsiTentang"
            );


        if (judul) {

            const input =
                document.getElementById(
                    "judulTentang"
                );

            if (input) {
                input.value = judul;
            }

        }


        if (deskripsi) {

            const textarea =
                document.getElementById(
                    "deskripsiTentang"
                );

            if (textarea) {
                textarea.value =
                    deskripsi;
            }

        }

    }
);
