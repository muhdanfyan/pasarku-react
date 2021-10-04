import React from 'react'
import { Route, Switch } from "react-router-dom"

import Homepage from "../pages/homepage"
import KeranjangPage from "../pages/keranjang"
import KontakPage from "../pages/kontak"
import ProdukPage from "../pages/produk"
import ProdukDetailPage from "../pages/produk_detail"
import TentangPage from "../pages/tentang"
import TransaksiPage from "../pages/transaksi"
import CheckoutPage from "../pages/checkout"
import Navbar from "../components/navbar"

const Routes = () =>{
    return(
    <div>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/keranjang" exact component={KeranjangPage} />
            <Route path="/produk" exact component={ProdukPage} />
            <Route path="/produk/:id" exact component={ProdukDetailPage} />
            <Route path="/kontak" exact component={KontakPage} />
            <Route path="/tentang" exact component={TentangPage} />
            <Route path="/keranjang" exact component={KeranjangPage} />
            <Route path="/checkout" exact component={CheckoutPage} />
            <Route path="/transaksi" exact component={TransaksiPage} />
        </Switch>
    </div>
    )
}

export default Routes;