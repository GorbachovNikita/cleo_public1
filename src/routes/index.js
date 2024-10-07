import News from "../pages/news/News/News";
import Authorization from "../pages/Authorization/Authorization";
import Cards from "../pages/Cards/Cards";
import FAQ from "../pages/FAQ/FAQ";
import Profile from "../pages/Profile/Profile";
import Rules from "../pages/Rules/Rules";
import Cart from '../pages/Cart/Cart'
import Logs from '../pages/Logs/Logs';
import Proxy from '../pages/Proxy/Proxy';
import SMS from '../pages/SMS/SMS';
import Purchase from '../pages/Purchase/Purchase';
import SellerPanel from "../pages/SellerPanel/SellerPanel";
import Support from "../pages/Support/Support";

export const privateRouters = [

    {path: '/', element: News},
]

export const publicRoutes = [

    {path: '/', element: News},
    {path: '/cards', element: Cards},
    {path: '/logs', element: Logs},
    {path: '/proxy', element: Proxy},
    {path: '/sms', element: SMS},
    {path: '/authorization', element: Authorization},
    {path: '/cart', element: Cart},
    {path: '/faq', element: FAQ},
    {path: '/profile', element: Profile},
    {path: '/rules', element: Rules},
    {path: '/purchase', element: Purchase},
    {path: '/sellerpanel', element: SellerPanel},
    {path: '/support', element: Support},
]