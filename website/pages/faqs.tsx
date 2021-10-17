import React from 'react'
import CustomHead from '../components/head'
import Footer from '../container/Footer'
import Header from '../container/Header'
import { APP_NAME } from '../utils/Config'
import { MenuTypes } from '../utils/types'

const FaqsPage = () => {
    return (
        <React.Fragment>
            <CustomHead
                title={`FAQs | ${APP_NAME}`}
            ></CustomHead>
            <div className="contacts__page">
                <Header activeTab={MenuTypes.CONTACTS}></Header>
                <div className="contacts__container mh-100vh  bg-white text-dark">
                    <div className="contacts_page_header d-flex justify-content-center align-items-center vh-20">
                        <h1>FAQs</h1>
                    </div>
                </div>
                <Footer></Footer>
            </div>

        </React.Fragment>
    )
}

export default FaqsPage
