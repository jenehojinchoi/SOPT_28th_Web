import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

import Card from '../components/main/Card';
import { getCardData } from "../lib/api";

const MainWrap = Styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = ({ year, month }) => {
  // console.log('year: ', year);
  // console.log('month: ', month);
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    (async () => { 
      const data = await getCardData();
      data[year] && setUserData(data[year][month]);
    })();
  }, [year, month]);

  return (
    <MainWrap>
      <Card userData={userData} />
    </MainWrap>
  );
};

export default Main;