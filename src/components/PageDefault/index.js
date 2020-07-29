import React, { Fragment } from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5% 0;
`;


function PageDefault({children}) {
    return(
        <Fragment>
            <Menu/>
                <Main>
                    {children}
                </Main>
            <Footer/>
        </Fragment>        
    );
}
export default PageDefault;