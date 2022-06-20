/**
 * Application Routes
 */

// Dependencies
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Home from '../pages/Home';
import Subjects from '../pages/Subjects';
import AllExperiments from '../pages/AllExperiments';
import Experiment from '../pages/Experiment';
import NotFound from '../pages/NotFound';

// Experiment Page
import Aim from '../components/experiments/aim';
import Theory from '../components/experiments/theory';
import Procedure from '../components/experiments/procedure';
import Observation from '../components/experiments/observation';
import Simulation from '../components/experiments/simulation';
import Videos from '../components/experiments/videos';
import References from '../components/experiments/references';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/subjects' element={<Subjects />} />
            <Route path='/:subjectName/experiments' element={<AllExperiments />} />
            <Route path='/:subjectName/experiments/:experimentName' element={<Experiment />} >
                <Route index element={<Navigate to='aim' />} />
                <Route path='aim' element={<Aim />} />
                <Route path='theory' element={<Theory />} />
                <Route path='procedure' element={<Procedure />} />
                <Route path='observation' element={<Observation />} />
                <Route path='simulation' element={<Simulation />} />
                <Route path='videos' element={<Videos />} />
                <Route path='references' element={<References />} />
                <Route path='*' element={<Navigate to='/aim' />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes;