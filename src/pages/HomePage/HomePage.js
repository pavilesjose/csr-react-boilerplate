import React from 'react';
import logo from '../../../resources/images/react.png';
import styled from 'styled-components';

const StyledText = styled.h1`
  color: red;
  font-size: 2em;
  font-family: Verdana;
`;

export const HomePage = () => {
    return (
        <div>
            <StyledText>{`React is online at ${process.env.PORT}`}</StyledText>
            <img src={logo}/>
        </div>
    );
};
