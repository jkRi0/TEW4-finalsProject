// Authentication state management
const AUTH_KEY = 'auth_token';

function isLoggedIn() {
    return localStorage.getItem(AUTH_KEY) !== null;
}

function login(email, password) {
    // In a real application, this would make an API call to verify credentials
    // For demo purposes, we'll just store a simple token
    localStorage.setItem(AUTH_KEY, JSON.stringify({
        email: email,
        timestamp: new Date().getTime()
    }));
    window.location.href = 'userDashboard.html';
}

function logout() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = 'login.html';
}

function protectRoute() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
}

function getUserInfo() {
    const auth = localStorage.getItem(AUTH_KEY);
    return auth ? JSON.parse(auth) : null;
}

// Export functions for use in other files
window.Auth = {
    isLoggedIn,
    login,
    logout,
    protectRoute,
    getUserInfo
}; 