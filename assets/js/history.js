// ## ENV GCLOUD
// const API_DATABARANG = "https://stokbarang-backend2-cqpvntuoja-uc.a.run.app/api/databarang/";
// const API_KATEGORI = "https://stokbarang-backend2-cqpvntuoja-uc.a.run.app/api/kategori/";
// const API_HISTORI = "https://stokbarang-backend2-cqpvntuoja-uc.a.run.app/api/histori/";

// ## ENV LOKAL
const API_DATABARANG = env.API_DATABARANG;
const API_KATEGORI = env.API_KATEGORI;
const API_HISTORI = env.API_KATEGORI;

const bersih = () => {
    // reset select option to default
    document.getElementById('select_barang').selectedIndex = 0;
    document.getElementById('tbdodyselect').innerHTML = '';
  };

const getHistori = () => {
    axios.get(API_HISTORI)
        .then((response) => {
            // console.log('GET databarang', response.data.data);

            var tableBody = document.querySelector('#tablehistory tbody');
            let angkaMulai = 0;
            response.data.data.forEach((item) => {
              var newRow = document.createElement('tr');

              // COLUMN1
              var column1 = document.createElement('td');
              column1.textContent = angkaMulai += 1;
              newRow.appendChild(column1);

              var column2 = document.createElement('td');
              column2.textContent = item.nama;
              newRow.appendChild(column2);

              var column3 = document.createElement('td');
              column3.textContent = item.nama_barang;
              newRow.appendChild(column3);

              var column4 = document.createElement('td');
              column4.textContent = item.type;
              newRow.appendChild(column4);

              var column5 = document.createElement('td');
              column5.textContent = item.date;
              newRow.appendChild(column5);

              var column6 = document.createElement('td');
              column6.textContent = item.kuantitas;
              newRow.appendChild(column6);

              tableBody.appendChild(newRow);
            });
        })
        .catch((error) => console.log('ada error', error));
};

const postDataHistori = () => {
    const v_id_transaksi = document.getElementById('v_id_transaksi').value;
    const id_barang = document.getElementById('select_barang2').value;
    const v_type = document.getElementById('v_type').value;
    const v_date = null;
    const v_nama = document.getElementById('v_nama').value;
    const v_kuantitas = document.getElementById('v_kuantitas').value;
  
    axios.post(API_HISTORI, {
        v_id_transaksi: v_id_transaksi,
        id_barang: id_barang,
        v_type: v_type,
        v_date: v_date,
        v_nama: v_nama,
        v_kuantitas: v_kuantitas
    })
    .then((response) => {
      location.reload();
      // console.log(response);
    })
    .catch((error) => console.log('ada error', error));
  };

const selectBarang = () => {
    axios.get(API_DATABARANG)
    .then((response) => {
        const data = response.data;
        // console.log(data);
        const select = document.getElementById('select_barang');
        select.innerHTML = '';

        // create default selected disabled
        let optiondefault = document.createElement('option');
        optiondefault.text = '-- Pilih Barang --';
        optiondefault.value = '';
        optiondefault.selected = true;
        optiondefault.disabled = true;
        select.appendChild(optiondefault);

        // Foreach api response to select option
        data.forEach((item) => {
            const option = document.createElement('option');
            option.value = item.id_barang;
            option.text = item.nama_barang;
            select.appendChild(option);
        });
    })
    .catch((error) => console.log('ada error', error));
};

const selectBarang2 = () => {
    axios.get(API_DATABARANG)
    .then((response) => {
        const data = response.data;
        // console.log(data);
        const select = document.getElementById('select_barang2');
        select.innerHTML = '';

        // create default selected disabled
        let optiondefault = document.createElement('option');
        optiondefault.text = '-- Pilih Barang --';
        optiondefault.value = '';
        optiondefault.selected = true;
        optiondefault.disabled = true;
        select.appendChild(optiondefault);

        // Foreach api response to select option
        data.forEach((item) => {
            const option = document.createElement('option');
            option.value = item.id_barang;
            option.text = item.nama_barang;
            select.appendChild(option);
        });
    })
    .catch((error) => console.log('ada error', error));
};

const actionLihatHistori = () => {
    document.getElementById('tbdodyselect').innerHTML = '';
    let id_barang = document.getElementById('select_barang').value;
    // console.log(id_barang);
    axios.get(API_HISTORI+id_barang)
        .then((response) => {
            // console.log('GET databarang', response.data.data);

            var tableBody = document.querySelector('#tableselecthistory tbody');
            let angkaMulai = 0;
            response.data.data.forEach((item) => {
              var newRow = document.createElement('tr');

              // COLUMN1
              var column1 = document.createElement('td');
              column1.textContent = angkaMulai += 1;
              newRow.appendChild(column1);

              var column2 = document.createElement('td');
              column2.textContent = item.nama;
              newRow.appendChild(column2);

              var column3 = document.createElement('td');
              column3.textContent = item.nama_barang;
              newRow.appendChild(column3);

              var column4 = document.createElement('td');
              column4.textContent = item.type;
              newRow.appendChild(column4);

              var column5 = document.createElement('td');
              column5.textContent = item.date;
              newRow.appendChild(column5);

              var column6 = document.createElement('td');
              column6.textContent = item.kuantitas;
              newRow.appendChild(column6);

              tableBody.appendChild(newRow);
            });
        })
        .catch((error) => console.log('ada error', error));
};

selectBarang2();
selectBarang();
getHistori();