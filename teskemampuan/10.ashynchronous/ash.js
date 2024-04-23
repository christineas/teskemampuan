// Fungsi untuk melakukan request ke server dengan menggunakan async/await
async function fetchDataFromServer(keyword) {
    try {
        const response = await fetch(`https://api.example.com/search?keyword=${keyword}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Fungsi untuk menampilkan hasil pencarian
function displaySearchResults(results) {
    // Menampilkan hasil pencarian ke dalam elemen HTML, misalnya div dengan id "searchResults"
    const searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.innerHTML = ''; // Mengosongkan hasil sebelumnya

    if (results.length === 0) {
        searchResultsDiv.innerHTML = 'Tidak ditemukan hasil untuk kata kunci ini.';
        return;
    }

    const ul = document.createElement('ul');
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result.title; // Misalnya, menampilkan judul dari hasil pencarian
        ul.appendChild(li);
    });

    searchResultsDiv.appendChild(ul);
}

// Fungsi utama untuk melakukan pencarian dan menampilkan hasil secara asinkron
async function search(keyword) {
    try {
        const results = await fetchDataFromServer(keyword);
        displaySearchResults(results);
    } catch (error) {
        // Tangani error jika terjadi kesalahan dalam mengambil data dari server
        console.error('Error in search:', error);
    }
}

// Contoh penggunaan:
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click', () => {
    const keyword = searchInput.value.trim();
    if (keyword !== '') {
        search(keyword);
    }
});
