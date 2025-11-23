import React from 'react';
import TopNavbar from '../components/Nav/TopNavbar';
import Footer from '../components/Sections/Footer';
import QuoteForm from '../components/QuoteForm';
import styled from 'styled-components';

function GetQuotePage() {
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
