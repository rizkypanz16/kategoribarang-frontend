// ## ENV GCLOUD
// const API_DATABARANG = "https://stokbarang-backend2-cqpvntuoja-uc.a.run.app/api/databarang/";
// const API_KATEGORI = "https://stokbarang-backend2-cqpvntuoja-uc.a.run.app/api/kategori/";
// const API_HISTORI = "https://stokbarang-backend2-cqpvntuoja-uc.a.run.app/api/histori/";

// ## ENV LOKAL
const API_DATABARANG = env.API_DATABARANG;
const API_KATEGORI = env.API_KATEGORI;
const API_HISTORI = env.API_KATEGORI;

const bersih = () => {
  document.getElementById('id_kategori').readOnly = false;
  document.getElementById('id_kategori').value = "";
  document.getElementById('kategori').value = "";
  document.getElementById('deskripsi').value = "";
};

const deleteKategori = (id) => {
  axios.delete(API_KATEGORI+id)
  .then(response => {
    location.reload();
    // console.log(response);
  })
  .catch((error) => console.log('ada error', error));
};

const putKategori = (id) => {
  axios.get(API_KATEGORI+id)
      .then((response) => {
        document.getElementById('update_id_kategori').value = response.data.data[0].id_kategori;
        document.getElementById('update_id_kategori').readOnly = true;
        document.getElementById('id_kategori').value = response.data.data[0].id_kategori;
        document.getElementById('id_kategori').readOnly = true;
        document.getElementById('kategori').value = response.data.data[0].kategori;
        document.getElementById('deskripsi').value = response.data.data[0].deskripsi;
      })
      .catch((error) => console.log('ada error', error));
};

const actionPutKategori = () => {
    const v_id_kategori = document.getElementById('update_id_kategori').value;
    const v_kategori = document.getElementById('kategori').value;
    const v_deskripsi = document.getElementById('deskripsi').value;
    document.getElementById('id_kategori').readOnly = false;
    axios.put(API_KATEGORI+v_id_kategori, {
      kategori: v_kategori,
      deskripsi: v_deskripsi
    })
    .then(response => {
      location.reload();
      // console.log(response);
    })
    .catch((error) => console.log('ada error', error));
}

const getKategori = () => {
  axios.get(API_KATEGORI)
      .then((response) => {
          // console.log('GET databarang', response.data.data);

          var tableBody = document.querySelector('#tablekategori tbody');
          let angkaMulai = 0;
          response.data.data.forEach((item) => {
            var newRow = document.createElement('tr');

            // COLUMN1
            var column1 = document.createElement('td');
            column1.textContent = angkaMulai += 1;
            // column1.textContent = item.id_kategori;
            newRow.appendChild(column1);

            var column2 = document.createElement('td');
            column2.textContent = item.kategori;
            newRow.appendChild(column2);

            var column3 = document.createElement('td');
            column3.textContent = item.deskripsi;
            newRow.appendChild(column3);

            var column5 = document.createElement('td');
            column5.innerHTML = "<button class='btn btn-sm btn-warning' value='"+item.id_kategori+"' onClick='putKategori(this.value)'><i class='fa-solid fa-pen-to-square'></i></button>";
            newRow.appendChild(column5);
            
            var column4 = document.createElement('td');
            column4.innerHTML = "<button class='btn btn-sm btn-danger' value='"+item.id_kategori+"' onClick='deleteKategori(this.value)'><i class='fa-solid fa-trash'></i></button>";
            newRow.appendChild(column4);

            tableBody.appendChild(newRow);
          });
      })
      .catch((error) => console.log('ada error', error));
};

const postKategori = () => {
  const id_kategori = document.getElementById('id_kategori').value;
  const kategori = document.getElementById('kategori').value;
  const deskripsi = document.getElementById('deskripsi').value;

  axios.post(API_KATEGORI, {
    id_kategori: id_kategori,
    kategori: kategori,
    deskripsi: deskripsi
  })
  .then((response) => {
    location.reload();
  })
  .catch((error) => console.log('ada error', error));
};

getKategori();