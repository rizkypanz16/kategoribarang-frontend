//  ## ENV LOKAL
const API_DATABARANG = env.API_DATABARANG;
const API_KATEGORI = env.API_KATEGORI;
const API_HISTORI = env.API_HISTORI;

function tampilHitung(){
  axios.get(API_DATABARANG+"count")
  .then((response) => {
      document.getElementById('count_databarang').innerHTML = response.data.data[0].count;
  })
  .catch((error) => console.log('ada error : ', error.code, error.config.url
));

axios.get(API_KATEGORI+"count")
  .then((response) => {
      document.getElementById('count_kategori').innerHTML = response.data.data[0].count;
  })
  .catch((error) => console.log('ada error : ', error.code, error.config.url
));

axios.get(API_HISTORI+"count")
  .then((response) => {
      document.getElementById('count_histori').innerHTML = response.data.data[0].count;
  })
  .catch((error) => console.log('ada error : ', error.code, error.config.url
));
}


tampilHitung();