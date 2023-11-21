import React, {FC, useState} from 'react';
import TableFilter from "../component/TableFilter";
import TableNews from "../component/TableNews";
import {Container} from "@mui/material";
import {ISelectFilter} from "../models/ISelectFilter";
/*----------------------------------*/
const NewsPage: FC = () => {
    const [selectFilter, setSelectFilter] = useState<ISelectFilter>({category: 'general', country: 'ua'});
    const [textFilter, setTextFilter] = useState<string>('');
    /*----------------------------------*/
    return (
        <Container maxWidth='xl' className='news-page container'>
            <TableFilter setSelectFilter={setSelectFilter} selectFilter={selectFilter} setTextFilter={setTextFilter}/>
            <TableNews selectFilter={selectFilter} textFilter={textFilter}/>
        </Container>
    );
};

export default NewsPage;