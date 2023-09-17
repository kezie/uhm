import React, { useEffect, useMemo, useState } from 'react';
import PageBanner from '../../../partials/PageBanner';
import {uhms_providers} from './Data'
import TableHeader from '../../../partials/dataTable/header/TableHeader';
import Search from '../../../partials/search/Search';
import PaginationComponent from '../../../partials/pagination/PaginationComponent'

const Providers = () => {
    const [providers, setProviders] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const ITEMS_PER_PAGE = 10

    const headers = [
        {name: "S/N", field: 'id'},
        {name: "PROVIDER", field: 'provider'},
        {name: "STATE", field: 'state'},
        {name: "ADDRESS", field: 'address'},
        {name: "CATEGORY", field: 'category'}
    ]

    useEffect(()=>{
        setProviders(uhms_providers.dataroot.uhms_providers)
    }, []);

    const providersData = useMemo(()=> {
        let gottenProviders = providers
        setTotalItems(gottenProviders.length);

        if(search){
            gottenProviders = gottenProviders.filter(
                provider => provider.State.toLowerCase().includes(search.toLowerCase()) ||
                provider.Health_Care_Provider.toLowerCase().includes(search.toLowerCase())
            )
        }

        return gottenProviders.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );


    },[providers, currentPage, search]);

  return (
    <>
        <PageBanner pageName={"Provider Network"} PageImage={'team.jpg'} />{" "}
        <section className="features-section pt-130 bg_cover pb-100"
            style={{backgroundImage: "url(assets/images/bg/testimonial-bg1.png)" }}
        >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              {/*=== Common Heading ===*/}
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Our List Of Providers</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              {/*=== Search and Paginatio ===*/}
                <div className='row my-3'>
                    <div className='col-md-6'>
                        <PaginationComponent
                            total = {totalItems}
                            itemsPerPage = {ITEMS_PER_PAGE}
                            currentPage = {currentPage}
                            onPageChange = {page => setCurrentPage(page)}
                        />
                    </div>
                    <div className='col-md-6 d-flex flex-row-reverse'>
                        <Search 
                          onSearch = {(value)=>{
                            setSearch(value);
                            setCurrentPage(1);
                          }}
                          placeholder = {"Search Hospital or State..." }
                          style={{width:'240px'}}
                          className={'form-control'}
                        />                       
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* Provider Table */}
        <div className='container'> 
            <div className='row'>
                <div className='col mb-3 col-12'>
                        <table className='table table-striped'>
                            <TableHeader headers = {headers}/>
                            <tbody>
                                    {providersData.map((provider)=>(
                                        <tr key={provider.id}>
                                            <td>{provider.id}</td>
                                            <td>{provider.Health_Care_Provider}</td>
                                            <td>{provider.State}</td>
                                            <td>{provider.Address}</td>
                                            <td>{provider.Category}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                </div>

                {/* Pagination */}
                <div className='col-md-6 mb-4'>
                        <PaginationComponent
                            total = {totalItems}
                            itemsPerPage = {ITEMS_PER_PAGE}
                            currentPage = {currentPage}
                            onPageChange = {page => setCurrentPage(page)}
                        />
                    </div>
            </div>
        </div>
      </section>
    </>
    );
}

export default Providers