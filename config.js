// Anwar Cable TV - Configuration File
// Edit these settings to customize your broadcast software

const AnwarCableTVConfig = {
    // Company Information
    company: {
        name: "Anwar Cable TV",
        tagline: "Professional Broadcast Software & All Services",
        contact: {
            name: "Anwar",
            mobile: "01712082174",
            email: "tajuartlakshmipur@gmail.com"
        }
    },

    // Prayer Times (24-hour format)
    prayerTimes: {
        fajr: "04:30",
        dhuhr: "12:15",
        asr: "15:45",
        maghrib: "18:20",
        isha: "19:45"
    },

    // Sports Scores
    sportsScores: [
        {
            sport: "Football",
            score: "Team A 2 - 1 Team B",
            time: "75'",
            status: "Live"
        },
        {
            sport: "Cricket",
            score: "Bangladesh 245/6 (45.2)",
            status: "Live"
        }
    ],

    // News Items
    newsItems: [
        "Welcome to Anwar Cable TV - Your trusted source for entertainment and information!",
        "Breaking: New movies added to our premium collection this week!",
        "Live sports coverage available 24/7 on Anwar Cable TV",
        "Special prayer time notifications for our Muslim viewers",
        "Call 01712082174 for subscription and support",
        "Don't miss our exclusive movie premieres every Friday!",
        "Stay updated with live cricket and football matches",
        "Premium package subscribers get access to exclusive content"
    ],

    // Next Movies List
    nextMovies: [
        "The Avengers: Endgame",
        "Spider-Man: No Way Home",
        "Black Panther: Wakanda Forever",
        "Doctor Strange in the Multiverse of Madness",
        "Thor: Love and Thunder",
        "Captain Marvel",
        "Iron Man",
        "Captain America: The First Avenger"
    ],

    // Advertisement Content
    advertisements: {
        scrolling: [
            "🎬 New Movies Every Week | 📺 24/7 Entertainment | 📞 Call: 01712082174",
            "🔥 Hot Deals on Premium Packages | 🎯 Best Quality Content | 📱 Contact Us Today",
            "⚽ Live Sports Coverage | 🎵 Latest Music | 🎭 Entertainment Galore"
        ],
        lType: {
            title: "Special Offer!",
            description: "Premium Package - 50% Off",
            buttonText: "Learn More"
        }
    },

    // Video Sources (replace with your actual video files)
    videoSources: [
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
    ],

    // Display Settings
    display: {
        primaryResolution: "1024x768",
        dualMonitor: true,
        autoRefresh: true,
        refreshInterval: 5000 // milliseconds
    },

    // Language Settings
    language: {
        primary: "en",
        secondary: "bn",
        supported: ["en", "bn"]
    },

    // Theme Colors
    theme: {
        primary: "#667eea",
        secondary: "#764ba2",
        accent: "#ff6b6b",
        success: "#4ecdc4",
        warning: "#ffd700",
        info: "#45b7d1"
    },

    // Service Buttons Configuration
    services: [
        {
            id: "live",
            name: "Live Telecast",
            icon: "fas fa-broadcast-tower",
            shortcut: "1"
        },
        {
            id: "movies",
            name: "Movies",
            icon: "fas fa-film",
            shortcut: "2"
        },
        {
            id: "songs",
            name: "Songs",
            icon: "fas fa-music",
            shortcut: "3"
        },
        {
            id: "news",
            name: "News",
            icon: "fas fa-newspaper",
            shortcut: "4"
        },
        {
            id: "sports",
            name: "Sports",
            icon: "fas fa-trophy",
            shortcut: "5"
        },
        {
            id: "prayer",
            name: "Prayer Times",
            icon: "fas fa-pray",
            shortcut: "6"
        },
        {
            id: "schedule",
            name: "Schedule",
            icon: "fas fa-calendar",
            shortcut: "7"
        },
        {
            id: "settings",
            name: "Settings",
            icon: "fas fa-cog",
            shortcut: "8"
        }
    ],

    // Features List
    features: [
        {
            icon: "fas fa-video",
            title: "All Video Formats",
            description: "Support for MP4, AVI, MKV, MOV, and more"
        },
        {
            icon: "fas fa-robot",
            title: "Fully Automatic Player",
            description: "Smart scheduling and automatic playback"
        },
        {
            icon: "fas fa-clock",
            title: "Time Schedule Ads",
            description: "Automated advertisement scheduling"
        },
        {
            icon: "fas fa-desktop",
            title: "Dual Monitor Support",
            description: "1024x768 resolution optimized"
        },
        {
            icon: "fas fa-globe",
            title: "Multi-Language",
            description: "English and Bangladeshi support"
        },
        {
            icon: "fas fa-cross-platform",
            title: "Cross-Platform",
            description: "Runs on any operating system"
        }
    ],

    // Update Intervals (in milliseconds)
    intervals: {
        timeUpdate: 1000,
        prayerHighlight: 60000,
        sportsUpdate: 300000,
        newsUpdate: 5000,
        movieUpdate: 30000
    },

    // Notification Settings
    notifications: {
        enabled: true,
        duration: 3000,
        position: "top-right"
    },

    // SEO Settings
    seo: {
        title: "Anwar Cable TV - Professional Broadcast Software & All Services",
        description: "Local Cable TV Broadcast Software with Automatic Player, Time Schedule Ads, Live Telecast, Prayer Times, and All Services",
        keywords: "cable tv, broadcast software, video player, prayer times, live telecast, bangladesh, anwar cable tv",
        author: "Anwar - Anwar Cable TV"
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnwarCableTVConfig;
} else {
    window.AnwarCableTVConfig = AnwarCableTVConfig;
}

// Configuration helper functions
const ConfigHelper = {
    // Get prayer time by name
    getPrayerTime: function(prayerName) {
        return AnwarCableTVConfig.prayerTimes[prayerName.toLowerCase()];
    },

    // Get random news item
    getRandomNews: function() {
        const news = AnwarCableTVConfig.newsItems;
        return news[Math.floor(Math.random() * news.length)];
    },

    // Get random movie
    getRandomMovie: function() {
        const movies = AnwarCableTVConfig.nextMovies;
        return movies[Math.floor(Math.random() * movies.length)];
    },

    // Get service by ID
    getService: function(serviceId) {
        return AnwarCableTVConfig.services.find(service => service.id === serviceId);
    },

    // Get theme color
    getThemeColor: function(colorName) {
        return AnwarCableTVConfig.theme[colorName];
    },

    // Update configuration
    updateConfig: function(key, value) {
        const keys = key.split('.');
        let current = AnwarCableTVConfig;
        
        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }
        
        current[keys[keys.length - 1]] = value;
    }
};

// Make helper functions available globally
if (typeof window !== 'undefined') {
    window.ConfigHelper = ConfigHelper;
} 