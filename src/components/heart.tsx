// components/HeroSection.js
import Image from 'next/image';
import styled from 'styled-components';

const HeroContainer = styled.section`
  position: relative;
  text-align: center;
  padding: 50px 20px;
  background: #f8f8f8; // Or any light background that matches the lightened palette
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333; // Adjust the color to ensure good contrast with the lighter background
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 30px;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #ff4081; // Use a color that complements the lightened palette
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e03570; // Darken the color slightly on hover
  }
`;

export const HeroSection = () => (
  <HeroContainer>
    <Title>Diagnostic Expert System.</Title>
    <Subtitle>We develop revolutionary technologies with delivering quality healthcare through medical technology</Subtitle>
    <StartButton>Start Program</StartButton>
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <Image src="/heart.png" alt="Digital Heart" width={300} height={300} layout="responsive" />
    </div>
  </HeroContainer>
);

export default HeroSection;
