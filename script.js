// Anwar Cable TV - Main JavaScript File

// Global Variables
let currentTime;
let prayerTimes = {
    fajr: '04:30',
    dhuhr: '12:15',
    asr: '15:45',
    maghrib: '18:20',
    isha: '19:45'
};

let sportsScores = [
    { sport: 'Football', score: 'Team A 2 - 1 Team B', time: '75\'' },
    { sport: 'Cricket', score: 'Bangladesh 245/6 (45.2)', status: 'Live' }
];

let newsItems = [
    'Welcome to Anwar Cable TV - Your trusted source for entertainment and information!',
    'Breaking: New movies added to our premium collection this week!',
    'Live sports coverage available 24/7 on Anwar Cable TV',
    'Special prayer time notifications for our Muslim viewers',
    'Call 01712082174 for subscription and support'
];

let nextMovies = [
    'The Avengers: Endgame',
    'Spider-Man: No Way Home',
    'Black Panther: Wakanda Forever',
    'Doctor Strange in the Multiverse of Madness',
    'Thor: Love and Thunder'
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    updateTime();
    updatePrayerTimes();
    updateSportsScores();
    startNewsTicker();
    updateNextMovie();
    initializeServiceButtons();
    startTimeUpdates();
    initializeVideoPlayer();
    addAnimations();
}

// Time and Date Functions
function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('currentTime');
    const dateElement = document.getElementById('currentDate');
    
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
    
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    currentTime = now;
}

function startTimeUpdates() {
    setInterval(updateTime, 1000);
}

// Prayer Times Functions
function updatePrayerTimes() {
    const prayerElements = {
        'fajr-time': prayerTimes.fajr,
        'dhuhr-time': prayerTimes.dhuhr,
        'asr-time': prayerTimes.asr,
        'maghrib-time': prayerTimes.maghrib,
        'isha-time': prayerTimes.isha
    };
    
    Object.keys(prayerElements).forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = prayerElements[elementId];
        }
    });
    
    // Highlight current prayer time
    highlightCurrentPrayer();
}

function highlightCurrentPrayer() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeMinutes = currentHour * 60 + currentMinute;
    
    const prayerTimesMinutes = {
        'fajr': 4 * 60 + 30,
        'dhuhr': 12 * 60 + 15,
        'asr': 15 * 60 + 45,
        'maghrib': 18 * 60 + 20,
        'isha': 19 * 60 + 45
    };
    
    // Reset all highlights
    document.querySelectorAll('.prayer-item').forEach(item => {
        item.style.background = 'transparent';
    });
    
    // Find and highlight current prayer
    let currentPrayer = null;
    for (let prayer in prayerTimesMinutes) {
        if (currentTimeMinutes >= prayerTimesMinutes[prayer] && 
            currentTimeMinutes < prayerTimesMinutes[prayer] + 30) {
            currentPrayer = prayer;
            break;
        }
    }
    
    if (currentPrayer) {
        const prayerElement = document.querySelector(`[id="${currentPrayer}-time"]`).parentElement;
        prayerElement.style.background = 'rgba(255, 215, 0, 0.3)';
        prayerElement.style.borderRadius = '5px';
    }
}

