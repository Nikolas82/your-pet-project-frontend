import React from 'react';
import PersonalDetails from './PersonalDetails/PersonalDetails';

export default function AddInGoodHandsPet({
    children,
    nextForm,
    beforeForm,
    stepNumber,
}) {
    return (
        <PersonalDetails
            children={children}
            nextForm={nextForm}
            beforeForm={beforeForm}
            stepNumber={stepNumber}
        />
    );
}
