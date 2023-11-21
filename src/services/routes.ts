import NewsPage from '../page/NewsPage';
import ArticlePage from '../page/ArticlePage';

const NewsPageRoutes = {
    key: '/bintime',
    path: '/bintime',
    component: NewsPage,
}
const ArticlePageRoutes = {
    key: '/bintime/:id',
    path: '/bintime/:id',
    component: ArticlePage,
}
export const routes = [
    NewsPageRoutes,
    ArticlePageRoutes
]