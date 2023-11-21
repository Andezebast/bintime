import React, {FC, useState} from 'react';
import {newsApi} from "../services/NewsService";
import {motion} from "framer-motion";
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow, Typography
} from "@mui/material";
import Image from '@jy95/material-ui-image';
import {ISelectFilter} from "../models/ISelectFilter";
import Loading from "../svg/Loading";
import TableNewsRow from "./TableNewsRow";
/*----------------------------------*/
interface ITableNewsProps {
    selectFilter: ISelectFilter,
    textFilter: string
}
/*----------------------------------*/
const TableNews: FC<ITableNewsProps> = ({selectFilter, textFilter}) => {
    const {data, error, isLoading} = newsApi.useGetNewsQuery(selectFilter);
    let dataLength: number = 0;
    if (data) {
        dataLength = data.articles.length;
    }
    /*----------------------------------*/
    type IDType = 'urlToImage' | 'title' | 'author' | 'description' | 'publishedAt' | 'url';
    interface IColumn {
        id: IDType,
        label: string,
        width: string,
    }
    const columns: IColumn[] = [
        {id: 'urlToImage', label: 'Image', width: '10%'},
        {id: 'title', label: 'Title', width: '25%'},
        {id: 'author', label: 'Authors', width: '15%'},
        {id: 'description', label: 'Description', width: '25%'},
        {id: 'publishedAt', label: 'Publication Date', width: '15%'},
        {id: 'url', label: 'Original URL', width: '10%'},
    ]
    /*----------------------------------*/
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    /*----------------------------------*/
    let filterData = data && [...data.articles];
    if (textFilter.length > 2 && filterData) {
        filterData = filterData.filter((data) => data.title.toLowerCase().includes(textFilter.toLowerCase()))
    }
    /*----------------------------------*/
    if (isLoading) {
        return (
            <Box sx={loading}>
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                    }} style={{maxWidth: '150px'}}>
                    <Loading />
                </motion.div>
            </Box>
        )
    }
    if(error){
        return (
            <Box>Error Bad Request</Box>
        )
    }
    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    style={{width: column.width, backgroundColor: '#EFEFF3'}}>
                                    <Typography variant='subtitle1'>{column.label}</Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filterData && filterData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((article, index) => (
                                    <TableNewsRow key={index} article={article} index={index} columns={columns}/>
                                )
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={dataLength}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};
const loading = {
    paddingTop: '50px',
    display: 'flex',
    justifyContent: 'center'
}
export default TableNews;