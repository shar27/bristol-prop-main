// src/api/strapi.js

const API = process.env.REACT_APP_STRAPI_API_URL || '';

/**
 * Fetch all blog posts (full objects)
 * @returns {Promise<Array>} Array of post objects
 */
export async function fetchAllPosts() {
  const res = await fetch(`${API}/blog-posts`);
  if (!res.ok) {
    throw new Error(`Could not load posts: ${res.statusText}`);
  }
  const data = await res.json();
  return data;
}

/**
 * Fetch a single blog post by slug.
 * Returns `null` if not found.
 * @param {string} slug
 * @returns {Promise<Object|null>}
 */
export async function fetchBlogBySlug(slug) {
  const res = await fetch(
    `${API}/blog-posts?slug=${encodeURIComponent(slug)}`
  );
  if (!res.ok) {
    throw new Error(`Could not load post: ${res.statusText}`);
  }
  const data = await res.json();
  return data[0] || null;
}

/**
 * (Optional) Fetch just the slugs of all blog posts
 * @returns {Promise<Array<string>>}
 */
export async function fetchAllBlogSlugs() {
  const res = await fetch(`${API}/blog-posts`);
  if (!res.ok) {
    throw new Error(`Could not load slugs: ${res.statusText}`);
  }
  const posts = await res.json();
  return posts.map((p) => p.slug);
}
