import {useLocation} from "react-router-dom";
import {useEffect} from "react";


const PageTitle = ({ title }) => {

    const location = useLocation();

    const pagesTitle = {

        '/': 'Товары',

        '/authorization': 'Авторизация',
        '/cards': 'Товары',
        '/cards/:id': 'Товар',
        '/cleonews': 'Новости',
        '/faq': 'FAQ',
        '/profile': 'Профиль',
        '/rules': 'Правила',
    }

    title = pagesTitle[location.pathname]

    if(title === undefined) {
        title = 'Страница не найдена'
    }

    useEffect(() => {
        document.title = title;
    }, [location, title]);

    return null;
}

export default PageTitle;