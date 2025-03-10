import React, { useState } from 'react';
import ChooseOption from './ChooseOption/ChooseOption';
import ListProgresSteps from './ListSteps/ListProgresSteps';
import AddYourPet from './AddYourPet/AddYourPet';
import AddSellPet from './AddSellPet/AddSellPet';
import AddLostPet from './AddLostPet/AddLostPet';
import AddInGoodHandsPet from './AddInGoodHandsPet/AddInGoodHandsPet';

export default function AddPetForm() {
    const [stepNumber, setStepNumber] = useState(2);
    const [active, setActive] = useState(1);
    const nextForm = () => {
        setStepNumber(stepNumber + 1);
    };
    const beforeForm = () => {
        setStepNumber(stepNumber - 1);
    };
    const activeOption = index => {
        setActive(index + 1);
    };
    const arraySteps = ['Choose  option', 'Personal details', 'More info'];
    const arrayOption = ['your pet', 'sell', 'lost/found', 'in good hands'];
    return (
        <div>
            {/* {stepNumber === 1 && <ChooseOption
                active={active}
                activeOption={activeOption}
                arrayOption={arrayOption}
                nextForm={nextForm}
                beforeForm={beforeForm}
                stepNumber={stepNumber}
            >
                <ListProgresSteps
                    arraySteps={arraySteps}
                    stepNumber={stepNumber}
                />
            </ChooseOption>} */}
            {/* <AddYourPet
                nextForm={nextForm}
                beforeForm={beforeForm}
                stepNumber={stepNumber}
            >
                <ListProgresSteps
                    arraySteps={arraySteps}
                    stepNumber={stepNumber}
                />
            </AddYourPet> */}
            {/* <AddSellPet
                nextForm={nextForm}
                beforeForm={beforeForm}
                stepNumber={stepNumber}
            >
                <ListProgresSteps
                    arraySteps={arraySteps}
                    stepNumber={stepNumber}
                />
            </AddSellPet> */}
            {/* <AddLostPet
                nextForm={nextForm}
                beforeForm={beforeForm}
                stepNumber={stepNumber}
            >
                <ListProgresSteps
                    arraySteps={arraySteps}
                    stepNumber={stepNumber}
                />
            </AddLostPet> */}
            <AddInGoodHandsPet
                nextForm={nextForm}
                beforeForm={beforeForm}
                stepNumber={stepNumber}
            >
                <ListProgresSteps
                    arraySteps={arraySteps}
                    stepNumber={stepNumber}
                />
            </AddInGoodHandsPet>
        </div>
    );
}
