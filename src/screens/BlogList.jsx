// src/screens/BlogList.jsx
import React, { useState, useEffect } from 'react';
import { Link as RouterLink }            from 'react-router-dom';
import styled                            from 'styled-components';
import TopNavbar                         from '../components/Nav/TopNavbar';
import Footer                            from '../components/Sections/Footer';
import { fetchAllPosts }                 from '../api/strapi';

// Utility to strip HTML tags from subtitle preview
function stripHTML(html) {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
}

export default function BlogList() {
  const [posts, setPosts]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);

  useEffect(() => {
    fetchAllPosts()
      .then((data) => setPosts(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading posts…</div>;
  if (error)   return <div>Error loading posts.</div>;

  return (
    <>
      <TopNavbar />
      <Section>
        <Title>Blog</Title>
        <Grid>
          {posts.map((post) => (
            <Card key={post.id}>
              <CardTitle>{post.title}</CardTitle>
              <CardSubtitle>
                {stripHTML(post.subtitle).slice(0, 100)}…
              </CardSubtitle>
              <ReadMore to={`/blog/${post.slug}`}>Read More</ReadMore>
            </Card>
          ))}
        </Grid>
      </Section>
      <Footer />
    </>
  );
}

// Styled Components
const Section = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CardSubtitle = styled.p`
  flex-grow: 1;
  color: #666;
  margin-bottom: 1.5rem;
`;

const ReadMore = styled(RouterLink)`
  align-self: flex-start;
  text-decoration: none;
  font-weight: 600;
  color: #ff5722;
  &:hover {
    text-decoration: underline;
  }
`;
