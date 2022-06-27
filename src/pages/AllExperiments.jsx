/**
 * All Experiments Page (for a single experiment)
 */

// Dependencies
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Navbar from '../components/reusable/navbar';

const AllExperiments = () => {
    const { subjectName } = useParams();

    const handleExtractSubjectDetails = () => {
        const _id = subjectName.split('--').shift();
        const subName = subjectName
            .split('--')
            .pop()
            .split('-')
            .map(word => {
                const letter = word.charAt(0).toUpperCase() + word.slice(1);
                return letter;
            }).join(' ');
        return [_id, subName];
    }

    const [subjectId, currentSubject] = useMemo(handleExtractSubjectDetails,
        [subjectName])

    return (
        <div>
            <Navbar />
            {subjectId} | {currentSubject}
        </div>
    )
}

export default AllExperiments;