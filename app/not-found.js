'use client';

import Link from 'next/link';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #0D0A19;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #666;
`;

const HomeLink = styled(Link)`
  padding: 1rem 2rem;
  background-color: #0D0A19;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(13, 10, 25, 0.3);
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <Title>404</Title>
      <Description>Page Not Found</Description>
      <HomeLink href="/">Return Home</HomeLink>
    </NotFoundContainer>
  );
}
