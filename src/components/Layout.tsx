import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <>
        <Header />
        <main className='max-w-[920px] mx-auto my-0'>
            {children}
        </main>
        <Footer/>
    </>
    )
}

export default Layout