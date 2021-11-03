import React from 'react';
import Header from "./Header";
import "../css/style.min.css";
import Preloader from './Preloader';
import LeftBar from './LeftBar';
import { Errorbox } from './Errorbox';
import CrudOperation from './CrudOperation';
import PageWrapper from './PageWrapper';


const Main_Wrapper = () => {
    return (
        <>
        <div
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin5"
      data-sidebartype="full"
      data-sidebar-position="absolute"
      data-header-position="absolute"
      data-boxed-layout="full"
    >
        <Header />
        {/* <Preloader /> */}
        {/* <Errorbox /> */}
        <LeftBar />
        <CrudOperation />
        <PageWrapper />
    </div>
        </>
    )
}

export default Main_Wrapper;
