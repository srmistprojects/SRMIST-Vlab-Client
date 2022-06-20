/**
 * Application Routes
 */

// Dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Home from '../pages/Home';
import Subjects from '../pages/Subjects';
import AllExperiments from '../pages/AllExperiments';
import Experiment from '../pages/Experiment';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/subjects' element={<Subjects />} />
            <Route path='/:subjectName/experiments' element={<AllExperiments />} />
            <Route path='/:subjectName/experiments/:experimentName' element={<Experiment />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes;