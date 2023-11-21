import NewsPage from '../page/NewsPage';
import ArticlePage from '../page/ArticlePage';

const NewsPageRoutes = {
    key: '/',
    path: '/',
    component: NewsPage,
}
const ArticlePageRoutes = {
    key: '/:id',
    path: `/:id`,
    component: ArticlePage,
}

export const routes = [
    NewsPageRoutes,
    ArticlePageRoutes
]