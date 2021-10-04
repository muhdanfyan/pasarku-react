import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Navbar extends Component{
    render(){
        return(
            <ul>
                <li> <Link to="/">Homepage</Link> </li>
                <li> <Link to="/produk">Page</Link> </li>
                <li> <Link to="/produk/:url">Transaksi</Link> </li>
                <li> <Link to="/kontak">Kontak</Link> </li>
                <li> <Link to="/tentang">Tentang</Link> </li>
                <li> <Link to="/keranjang">Keranjang</Link> </li>
            </ul>
        )
    }
}