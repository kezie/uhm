import React, { useState, useEffect, useMemo} from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
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
      <div className='ag-theme-alpine' style={{height:900,width:'100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={20}
          defaultColDef={defaultColDef}
        />
      </div>
  );
};

export default Test;