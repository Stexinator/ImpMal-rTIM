import BaseBuildingActorSheet from '../actor/baseBuildingActorSheet.js';
import ModuleItemSheet from '../item/moduleItemSheet.js';

export const registerSheets = () => {
    Actors.registerSheet('impmal-rtim', BaseBuildingActorSheet, {
        types: ['impmal-rtim.baseBuilding'],
        makeDefault: true
    });
    Items.registerSheet('impmal-rtim', ModuleItemSheet, {
        types: ['impmal-rtim.module'],
        makeDefault: true
    });
};
