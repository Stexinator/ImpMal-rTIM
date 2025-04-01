import BaseBuildingData from '../actor/data/baseBuildingData.js';
import ModuleData from '../item/data/moduleData.js';

export const registerDataModels = () => {
    Object.assign(CONFIG.Actor.dataModels, {
        'impmal-rtim.baseBuilding': BaseBuildingData
    });

    Object.assign(CONFIG.Item.dataModels, {
        'impmal-rtim.module': ModuleData
    });
};
