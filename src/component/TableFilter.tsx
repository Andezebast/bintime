import React, {FC, useState} from 'react';
import {Box, Typography} from "@mui/material";
import Filter from "../svg/Filter";
import Search from "../svg/Search";
import {ISelectFilter} from "../models/ISelectFilter";
/*----------------------------------*/
interface ITableFilterProps {
    setSelectFilter: (obj: ISelectFilter)  => void,
    selectFilter: ISelectFilter,
    setTextFilter: Function
}
/*----------------------------------*/
const TableFilter: FC<ITableFilterProps> = ({setSelectFilter, selectFilter, setTextFilter}) => {
    const [filterOpen, setFilterOpen] = useState(false)
    /*----------------------------------*/
    const handleEventChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectFilter({
            ...selectFilter,
            [event.target.id]: event.target.value
        })
    }
    /*----------------------------------*/
    const handleEventInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextFilter(event.target.value)
    }
    /*----------------------------------*/
    const handleEventFilter = () =>{
        setFilterOpen(!filterOpen);
    }
    /*----------------------------------*/
    return (
        <Box>
            <Box sx={filterContent}>
                <Box>
                    <Typography variant='h2'>Formula Top Headlines</Typography>
                </Box>
                <Box sx={filterContent}>
                    <Box sx={filterContentInput}>
                        <input type="text" style={{boxSizing: 'border-box', ...filterInput}} placeholder='Search article' onChange={handleEventInput}/>
                        <Box sx={filterSearch}>
                            <Search/>
                        </Box>
                    </Box>
                    <button style={filterContentButton} onClick={handleEventFilter}><Filter/><Typography variant='subtitle1' sx={filterButtonText}>Filters</Typography></button>
                </Box>
            </Box>
            <Box sx={filterOpen ? filterSelectOpen : filterSelect}>
                <Box sx={filterCategory}>
                    <Typography variant='subtitle1' sx={filterCategoryTitle}>Category</Typography>
                    <select style={{boxSizing: 'border-box', ...filterCategorySelect}} name="category" id="category" onChange={handleEventChange}>
                        <option value="general">General</option>
                        <option value="business">Business</option>
                        <option value="health">Health</option>
                        <option value="technology">Technology</option>
                    </select>
                </Box>
                <Box>
                    <Typography variant='subtitle1' sx={filterCategoryTitle}>Country</Typography>
                    <select style={{boxSizing: 'border-box', ...filterCategorySelect}} name="country" id="country" onChange={handleEventChange}>
                        <option value="ua">Ukraine</option>
                        <option value="gb">United Kingdom</option>
                        <option value="de">Germany</option>
                        <option value="pl">Poland</option>
                    </select>
                </Box>
            </Box>
        </Box>
    );
};
const filterContent = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}
const filterContentInput = {
    position: 'relative',
}
const filterInput = {
    height: '36px',
    width: '250px',
    padding: '0',
    paddingLeft: '40px',
    border: '1px solid #dbdbe7',
    borderRadius: '8px',
    outline: 'unset',
    color: '#383f47',
    fontWeight: '600',
}
const filterSearch = {
    position: 'absolute',
    top: '8px',
    left: '12px',
}
const filterContentButton = {
    marginLeft: '20px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ecf0f6',
    border: 'none',
    padding: '4px 10px',
    borderRadius: '8px',
    cursor: 'pointer',
}
const filterButtonText = {
    paddingLeft: '5px',
}
const filterSelect = {
    display: 'flex',
    maxHeight: '0px',
    overflow: 'hidden',
}
const filterSelectOpen = {
    display: 'flex',
    maxHeight: '150px',
    overflow: 'hidden',
    paddingTop: '20px'
}
const filterCategory = {
    marginRight: '20px',
}
const filterCategoryTitle = {
    paddingBottom: '5px'
}
const filterCategorySelect = {
    width: '250px',
    border: '1px solid #dbdbe7',
    borderRadius: '8px',
    outline: 'unset',
    padding: '10px',
    color: '#212932',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
}
export default TableFilter;