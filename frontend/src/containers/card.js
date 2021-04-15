import React from 'react';
import usePriceData from '../hooks/usepricedata';
import { usdPairs } from '../data/usdpairs.js';

import { Card } from '../components';


export default function CardContainer(){

    const usdPriceData = usePriceData(usdPairs, 'USD')

    return (
        <>
            <Card>
                <Card.PairType>USD Pairs</Card.PairType>
                <Card.CardGrid>
                    {
                        usdPriceData ?
                        usdPriceData.map((price)=> (

                            <Card.CardItem key={price.id}>
                                <Card.ItemInnerTop>
                                    <Card.ItemLogo src={price.iconPath} alt="Cant"/>
                                    <Card.ItemPairTitle>{price.pair}</Card.ItemPairTitle>
                                </Card.ItemInnerTop>
                                <Card.ItemInnerBottom>
                                    <Card.ItemInnerPrice>${price.price}</Card.ItemInnerPrice>
                                </Card.ItemInnerBottom>
                            </Card.CardItem>
                            
                        ))
                            :
                            <h1>Loading</h1>
   
                    }

                    
                </Card.CardGrid>
            </Card>
        </>
    )
}