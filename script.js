//Menambah item baru ke daftar
document.getElementById("addItem").addEventListener("click", function(){
  let newItem = document.createElement("li");
  newItem.textContent = `Item ${document.querySelectorAll('li').length +1}`;
  document.getElementById("list").appendChild(newItem);
})

// Menghapus item terakhir dari daftar
document.getElementById("removeItem").addEventListener("click", function(){
  let list = document.getElementById("list");
  let itemIndex = parseInt(document.getElementById("itemIndex").value, 10);

  // Memeriksa apakah inputan index valid
  if (!isNaN(itemIndex) && itemIndex > 0 && itemIndex <= list.children.length) {
    // Menghapus item berdasarkan index yang dimasukkan (index dimulai dari 1 untuk user)
    list.removeChild(list.children[itemIndex - 1]);
  } 
});


// Simpan nama pengguna ke localStrage
document.getElementById("saveName").addEventListener("click", function(){
  let username = document.getElementById("username").value;
  if(username){
    localStorage.setItem("name", username);
    displayGreeting();
  }
});

// Menghapus Local Storage
  document.getElementById("clear").addEventListener("click", function(){
    localStorage.removeItem("name");
    displayGreeting();
  });


// Tampilkan salam jika nama sudah disimpan
  function displayGreeting(){
    let storedName = localStorage.getItem("name");
    if(storedName){
      document.getElementById("greeting").textContent = `Selamat datang, ${storedName}!`;
    } else{
      document.getElementById("greeting").textContent = "Nama telah dihapus dari Local storage!";
    }
  }

// Tampilkan salam saat halaman dimuat ulang
window.onload = function(){
  displayGreeting();
}

// Menggunakan callback
function loadData(callback) {
  setTimeout(() => {
    let data = "Data berhasil dimuat!";
    callback(data);
  }, 2000)
}

document.getElementById("loadData").addEventListener("click", function(){
  loadData(function(result){
    document.getElementById("data").textContent = result;
  });
});

// Menggunakan promises
function loadPromiseData() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      let succes = true;
      if(succes){
        resolve("Data berhasil dimuat dengan Promise!");
      } else {
        reject("Gagal memuat data!");
      }
    }, 2000);
  });
}

async function loadDataPromise() {
  const result = await loadPromiseData();
  console.log(result);
}

// document.getElementById("loadData").addEventListener("click", function(){
//   loadDataPromise().then(result => {
//     document.getElementById("data").textContent = result;
//   }).catch(error => {
//     document.getElementById("data").textContent = error;
//   });
// });