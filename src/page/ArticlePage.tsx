import React, {FC} from 'react';
import {Box, Container, Typography} from "@mui/material";
import {useAppSelector} from "../hooks/redux";
import { useNavigate } from "react-router-dom";
import Arrow from '../svg/Arrow';
import Image from "@jy95/material-ui-image";
/*----------------------------------*/
const ArticlePage: FC = () => {
    const article = useAppSelector(state => state.ArticleReducer.article)
    const navigate = useNavigate();
    console.log(article, 'article')
    /*----------------------------------*/
    const handleEventBack = () => {
        navigate(`/`);
    }
    /*----------------------------------*/
    return (
        <Box className='article-page container'>
            {article.map((item, index)=>(
                <Box key={index}>
                    <Container maxWidth='lg'>
                        <Box sx={articleTitle}><Box onClick={handleEventBack} sx={articleArrow}><Arrow /></Box><Typography variant='h2'>{item.title}</Typography></Box>
                        <Box sx={articleInfo}>
                            <Box>
                                <Typography variant='subtitle2'>Source: {item.source.name}</Typography>
                            </Box>
                            <Box>
                                <Typography variant='subtitle2'>Public date: {item.publishedAt.split('T')[0]}</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box><Typography variant='h3' sx={articleDescriptionTitle}>Description</Typography></Box>
                            <Box><Typography variant='subtitle1'>{item.description ? item.description : 'Content is empty!'}</Typography></Box>
                        </Box>
                    </Container>
                    <Box sx={articleImageContent}><Image src={item.urlToImage} style={articleImage}/></Box>
                    <Container maxWidth='lg'>
                        <Box>
                            <Box><Typography variant='h3' sx={articleContentTitle}>Content</Typography></Box>
                            <Box><Typography variant='subtitle1'>{item.content ? item.content : 'Content is empty!'}</Typography></Box>
                        </Box>
                        <Box sx={articleAuthors}>
                            <Typography variant='subtitle2'>Authors: {item.author}</Typography>
                        </Box>
                    </Container>
                </Box>
            ))}
        </Box>
    );
};

const articleTitle = {
    display: 'flex',
    alignItems: 'baseline',
    paddingBottom: '40px',
}
const articleArrow = {
    cursor: 'pointer',
    paddingRight: '20px',
}
const articleInfo = {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '20px',
}
const articleDescriptionTitle = {
    paddingBottom: '20px',
}
const articleImageContent = {
    padding: '20px 0',
}
const articleImage = {
    paddingTop: '500px',
    objectFit: 'fill',
}
const articleContentTitle = {
    paddingBottom: '20px',
}
const articleAuthors = {
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(239, 239, 243, 1)'
}
export default ArticlePage;