import React from 'react'
import HeaderContainer from '../containers/header';
import MainContainer from '../containers/main';
import CardContainer from '../containers/card';
import FooterContainer from '../containers/footer';
import SpinnerContainer from '../containers/spinner';

export default function Home(){
    return (
            
            <>
                <HeaderContainer toPage='About'/>
                <MainContainer>
                    <CardContainer>
                        <SpinnerContainer/>
                    </CardContainer>
                </MainContainer>
                <FooterContainer/>
            </>
    )
}