import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #f7f7f7;
  padding: 16px;
  border-radius: 8px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 20px;
`;

const Description = styled.p`
  font-size: 16px;
`;

const ProjectsCard = ({ title, description }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default ProjectsCard;
