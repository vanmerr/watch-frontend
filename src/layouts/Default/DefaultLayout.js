import Header from '~/components/Header'
import NavBar from '~/components/Navbar'

function DefaultLayout({children}) {
    return (
        <div>
            <Header/>
            <NavBar/>
            {children}
        </div>
    );
}

export default DefaultLayout;
