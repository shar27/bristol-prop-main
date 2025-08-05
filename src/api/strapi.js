// src/api/strapi.js
const API = import.meta.env.VITE_APP_STRAPI_API_URL || '';

export async function fetchAllPosts() {
  const res = await fetch(`${API}/blog-posts`);
  if (!res.ok) throw new Error(`Could not load posts: ${res.statusText}`);
  return await res.json();
}

export async function fetchBlogBySlug(slug) {
  const res = await fetch(
    `${API}/blog-posts?slug=${encodeURIComponent(slug)}`
  );
  if (!res.ok) throw new Error(`Could not load post: ${res.statusText}`);
  const data = await res.json();
  return data[0] || null;
}
