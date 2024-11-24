// Path
const pathbgMusic = '../assets/static/';

// Playlist
const playlistbgMusic = [
    'Genshin Impact Main Theme.mp3',
    'Lets Go Crimson Knight [Genshin Impact].mp3',
    'Any Last Word [Genshin Impact].mp3',
    'Rage Beneath the Mountains [Genshin Impact].mp3',
    'Star Rail Main Theme.mp3',
    'Take the Journey [Honkai Star Rail].mp3',
    'White Night [Honkai Star Rail].mp3',
    'Sway to My Beat in Cosmos [Honkai Star Rail].mp3',
    'If I Can Stop One Heart From Breaking [Honkai Star Rail].mp3',
    'ブルーアーカイブ Blue Archive Main Theme Constant Moderato.mp3',
    'ブルーアーカイブ Unwelcome School [Blue Archive].mp3',
    'ブルーアーカイブ Usagi Flap [Blue Archive].mp3',
    'SugarCrash 2 Notice Me Senpai [Bemax - ビマックス].mp3',
    'KING [Kiichan Ch. 狐井アキラ].mp3',
    'This is What Falling in Love Feels Like Multilingual [Kiichan Ch. 狐井アキラ].mp3',
    'Super Idol Multilingual [Kiichan Ch. 狐井アキラ].mp3',
];

// Mengakses elemen HTML
const currentSongElement = document.getElementById('current-song');
let audio = new Audio();  // Objek audio global untuk pemutaran

// Fungsi untuk memainkan lagu
function playSong(index) {
    // Fetch judul lagu dari backend
    fetch(`/current-song?index=${index}`)
        .then(response => response.json())
        .then(data => {
            // Menampilkan judul lagu yang sedang diputar
            currentSongElement.textContent = data.title;
            
            // Set source lagu dan mainkan
            audio.src = pathbgMusic + playlistbgMusic[index];
            audio.play();
        })
        .catch(error => console.error('Error:', error));
}