import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import publicRoutes from './routes';
import { Fragment } from 'react';
import DefaultLayout from './layouts/Default/DefaultLayout';

function App() {
    return (
        <Router>
            <div className="App">
              <Routes>
                {
                  publicRoutes.map( route => {
                    const Page = route.component
                    let Layout = route.layout === null ? Fragment : DefaultLayout;
                    return <Route path = {route.path} element = {
                      <Layout>
                          <Page/>
                      </Layout>
                    }/>
                  })
                }
              </Routes>
            </div>
        </Router>
    );
}

export default App;
