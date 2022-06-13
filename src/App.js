import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  return (
      <>
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500 dark:bg-slate-200'>
            <div className='flex items-center min-h-screen justify-center max-w-[1296px] mx-auto'>
                <div className='w-full bg-gradient-to-br from-slate-100 to-zinc-200 dark:bg-gradient-to-br dark:from-neutral-800 dark:to-zinc-800 lg:rounded-3xl rounded-none overflow-hidden'>
                    <Navbar/>
                    <Footer/>
                </div>
            </div>
        </div>
      </>
  );
}

export default App;
