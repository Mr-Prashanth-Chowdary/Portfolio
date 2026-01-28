import AboutContext from '../components/AboutContext';
import Nav from '../components/Nav';
export default function About() {
  return (
    <>
    <Nav/>
    <div className='flex flex-col items-center justify-center mb-10'>      
    <h1 className='text-6xl font-bold mt-20 mb-10'>ABOUT ME</h1>
    <AboutContext/>
    </div>
    </>
  )
}
