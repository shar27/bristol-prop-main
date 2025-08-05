// src/screens/BlogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams }                 from 'react-router-dom';
import styled                        from 'styled-components';
import TopNavbar                     from '../components/Nav/TopNavbar';
import Footer                        from '../components/Sections/Footer';
import { fetchBlogBySlug }           from '../api/strapi';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost]         = useState(null);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetchBlogBySlug(slug)
      .then((p) => {
        if (!p) throw new Error('Not found');
        setPost(p);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div>Loading…</div>;
  if (error)   return <div>Post not found.</div>;

  const {
    title,
    subtitle,
    cards,
    buttonText,
    buttonLink,
    qrTitle,
    qrImage,
  } = post;

  return (
    <>
      <TopNavbar />
      <Section>
        <Title>{title}</Title>
        <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />

        <Grid>
          {cards.map((c) => (
            <Card key={c.id} bg={c.backgroundColor}>
              <CardTitle>{c.title}</CardTitle>
              <CardText dangerouslySetInnerHTML={{ __html: c.description }} />
            </Card>
          ))}
        </Grid>

        <Button href={buttonLink} target="_blank" rel="noopener noreferrer">
          {buttonText}
        </Button>

        {qrImage && (
          <QRSection>
            <QRTitle>{qrTitle}</QRTitle>
            <QRImage src={qrImage.url} alt={qrTitle} />
          </QRSection>
        )}
      </Section>
      <Footer />
    </>
  );
}

// —————————————————————————————————
// Copy your styled‐components from your FinancePage
// —————————————————————————————————

const Section = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem 1rem;
  background: #ffffff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 3.2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 10rem;
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`;

const Card = styled.div`
  background: ${(props) => props.bg || '#fff'};
  color: #222;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Button = styled.a`
  display: inline-block;
  background: #ff5722;
  color: #fff;
  margin-top: 0.5rem;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #e64a19;
  }
`;

const QRSection = styled.div`
  margin-top: 3rem;
`;

const QRTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const QRImage = styled.img`
  width: 160px;
  height: 160px;
  margin: 0 auto;
`;
