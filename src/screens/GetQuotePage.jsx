import React, {useEffect} from 'react';
import TopNavbar from '../components/Nav/TopNavbar';
import Footer from '../components/Sections/Footer';
import QuoteForm from '../components/QuoteForm';
import styled from 'styled-components';

function GetQuotePage() {

  useEffect(() => {
    // Reset overflow and scroll to top
    document.body.style.overflow = "unset";
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
    <>
      <TopNavbar />
      <PageWrapper>
        <QuoteForm />
      </PageWrapper>
      <Footer />
    </>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export default GetQuotePage;
