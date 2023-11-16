import React, { useEffect, useMemo, useState } from 'react';
import PageBanner from '../../../partials/PageBanner';
import Table from './Table';
import Framer from '../../../partials/Framer';
import Map from '../providers/Map'

const Providers = () => {

  return (
      <>
        <Framer/>
        <PageBanner pageName={"Provider Network"} PageImage={'providers.jpg'} />{" "}
        <Map/>
      </>
    );
}

export default Providers