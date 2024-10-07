import {useLocation} from "react-router-dom";
import {useEffect} from "react";


const PageTitle = ({ title }) => {

    const location = useLocation();

    const pagesTitle = {

        '/': 'News',

        '/authorization': 'Authorization',
        '/cards': 'Cards',
        '/cart': 'Cart',
        '/cleonews': 'News',
        '/faq': 'FAQ',
        '/profile': 'Profile',
        '/rules': 'Rules',
        '/logs': 'Logs',
        '/sms': 'SMS',
        '/proxy': 'Proxy',
        '/purchase': 'Purchase',
        '/support': 'Support',
        '/sellerpanel': 'Seller Panel',
    }

    title = pagesTitle[location.pathname]

    if(title === undefined) {
        title = 'Page not found'
    }

    useEffect(() => {
        document.title = title;
    }, [location, title]);

    return null;
}

export default PageTitle;