/**
 * Single Experiment Page
 */

// Dependencies
import React from 'react';
import { Outlet } from 'react-router-dom';

const Experiment = () => {
    return (
        <div>
            Experiment
            <Outlet />
        </div>
    )
}

export default Experiment
