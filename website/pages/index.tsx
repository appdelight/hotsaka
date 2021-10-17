import { NextPage, NextPageContext } from 'next'
import React from 'react'
import Header from '../container/Header'
import CustomHead from '../components/head';
import * as Config from '../utils/Config';
import Homepage from '../container/Homepage';
import { MenuTypes } from '../utils/types';

const Home: NextPage = () => {
  return (
    <div className={"index_page"}>
      <CustomHead
        title={Config.APP_NAME}
      ></CustomHead>

      <Header activeTab={MenuTypes.HOME} />
      <Homepage />
    </div>
  )
}

export default Home

Home.getInitialProps = async (ctx: NextPageContext) => {
  const { query = {}, req, res } = ctx;
  const welcome = false;
  if(welcome){
    res!.writeHead(302, { Location: `/home` });
    res!.end();
  }
  //
  return { query: query };
};