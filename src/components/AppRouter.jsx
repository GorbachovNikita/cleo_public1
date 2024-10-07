import React, {useContext} from 'react';
import {privateRouters, publicRoutes} from "../routes";
import {Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const AppRouter = observer(() => {

    const {user} = useContext(Context)

    if(user.isAuth === true) {
        return (
            <Routes>
                {privateRouters.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element />}
                        key={route.path}
                    />
                )}
            </Routes>
        )
    }else {
        return (
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element />}
                        key={route.path}
                    />
                )}
            </Routes>
        )
    }
});

export default AppRouter;