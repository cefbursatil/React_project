import React from 'react'
import Navbar from '../Navbar/Navbar'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Banner from '../Banner/Banner'

function Main(props) {
    return (
        <main>
            <Navbar/>
            <Banner/>
            <ItemListContainer text="Texto de ItemListContainer"/>
        </main>
    )
}


export default Main


