export function generateCategories(arr, slug, isActive) {
  try {
    if (Array.isArray(arr)) {
      if (isActive) {
        return arr.filter(item => item !== slug);
      }
      return [...arr, slug].filter(i => i && i.length > 0);
    }
    if (isActive) {
      return [slug].filter(i => i !== slug);
    }
    return [arr, slug].filter(i => i && i.length > 0);
  } catch (e) {
    return null;
  }
}

export function checkActiveCategories(arr, slug) {
  try {
    if (Array.isArray(arr)) {
      return arr.includes(slug);
    }
    return arr === slug;
  } catch (e) {
    return false;
  }
}
