import React from 'react'

import ImgMediaCard from '../components/material-ui/ImgMediaCard';
import realImg from './images/coins/real.png';
import bitcoinImg from './images/coins/bitcoin.png';
import britaImg from './images/coins/brita.png';
import './ListCoins.css';

export default function ListCoins() {

const arrBalances = [
    { coin: 'real', balance: 100000 },
    { coin: 'bitcoin', balance: 5000 },
    { coin: 'brita', balance: 100 }
];

const auxBalances = arrBalances.map((item, index) => {
    return item.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2})
})

    const arrCoins = [
        {
            coinImg: realImg,
            coinName: 'Real (BRL)',
            coinBalance: `R$ ${auxBalances[0]}`,
            strLink: '#',
        },
        {
            coinImg: bitcoinImg,
            coinName: 'Bitcoin (BTC)',
            coinBalance: `${auxBalances[1]} BTC`,
            strLink: '#',
        },
        {
            coinImg: britaImg,
            coinName: 'Brita (BT)',
            coinBalance: `${auxBalances[2]} BT`,
            strLink: '#',
        },
    ]
    return (
        <div>
            Lista de Moedas
            <div className="list-coins">

                {arrCoins.map((coin, index) => {
                    console.log(coin)
                   return <ImgMediaCard key={index} props={coin}/>
                })}

            </div>
        </div>
    )
}
