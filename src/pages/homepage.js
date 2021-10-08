import React, { Component } from 'react'
import Style from '../components/style/global.module.css'
import { Link } from 'react-router-dom'

import produk_1 from "../assets/produk/1.png"
import produk_2 from "../assets/produk/2.png"
import produk_3 from "../assets/produk/3.png"
import produk_4 from "../assets/produk/4.png"
import produk_5 from "../assets/produk/5.png"
import produk_6 from "../assets/produk/6.png"
import produk_7 from "../assets/produk/7.png"
import produk_8 from "../assets/produk/8.png"
import image_1 from "../assets/image1.png"


class Homepage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={`${Style.wrapper} ${Style.banner_1}`}></div>
                <div className={Style.wrapper}>
                    <div className={StyleSheet.row}>
                        <div className={Style.card}>
                            <div className={Style.input_group_1}>
                                <input type="search" placeholder="Cari Produk" />
                                <button>Cari</button>
                            </div>
                        </div>
                    </div>
                    <div className={Style.row}>
                        <div className={Style.grid_produk}>
                            <div className={Style.item_produk}>
                                <div>
                                    <img src={produk_1} alt="Item Produk" />
                                    <h2>Nike Air Max 270 React</h2>
                                    <h4>IDR. 1.200.000,-</h4>
                                    <button>BELI</button>
                                </div>
                            </div>
                            <div className={Style.item_produk}>
                                <div>
                                    <img src={produk_2} alt="Item Produk" />
                                    <h2>Nike Air Max 270 React</h2>
                                    <h4>IDR. 1.200.000,-</h4>
                                    <button>BELI</button>
                                </div>
                            </div>
                            <div className={Style.item_produk}>
                                <div>
                                    <img src={produk_3} alt="Item Produk" />
                                    <h2>Nike Air Max 270 React</h2>
                                    <h4>IDR. 1.200.000,-</h4>
                                    <button>BELI</button>
                                </div>
                            </div>
                            <div className={Style.item_produk}>
                                <div>
                                    <img src={produk_4} alt="Item Produk" />
                                    <h2>Nike Air Max 270 React</h2>
                                    <h4>IDR. 1.200.000,-</h4>
                                    <button>BELI</button>
                                </div>
                            </div>
                            <div className={Style.item_produk}>
                                <div>
                                    <img src={produk_5} alt="Item Produk" />
                                    <h2>Nike Air Max 270 React</h2>
                                    <h4>IDR. 1.200.000,-</h4>
                                    <button>BELI</button>
                                </div>
                            </div>
                            <div className={Style.item_produk}>
                                <div>
                                    <img src={produk_6} alt="Item Produk" />
                                    <h2>Nike Air Max 270 React</h2>
                                    <h4>IDR. 1.200.000,-</h4>
                                    <button>BELI</button>
                                </div>
                            </div>
                            <div className={Style.item_produk}>
                                <div>
                                    <img src={produk_7} alt="Item Produk" />
                                    <h2>Nike Air Max 270 React</h2>
                                    <h4>IDR. 1.200.000,-</h4>
                                    <button>BELI</button>
                                </div>
                            </div>
                            <div className={Style.item_produk}>
                                <div>
                                    <img src={produk_8} alt="Item Produk" />
                                    <h2>Nike Air Max 270 React</h2>
                                    <h4>IDR. 1.200.000,-</h4>
                                    <button>BELI</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${Style.row} ${Style.bg_primary} ${Style.custom_banner}`}>
                        <div className={Style.grid_2}>
                            <div className={Style.banner_link}>
                                <h1>Adidas Men Running
                                Sneakers</h1>
                                <p>Performance and design. Taken right to the edge.</p>
                                <Link to="/">SHOP NOW</Link>
                            </div>
                            <div>
                                <img src={image_1} className={Style.image_custom_banner} alt="Banner 1" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Homepage
