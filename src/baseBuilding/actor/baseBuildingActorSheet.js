export default class BaseBuildingActorSheet extends ImpMalActorSheet {
    get template() {
        return `modules/impmal-rtim/baseBuilding/templates/baseBuilding-sheet.hbs`;
    }

    async getData() {
        let data = await super.getData();

        data.modules = this.organizeModules(data);
        data.actor.system.totalLevels = data.modules.reduce((levels, module) => levels + module.system.level, 0);
        return data;
    }

    organizeModules(data) {
        return data.actor.items.filter(item => item.type === 'impmal-rtim.module');
    }
}
