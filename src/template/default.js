import React from 'react'
import { Route } from 'react-router-dom'
import routes from '../routes';
const Layout = (props) => {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        render={(props) => <prop.component {...props} />}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    return (
        <div >
            <div className="wrapper layout">
                <main id="main" class="layout_content">
                    <div className="">
                        <div>
                            background-color: hsl(0, 0%, 100%);
                        </div>
                    </div>
                    {getRoutes(routes)}
                </main>
            </div>
        </div>
    )
}
export default Layout