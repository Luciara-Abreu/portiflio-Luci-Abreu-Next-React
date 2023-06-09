import React from 'react';
import styled from 'styled-components';

interface ProgressProps {
  progress: number;
}

const ContainerSkill = styled.div`
width: 100%;
display: flex;
align-items: center;
padding: 0;
margin: 0;

@media (max-width: 767px) {
width: 100%;
display: flex;
justify-content: space-between;
padding: 0;
margin: 0;
}
`

const Title = styled.div`
    width: 30%;
    font-size: 20px;

  @media (max-width: 767px) {
  width: auto;
  font-size: 15px;
}
`

const Skill = styled.div`
  width: 70%;
  height: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 767px) {
    width: 50%;
}
`

const ProgressContainer = styled.div`
  height: 100%; 
`

const ProgressBar = styled.div<ProgressProps>`
  height: 100%;
  background-color:rgb(226, 170, 170);
  width: ${(props) => props.progress}%;
`

const Progress: React.FC<ProgressProps> = ({ progress }) => {
  return (
    <ProgressContainer>
      <ProgressBar progress={progress} />
    </ProgressContainer>
  )
}


export {
  Progress,
  ContainerSkill,
  Skill,
  Title 
};