/**
 * Generate a unique ID for a horizontal line
 * Using crypto.randomUUID() for browser compatibility
 */
export function generateLineId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback for older browsers
  return `line-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Validate price input
 * @param {number} price
 * @returns {string|null} Error message or null if valid
 */
export function validatePrice(price) {
  if (price === undefined || price === null || price === '') {
    return 'Price is required';
  }
  
  const numPrice = Number(price);
  
  if (isNaN(numPrice)) {
    return 'Price must be a valid number';
  }
  
  if (numPrice <= 0) {
    return 'Price must be greater than 0';
  }
  
  return null;
}

