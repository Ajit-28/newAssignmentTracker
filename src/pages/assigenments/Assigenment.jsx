import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useGlobalFilter, usePagination } from 'react-table';
import axios from 'axios';
import { Toolbar } from '@mui/material'

import HeaderNav from '../../common/HeaderNav'
import './assignment.css'
import GlobalFilter from '../../common/GlobalFilter';
import { COLUMNS } from '../../common/columns';

export default function Assignment() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/products/paged');
                setProducts(response.data.content);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        prepareRow,
        state,
        setGlobalFilter,
        pageOptions,
        setPageSize,
    } = useTable({
        columns: COLUMNS,
        data: products,
        initialState: { pageSize: 5 }
    }, useGlobalFilter, usePagination)

    const { globalFilter, pageIndex, pageSize } = state

    return (
        <div className='assigenmentContainer'>
            <HeaderNav />
            <Toolbar />
            <div className="dataContent">
                <h2>My Assignment</h2>
                <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroups) => (
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {headerGroups.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='footer'>
                <div>
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>
                    </span>
                </div>
                <div className="btnContainer">
                    <p className='rowPerPage'>Show</p>
                    <select
                        value={pageSize}
                        onChange={e => {
                            setPageSize(Number(e.target.value))
                        }}
                        style={{  height: '25px', borderColor: 'lightgray'}}
                    >
                        {[5, 10, 25, 50].map(pageSize => (
                            <option key={pageSize} value={pageSize}>
                                 {pageSize}
                            </option>
                        ))}
                    </select>
                    <p className='rowPerPage'>entries</p>
                    <button className='btn' onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                    <span>{pageIndex + 1}</span>
                    <button className='btn' onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                </div>
            </div>
            </div>
        </div>
    )
}

