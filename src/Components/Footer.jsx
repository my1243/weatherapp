import React from "react";

const Footer = () => {
    return(
        <>
            <div className="dark:bg-zinc-800 dark:text-white text-black border-t-2 text-center text-sm lg:hidden p-2 ">
                <h1>Copyright &#169; 2022 by WEATHER Company. All rights reserved.</h1>
                <h1>API provided by <a className="text-blue-700" target={'_blank'} href="https://www.weatherapi.com/">Weather API</a></h1>
                <h1>Created with 💖 by <a className="text-blue-700" target={'_blank'} href="https://github.com/my1243">Mihir Yarra</a>😉</h1>
            </div>
        </>
    );
}

export default Footer;