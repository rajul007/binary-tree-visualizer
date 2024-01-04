import { useState } from "react";

export const useLevelOrderArray = () => {
    const [levelOrderArray, setLevelOrderArray] = useState(null);

    const generateLevelOrderArray = (treeInput) => {
        // Remove extra spaces
        const cleanedInput = treeInput.replace(/\s/g, '');

        if (cleanedInput.includes(',')) {
            const resultArray = cleanedInput.split(',').map(value => {
                const trimmedValue = value.trim();
                return trimmedValue.toLowerCase() === 'null' ? null : Number.parseInt(trimmedValue, 10);
            });
            setLevelOrderArray(resultArray.filter(num => !isNaN(num)));
        }
        else {
            setLevelOrderArray(cleanedInput.trim().toLowerCase() === 'null' ? null : cleanedInput.trim());
        }
    };

    return { levelOrderArray, generateLevelOrderArray };
}
