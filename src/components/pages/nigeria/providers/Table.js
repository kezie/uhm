import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { createRoot } from 'react-dom/client';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import PageBanner from '../../../partials/PageBanner';
import {uhms_providers} from './Data'

const Test = () => {

  const [rowData, setRowData] = useState([])

  const columnDefs = [
    {field: 'id', width:'100px'},
    {field: 'Health_Care_Provider', filter:true,  floatingFilter: true, width:'400px'},
    {field: 'Address',  width:'450px',filter:true,  floatingFilter: true},
    {field: 'State', width:'150px',filter:true,  floatingFilter: true},
    {field: 'Category',width:'150px',filter:true,  floatingFilter: true}
  ]

  const defaultColDef = useMemo(() => {
    return {
      resizable: true,
    };
  }, []);

  useEffect(()=>{
    setRowData(uhms_providers.dataroot.uhms_providers)
  }, [])


  return (
      <div className='ag-theme-alpine' style={{height:600,width:'100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
          defaultColDef={defaultColDef}
        />
      </div>
  );
};

export default Test;