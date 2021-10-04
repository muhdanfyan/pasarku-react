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
                            <input type="search" placeholder="Cari Produk" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Homepage
