import React, { useEffect, useMemo, useState } from 'react';
import PageBanner from '../../../partials/PageBanner';
import Table from './Table';
import Framer from '../../../partials/Framer';

const Providers = () => {

  return (
      <>
        <Framer/>
        <PageBanner pageName={"Provider Network"} PageImage={'team.jpg'} />{" "}
        
      <section>
        <div>
          <h3 className='title text-center my-4'>
            Browse Through Our Health Providers
          </h3>
        </div>
        <Table/>
      </section>
    </>
    );
}

export default Providers