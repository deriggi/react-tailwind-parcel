import React from "react";
import ReactDOM from "react-dom";
import './style.css';

const Index = () => {
//   return <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
//   <div className="sm:flex sm:items-center px-6 py-4">
//     <img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars2.githubusercontent.com/u/170809?s=460&v=4" alt=""/>
//     <div className="text-center sm:text-left sm:flex-grow">
//       <div className="mb-4">
//         <p className="text-xl leading-tight">Adam Jones</p>
//         <p className="text-sm leading-tight text-grey-dark">Developer at NothingWorks Inc.</p>
//       </div>
//       <div>
//         <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
//       </div>
//     </div>
//   </div>
// </div>;

return  <div class = "pin absolute flex items-center justify-center  bg-overlay" >
 
 <div className="w-full max-w-xs bg-white mx-auto mt-5 shadow-md p-4" >
        
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-full-name" type="text" placeholder="Jane Doe" ></input>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
            Password
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-full-name" type="text" placeholder="password"></input>
          </div>
        </div>
        </div> 
        </div>;
  

};

ReactDOM.render(<Index />, document.getElementById("index"));