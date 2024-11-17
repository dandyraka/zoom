// Mengakses webcam
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then((stream) => {
        const webcamVideo = document.getElementById('webcam');
        webcamVideo.srcObject = stream;
        webcamVideo.play();
    })
    .catch((err) => {
        console.error('Error accessing webcam:', err);
        alert('Webcam tidak dapat diakses.');
    });

// Memutar video YouTube
const youtubeIframe = document.getElementById('youtube');
const videoUrl = new URL(window.location.href);
const videoId = videoUrl.searchParams.get('id');
youtubeIframe.src = `https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1&loop=1&rel=0&modestbranding=1&cc_load_policy=3`;

// Fitur tambahan: Mute/Unmute webcam
function muteUnmute() {
    const webcamVideo = document.getElementById('webcam');
    webcamVideo.muted = !webcamVideo.muted;
    alert(webcamVideo.muted ? 'Webcam dimute' : 'Webcam unmute');
}

// Fitur tambahan: Play/Stop webcam
function playStop() {
    const webcamVideo = document.getElementById('webcam');
    if (webcamVideo.paused) {
        webcamVideo.play();
        alert('Webcam dimainkan');
    } else {
        webcamVideo.pause();
        alert('Webcam dihentikan');
    }
}

// Fungsi untuk mengedit nama video
function editName(element) {
    const currentName = element.innerText;
    
    // Membuat input teks dengan nama saat ini
    const input = document.createElement('input');
    input.type = 'text';
    input.value = currentName;
    input.classList.add('video-name-input');
    input.addEventListener('blur', saveName); // Ketika kehilangan fokus
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            saveName.call(input); // Simpan nama ketika tekan Enter
        }
    });

    // Mengganti elemen nama dengan input
    element.innerHTML = '';
    element.appendChild(input);
    input.focus(); // Fokus pada input
}

// Fungsi untuk menyimpan nama baru
function saveName() {
    const newName = this.value.trim();
    if (newName) {
        this.parentNode.innerHTML = newName; // Mengganti input dengan teks baru
    } else {
        this.parentNode.innerHTML = 'Untitled'; // Jika tidak ada nama, tetapkan ke 'Untitled'
    }
}
