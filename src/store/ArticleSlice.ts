import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IArticles} from "../models/INews";

interface IArticleState {
    index: number,
    article: IArticles[]
}

const initialState: IArticleState = {
    index: 1,
    article: []
}
export const ArticleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        articleAdd(state, action: PayloadAction<IArticles>) {
            state.article = [];
            state.article.push(action.payload)
        },
        indexAdd(state, action: PayloadAction<number>) {
            state.index = action.payload;
        }
    }
})

export default ArticleSlice.reducer;