/**
 * Application Routes
 */

// Dependencies
import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Skeleton
import MainSkeleton from '../components/skeleton/main';
import ExperimentSkeleton from '../components/skeleton/experiment';

// Pages
const Home = lazy(() => import('../pages/Home'));
const Subjects = lazy(() => import('../pages/Subjects'));
const AllExperiments = lazy(() => import('../pages/AllExperiments'));
const Experiment = lazy(() => import('../pages/Experiment'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Project = lazy(() => import('../pages/Project'));

// Experiment Page
const Aim = lazy(() => import('../components/experiments/aim'));
const Theory = lazy(() => import('../components/experiments/theory'));
const Procedure = lazy(() => import('../components/experiments/procedure'));
const Observation = lazy(() => import('../components/experiments/observation'));
const Simulation = lazy(() => import('../components/experiments/simulation'));
const Videos = lazy(() => import('../components/experiments/videos'));
const References = lazy(() => import('../components/experiments/references'));

const AppRoutes = () => {

    const LazyLoadMain = ({ children }) => {
        return (
            <Suspense fallback={<MainSkeleton />}>
                {children}
            </Suspense>
        );
    }

    const LazyLoadExperiment = ({ children }) => {
        return (
            <Suspense fallback={<ExperimentSkeleton />}>
                {children}
            </Suspense>
        );
    }

    return (
        <Routes>
            <Route exact path='/' element={<LazyLoadMain><Home /></LazyLoadMain>} />
            <Route path='/project' element={<LazyLoadMain><Project /></LazyLoadMain>} />
            <Route path='/subjects' element={<LazyLoadMain><Subjects /></LazyLoadMain>} />
            <Route path='/:subjectName/experiments' element={<LazyLoadMain><AllExperiments /></LazyLoadMain>} />
            <Route path='/:subjectName/experiments/:experimentName' element={<LazyLoadMain><Experiment /></LazyLoadMain>} >
                <Route index element={<Navigate to='aim' />} />
                <Route path='aim' element={<LazyLoadExperiment><Aim /></LazyLoadExperiment>} />
                <Route path='theory' element={<LazyLoadExperiment><Theory /></LazyLoadExperiment>} />
                <Route path='procedure' element={<LazyLoadExperiment><Procedure /></LazyLoadExperiment>} />
                <Route path='observation' element={<LazyLoadExperiment><Observation /></LazyLoadExperiment>} />
                <Route path='simulation' element={<LazyLoadExperiment><Simulation /></LazyLoadExperiment>} />
                <Route path='videos' element={<LazyLoadExperiment><Videos /></LazyLoadExperiment>} />
                <Route path='references' element={<LazyLoadExperiment><References /></LazyLoadExperiment>} />
                <Route path='*' element={<Navigate to='aim' />} />
            </Route>
            <Route path='/not-found' element={<LazyLoadMain><NotFound /></LazyLoadMain>} />
            <Route path='*' element={<Navigate to='/not-found' />} />
        </Routes>
    )
}

export default AppRoutes;