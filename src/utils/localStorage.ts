// Utility functions to interact with localStorage

/**
 * Set an item in localStorage
 * @param {string} key - The key of the item to set
 * @param {any} value - The value to be stored
 */
function setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Get an item from localStorage
 * @param {string} key - The key of the item to retrieve
 * @returns {any} - The value associated with the key, or null if not found
 */
function getItem(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

/**
 * Remove an item from localStorage
 * @param {string} key - The key of the item to remove
 */
function removeItem(key) {
    localStorage.removeItem(key);
}

/**
 * Clear all items from localStorage
 */
function clearStorage() {
    localStorage.clear();
}

// Exporting functions
export { setItem, getItem, removeItem, clearStorage };