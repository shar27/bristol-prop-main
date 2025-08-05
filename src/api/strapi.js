// src/api/strapi.js
const API = process.env.REACT_APP_STRAPI_API_URL || '';

/**
 * Fetch a single blog post by slug.
 * Returns `null` if not found.
 */
export async function fetchBlogBySlug(slug) {
  const res = await fetch(`${API}/blog-posts?slug=${encodeURIComponent(slug)}`);
  if (!res.ok) {
    throw new Error(`Could not load post: ${res.statusText}`);
  }
  const data = await res.json();
  return data[0] || null;
}

/**
 * (Optional) Fetch all slugs if you ever need them
 */
export async function fetchAllBlogSlugs() {
  const res = await fetch(`${API}/blog-posts`);
  if (!res.ok) {
    throw new Error(`Could not load slugs: ${res.statusText}`);
  }
  const posts = await res.json();
  return posts.map((p) => p.slug);
}
