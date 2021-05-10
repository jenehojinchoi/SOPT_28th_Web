import React from 'react';
import Styled from 'styled-components';
import Card from '../components/main/Card';

const MainWrap = Styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = ({ props }) => {
  console.log(props);
  return (
    <MainWrap>
        { props && props.map((data, index) => {
          return <Card key={index} props={data} />
        })}
    </MainWrap>
  );
}

export default Main;