import React, {FC} from 'react';
import {IArticles} from "../models/INews";
import {ArticleSlice} from "../store/ArticleSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {TableCell, TableRow, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Image from "@jy95/material-ui-image";
import Url from "../svg/Url";
/*----------------------------------*/
type IDType = 'urlToImage' | 'title' | 'author' | 'description' | 'publishedAt' | 'url';
interface IColumn {
    id: IDType,
    label: string,
    width: string,
}
interface TableNewsRowProps{
    article: IArticles,
    columns: IColumn[],
    index: number
}
/*----------------------------------*/
const TableNewsRow:FC<TableNewsRowProps> = ({article, columns, index}) => {
    const dispatch = useAppDispatch();
    const articleIndex = useAppSelector(state => state.ArticleReducer.index)
    const navigate = useNavigate();
    /*----------------------------------*/
    const handleEventLink = (article: IArticles, index: number) => {
        dispatch(ArticleSlice.actions.articleAdd(article))
        dispatch(ArticleSlice.actions.indexAdd(index))
        navigate(`/bintime/${articleIndex}`);
    }
    /*----------------------------------*/
    return (
        <TableRow>
            {columns && columns.map(column => {
                let value = <div></div>;
                switch (column.id) {
                    case "urlToImage":
                        value = <Image src={article[column.id] || 'empty'} alt={article[column.id] ? 'image' : 'image empty'} style={image}/>;
                        break;
                    case "title":
                        value = <Typography variant='h5' onClick={() => handleEventLink(article, index)}>{article[column.id]}</Typography>;
                        break;
                    case "author":
                        value = <Typography variant='h4'>{article[column.id]}</Typography>;
                        break;
                    case "description":
                        value = <Typography variant='h4'>{article[column.id]}</Typography>;
                        break;
                    case "publishedAt":
                        let split = article[column.id].split('T');
                        value = <Typography variant='h4' style={{textAlign: 'center'}}>{split[0]}</Typography>;
                        break;
                    case "url":
                        value = <a href={article[column.id]} target='_blank'><Url/></a>
                        break;
                }
                return (
                    <TableCell key={column.id} style={{textAlign: column.id === 'url' ? 'center' : 'left'}}>
                        {value}
                    </TableCell>
                )
            })}
        </TableRow>
    );
};
const image = {
    objectFit: 'cover',
    paddingTop: '60px'
}
export default TableNewsRow;