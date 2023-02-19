const bersih = () => {
  document.getElementById('id_barang').readOnly = false;
  document.getElementById('id_barang').value = "";
  document.getElementById('nama_barang').value = "";
  document.getElementById('jumlah_barang').value = "";
  document.getElementById('harga_barang').value = "";
  document.getElementById('deskripsi').value = "";
};

const deleteDatabarang = (id) => {
  axios.delete("https://stokbarang-backend-cqpvntuoja-uc.a.run.app/api/databarang/"+id+"")
  .then(response => {
    location.reload();
    // console.log(response);
  })
  .catch((error) => console.log('ada error', error));
};

const putDatabarang = (id) => {
  axios.get("https://stokbarang-backend-cqpvntuoja-uc.a.run.app/api/databarang/"+id+"")
      .then((response) => {
        document.getElementById('update_id_barang').value = response.data[0].update_id_barang;
        document.getElementById('update_id_barang').readOnly = true;
        document.getElementById('id_barang').value = response.data[0].id_barang;
        document.getElementById('id_barang').readOnly = true;
        document.getElementById('nama_barang').value = response.data[0].nama_barang;
        document.getElementById('jumlah_barang').value = response.data[0].jumlah_barang;
        document.getElementById('harga_barang').value = response.data[0].harga_barang;
        document.getElementById('deskripsi').value = response.data[0].deskripsi;
      })
      .catch((error) => console.log('ada error', error));
};

const actionPutDatabarang = () => {
  const id_barang = document.getElementById('id_barang').value;
  const nama_barang = document.getElementById('nama_barang').value;
  const jumlah_barang = document.getElementById('jumlah_barang').value;
  const harga_barang = document.getElementById('harga_barang').value;
  const deskripsi = document.getElementById('deskripsi').value;
  document.getElementById('id_barang').readOnly = false;
  axios.put("https://stokbarang-backend-cqpvntuoja-uc.a.run.app/api/databarang/"+id_barang+"", {
    id_barang: id_barang,
    id_kategori: "testing",
    nama_barang: nama_barang,
    foto_barang: "null.jpg",
    deskripsi: deskripsi,
    jumlah_barang: jumlah_barang,
    harga_barang: harga_barang,
    created_at: null,
    updated_at: null
  })
  .then(response => {
    location.reload();
    // console.log(response);
  })
  .catch((error) => console.log('ada error', error));
}

const getKategori = () => {
    axios.get("https://stokbarang-backend-cqpvntuoja-uc.a.run.app/api/databarang")
        .then((response) => {
            // console.log('GET databarang', response.data.data);

            var tableBody = document.querySelector('#tabledatabarang tbody');
            let angkaMulai = 0;
            response.data.forEach((item) => {
              var newRow = document.createElement('tr');

              // COLUMN1
              var column1 = document.createElement('td');
              column1.textContent = angkaMulai += 1;
              newRow.appendChild(column1);

              var column2 = document.createElement('td');
              column2.textContent = item.nama_barang;
              newRow.appendChild(column2);

              var column3 = document.createElement('td');
              column3.textContent = item.jumlah_barang;
              newRow.appendChild(column3);

              var column4 = document.createElement('td');
              column4.textContent = item.harga_barang;
              newRow.appendChild(column4);

              var column5 = document.createElement('td');
              column5.innerHTML = "<button class='btn btn-sm btn-warning' value='"+item.id_barang+"' onClick='putDatabarang(this.value)'><i class='fa-solid fa-pen-to-square'></i></button>";
              newRow.appendChild(column5);

              var column6 = document.createElement('td');
              column6.innerHTML = "<button class='btn btn-sm btn-danger' value='"+item.id_barang+"' onClick='deleteDatabarang(this.value)'><i class='fa-solid fa-trash'></i></button>";
              newRow.appendChild(column6);

              tableBody.appendChild(newRow);
            });
        })
        .catch((error) => console.log('ada error', error));
};

const postDatabarang = () => {
  const id_barang = document.getElementById('id_barang').value;
  const nama_barang = document.getElementById('nama_barang').value;
  const jumlah_barang = document.getElementById('jumlah_barang').value;
  const harga_barang = document.getElementById('harga_barang').value;
  const deskripsi = document.getElementById('deskripsi').value;

  axios.post("https://stokbarang-backend-cqpvntuoja-uc.a.run.app/api/databarang", {
    id_barang: id_barang,
    id_kategori: "testing",
    nama_barang: nama_barang,
    deskripsi: deskripsi,
    jumlah_barang: jumlah_barang,
    foto_barang: "null.jpg",
    harga_barang: harga_barang,
    created_at: null,
    updated_at: null
  })
  .then((response) => {
    location.reload();
    // console.log(response);
  })
  .catch((error) => console.log('ada error', error));
};

getKategori();