// Sports Scores Functions
function updateSportsScores() {
    const sportsContainer = document.querySelector('.sports-scores');
    if (!sportsContainer) return;
    
    sportsContainer.innerHTML = '';
    
    sportsScores.forEach(score => {
        const scoreElement = document.createElement('div');
        scoreElement.className = 'score-item';
        scoreElement.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="sport-type">${score.sport}</span>
                <span class="score">${score.score}</span>
            </div>
            ${score.time ? `<small style="color: #ffd700;">${score.time}</small>` : ''}
            ${score.status ? `<small style="color: #ff6b6b;">${score.status}</small>` : ''}
        `;
        sportsContainer.appendChild(scoreElement);
    });
}

// News Ticker Functions
function startNewsTicker() {
    const newsContent = document.getElementById('newsContent');
    if (!newsContent) return;
    
    let currentNewsIndex = 0;
    
    function updateNews() {
        newsContent.innerHTML = `<span>${newsItems[currentNewsIndex]}</span>`;
        currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
    }
    
    updateNews();
    setInterval(updateNews, 5000);
}

// Next Movie Functions
function updateNextMovie() {
    const nextMovieElement = document.getElementById('nextMovie');
    if (!nextMovieElement) return;
    
    const randomMovie = nextMovies[Math.floor(Math.random() * nextMovies.length)];
    nextMovieElement.textContent = randomMovie;
    
    // Update every 30 seconds
    setInterval(() => {
        const randomMovie = nextMovies[Math.floor(Math.random() * nextMovies.length)];
        nextMovieElement.textContent = randomMovie;
    }, 30000);
}

// Service Buttons Functions
function initializeServiceButtons() {
    const serviceButtons = document.querySelectorAll('.service-btn');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            handleServiceClick(service);
        });
    });
}

function handleServiceClick(service) {
    // Add visual feedback
    const button = document.querySelector(`[data-service="${service}"]`);
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
    
    // Handle different services
    switch(service) {
        case 'live':
            showNotification('Live Telecast', 'Switching to live broadcast...');
            break;
        case 'movies':
            showNotification('Movies', 'Opening movie library...');
            break;
        case 'songs':
            showNotification('Songs', 'Loading music collection...');
            break;
        case 'news':
            showNotification('News', 'Fetching latest news...');
            break;
        case 'sports':
            showNotification('Sports', 'Loading sports content...');
            break;
        case 'prayer':
            showNotification('Prayer Times', 'Displaying prayer schedule...');
            break;
        case 'schedule':
            showNotification('Schedule', 'Opening program schedule...');
            break;
        case 'settings':
            showNotification('Settings', 'Opening system settings...');
            break;
    }
}

// Video Player Functions
function initializeVideoPlayer() {
    const video = document.getElementById('mainVideo');
    if (!video) return;
    
    // Add sample video sources (you can replace with actual video files)
    const videoSources = [
        'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4'
    ];
    
    // Set a default source
    if (videoSources.length > 0) {
        video.src = videoSources[0];
    }
    
    // Add video event listeners
    video.addEventListener('loadedmetadata', function() {
        console.log('Video loaded successfully');
    });
    
    video.addEventListener('error', function() {
        console.log('Video loading error');
        // Show a placeholder or default content
        showVideoPlaceholder();
    });
}

function showVideoPlaceholder() {
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        videoContainer.innerHTML = `
            <div style="width: 100%; height: 400px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                        display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                <div style="text-align: center;">
                    <i class="fas fa-tv" style="font-size: 4rem; margin-bottom: 1rem;"></i>
                    <p>Anwar Cable TV</p>
                    <p style="font-size: 1rem; opacity: 0.8;">Professional Broadcast Software</p>
                </div>
            </div>
        `;
    }
}

// Notification System
function showNotification(title, message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <h4 style="margin-bottom: 0.5rem;">${title}</h4>
        <p style="margin: 0; opacity: 0.9;">${message}</p>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Animation Functions
function addAnimations() {
    // Add fade-in animation to elements
    const elementsToAnimate = document.querySelectorAll('.info-card, .feature-item, .service-btn');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

// Utility Functions
function formatTime(hours, minutes) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function getRandomColor() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case '1':
            handleServiceClick('live');
            break;
        case '2':
            handleServiceClick('movies');
            break;
        case '3':
            handleServiceClick('songs');
            break;
        case '4':
            handleServiceClick('news');
            break;
        case '5':
            handleServiceClick('sports');
            break;
        case '6':
            handleServiceClick('prayer');
            break;
        case '7':
            handleServiceClick('schedule');
            break;
        case '8':
            handleServiceClick('settings');
            break;
        case ' ':
            // Toggle video play/pause
            const video = document.getElementById('mainVideo');
            if (video) {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            }
            event.preventDefault();
            break;
    }
});

// Auto-refresh prayer times every minute
setInterval(highlightCurrentPrayer, 60000);

// Update sports scores every 5 minutes
setInterval(updateSportsScores, 300000);

// Console welcome message
console.log(`
╔══════════════════════════════════════════════════════════════╗
║                    Anwar Cable TV                            ║
║              Professional Broadcast Software                  ║
║                                                              ║
║  Contact: 01712082174                                        ║
║  Email: tajuartlakshmipur@gmail.com                         ║
║                                                              ║
║  Features:                                                   ║
║  • All Video Formats Supported                              ║
║  • Fully Automatic Player                                   ║
║  • Time Schedule Ads                                        ║
║  • Live Telecast                                            ║
║  • Prayer Times                                             ║
║  • Sports Scores                                            ║
║  • Dual Monitor Support                                     ║
║  • Multi-Language Support                                   ║
╚══════════════════════════════════════════════════════════════╝
`);

// Export functions for external use
window.AnwarCableTV = {
    updateTime,
    updatePrayerTimes,
    updateSportsScores,
    showNotification,
    handleServiceClick
}; 