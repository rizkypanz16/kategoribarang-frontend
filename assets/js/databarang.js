// ## ENV GCLOUD
const API_DATABARANG = "https://stokbarang-backend2-cqpvntuoja-uc.a.run.app/api/databarang/";
const API_KATEGORI = "https://stokbarang-backend2-cqpvntuoja-uc.a.run.app/api/kategori/";
const API_HISTORI = "https://stokbarang-backend2-cqpvntuoja-uc.a.run.app/api/histori/";

// ## ENV LOKAL
// const API_DATABARANG = "http://localhost:3001/api/databarang/";
// const API_KATEGORI = "http://localhost:3001/api/kategori/";

const bersih = () => {
  document.getElementById('id_barang').readOnly = false;
  document.getElementById('id_barang').value = "";
  document.getElementById('update_id_kategori').value = "";
  document.getElementById('nama_barang').value = "";
  document.getElementById('jumlah_barang').value = "";
  document.getElementById('harga_barang').value = "";
  document.getElementById('deskripsi').value = "";
  // reset select option to default
  document.getElementById('id_kategori').selectedIndex = 0;
  document.getElementById('id_kategori').readOnly = false;
  document.getElementById('id_kategori').disabled = false;
};

const deleteDatabarang = (id) => {
  axios.delete(API_DATABARANG+id)
  .then(response => {
    location.reload();
    // console.log(response);
  })
  .catch((error) => console.log('ada error', error));
};

const putDatabarang = (id) => {
  axios.get(API_DATABARANG+id)
      .then((response) => {
        document.getElementById('update_id_barang').value = response.data[0].update_id_barang;
        document.getElementById('update_id_barang').readOnly = true;
        document.getElementById('update_id_kategori').value = response.data[0].id_kategori;
        document.getElementById('id_kategori').readOnly = true;
        document.getElementById('id_kategori').disabled = true;
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
  const id_kategori = document.getElementById('update_id_kategori').value;
  const nama_barang = document.getElementById('nama_barang').value;
  const jumlah_barang = document.getElementById('jumlah_barang').value;
  const harga_barang = document.getElementById('harga_barang').value;
  const deskripsi = document.getElementById('deskripsi').value;
  document.getElementById('id_barang').readOnly = false;
  axios.put(API_DATABARANG+id_barang, {
    id_barang: id_barang,
    id_kategori: id_kategori,
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

const selectKategori = () => {
  axios.get(API_KATEGORI)
      .then((response) => {
          const data = response.data.data;
          // console.log(data);
          const select = document.getElementById('id_kategori');
          select.innerHTML = '';

          // create default selected disabled
          let optiondefault = document.createElement('option');
          optiondefault.text = '-- Pilih Kategori --';
          optiondefault.value = '';
          optiondefault.selected = true;
          optiondefault.disabled = true;
          select.appendChild(optiondefault);

          // Foreach api response to select option
          data.forEach((item) => {
            const option = document.createElement('option');
            option.value = item.id_kategori;
            option.text = item.kategori;
            select.appendChild(option);
          });
      })
      .catch((error) => console.log('ada error', error));
};

const getKategori = () => {
    axios.get(API_DATABARANG)
        .then((response) => {
            // console.log('GET databarang', response.data);

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

              var column7 = document.createElement('td');
              column7.textContent = item.kategori;
              newRow.appendChild(column7);

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
  const id_kategori = document.getElementById('id_kategori').value;
  const nama_barang = document.getElementById('nama_barang').value;
  const jumlah_barang = document.getElementById('jumlah_barang').value;
  const harga_barang = document.getElementById('harga_barang').value;
  const deskripsi = document.getElementById('deskripsi').value;

  axios.post(API_DATABARANG, {
    id_barang: id_barang,
    id_kategori: id_kategori,
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

selectKategori();
getKategori();