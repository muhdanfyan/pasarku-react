import React, { Component } from 'react'
import Style from '../components/style/global.module.css'

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
                                NAMA PRODUK
                            </div>
                            <div className={Style.item_produk}>
                                NAMA PRODUK
                            </div>
                            <div className={Style.item_produk}>
                                NAMA PRODUK
                            </div>
                            <div className={Style.item_produk}>
                                NAMA PRODUK
                            </div>
                            <div className={Style.item_produk}>
                                NAMA PRODUK
                            </div>
                            <div className={Style.item_produk}>
                                NAMA PRODUK
                            </div>
                            <div className={Style.item_produk}>
                                NAMA PRODUK
                            </div>
                            <div className={Style.item_produk}>
                                NAMA PRODUK
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Homepage
