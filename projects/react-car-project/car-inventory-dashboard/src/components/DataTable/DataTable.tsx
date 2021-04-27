import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 170 },
    { field: 'make', headerName: 'Make', width: 130 },
    { field: 'model', headerName: 'Model', width: 130 },
    {
      field: 'color',
      headerName: 'Color',
      type: 'string',
      width: 90,
    },
    {
      field: 'price',
      headerName: 'Price',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
  ];

export const DataTable = () => {

    let { vehicleData, getData } = useGetData();

    console.log(vehicleData)

    return (
        <div style={{ height: 400, width: '100%' }}>
            <h1>Cars in Inventory</h1>
            <DataGrid rows = {vehicleData} columns = {columns} pageSize={5} checkboxSelection />
        </div>
    )
}