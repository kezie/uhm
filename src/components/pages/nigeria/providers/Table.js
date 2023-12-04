import React, { useEffect, useState } from 'react'
import { uhms_providers } from "./Data";
import { state } from "./states";

const Table = () => {

    const providers = uhms_providers.dataroot.Uhms_providers;
    const [filteredProvider, setFilteredProvider] = useState(providers);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [totalPages, setTotalPages] = useState(0);


    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    
    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const filterByCategory = (filteredData) => {
        // Avoid filter for empty string
        if (!selectedCategory) {
          return filteredData;
        }
      
        const filteredProvider = filteredData.filter(
          (provider) => provider.Category.indexOf(selectedCategory) !== -1
        );
        return filteredProvider;
      };

    const filterByState = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedState) {
        return filteredData;
    }
    
    
    const filteredProvider = filteredData.filter(
        (provider) => provider.State.indexOf(selectedState) !== -1
    );
    return filteredProvider;
    };

    const filterByHospital = (event) => {
        // Name search query
        const query = event.target.value;
    
        // Get all providers
        var updatedList = [...providers];
    
        // Filter provider by search query
        updatedList = updatedList.filter((provider) => {
          return provider.Health_Care_Provider.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
    
        // Trigger render with updated values
        setFilteredProvider(updatedList);
        
      };

    const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    };
    
    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };
    
    
    useEffect(() => {
        let filteredData = filterByCategory(providers);
        filteredData = filterByState(filteredData);
    
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    
        setFilteredProvider(currentItems);
    
        // Recalculate totalItems and totalPages after filtering
        const totalItems = filteredData.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        setTotalPages(totalPages);
    }, [selectedCategory, selectedState, currentPage, itemsPerPage, providers]);


    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const pageNumbers = Array.from({ length: totalPages }).map((_, index) => index + 1);
    

  return (
    <>
    <div style={{margin:'auto', maxWidth:800}}>
        <div className='row container mt-4 mb-4'>
            <div className='col-lg-4'>
                <div className="brand-filter">
                    <div className="">Filter by Category:</div>
                    <select
                        id="brand-input"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="form-control"
                    >
                    <option value="">All</option>
                    <option value="Classic">Classic</option>
                    <option value="Gold">Gold</option>
                    <option value="Diamond">Diamond</option>
                    <option value="Diamond+">Diamond+</option>
                    </select>
                </div>
            </div>

            <div className='col-lg-4'>
                <div className="">Filter by State:</div>
                <div>
                    <select
                        value={selectedState}
                        onChange={handleStateChange}
                        className="form-control"
                    >
                        <option value="">All</option>
                        {
                        state.map((st)=>(
                            <option className='dropdown-content' value={st}>{st}</option>
                        ))
                        }
                    </select>
                </div>
            </div>

            <div className='col-lg-4'>
                <div className="">Search Hospitals</div>
                <div className="">
                    <input className="form-control" placeholder="Search hospital..." onChange={filterByHospital}/>
                </div>
            </div>
        </div>
    </div>

        <div className="pagination mb-2 mt-3">
            <button onClick={prevPage} className='btn btn-success ms-2' disabled={currentPage === 1}>
                Prev
            </button>
            
            <button onClick={nextPage} className='btn btn-success ms-2' disabled={currentPage === totalPages}>
                Next
            </button>
            <div style={{ marginLeft: '10px' }}>
                Page {currentPage} of {totalPages} Pages
            </div>
        </div>

        <table className='table table-hover'>
            <thead>
                    <tr>
                        <th>S/N</th>
                        <th>PROVIDER</th>
                        <th>ADDRESS</th>
                        <th>STATE</th>
                        <th>CATEGORY</th>
                    </tr>
            </thead>
            <tbody>
                {filteredProvider.map((provider) => (
                    <tr key={provider.id}>
                        <td>{provider.id}</td>
                        <td>{provider.Health_Care_Provider}</td>
                        <td>{provider.Address}</td>
                        <td>{provider.State}</td>
                        <td>{provider.Category}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        <div className="pagination mb-2 mt-3">
            <button onClick={prevPage} className='btn btn-success ms-2' disabled={currentPage === 1}>
                Prev
            </button>
            
            <button onClick={nextPage} className='btn btn-success ms-2' disabled={currentPage === totalPages}>
                Next
            </button>
            <div style={{ marginLeft: '10px' }}>
                Page {currentPage} of {totalPages} Pages
            </div>
        </div>
    </>
  )
}

export default Table