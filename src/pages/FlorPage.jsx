import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from '../component2/HomeView';
import WorkView from '../component2/WorkView';
import SeeMeView from '../component2/SeeMeView';

// const FlorPage = () => {
//  return (
//    <div>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomeView />} />
//         <Route path="/work" element={<WorkView />} />
//         <Route path="/about" element={<SeeMeView />} />
//         {/* Add other routes as needed */}
//         <Route path="*" element={<HomeView />} />
//       </Routes>
//     </BrowserRouter>
//    </div>
//  )
// }

const FlorPage = () => {
    return(
        <>
        <HomeView />
        <WorkView />
        <SeeMeView />
        </>
    )
}
export default FlorPage;