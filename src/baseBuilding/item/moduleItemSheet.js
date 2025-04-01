export default class ModuleItemSheet extends ImpMalItemSheet {
    /** @override */
    get template() {
        return `modules/impmal-rtim/baseBuilding/templates/module-sheet.hbs`;
    }

    /** @override */
    async getData() {
        const data = await super.getData();

        data.enriched = foundry.utils.expandObject({
            'notes.player': await TextEditor.enrichHTML(data.item.system.notes?.player, {
                relativeTo: this.item,
                async: true
            }),
            'notes.gm': await TextEditor.enrichHTML(data.item.system.notes?.gm, { relativeTo: this.item, async: true }),
            'levelZeroEffect': await TextEditor.enrichHTML(data.item.system.levelZeroEffect, {
                relativeTo: this.item,
                async: true
            }),
            'levelOneEffect': await TextEditor.enrichHTML(data.item.system.levelOneEffect, {
                relativeTo: this.item,
                async: true
            }),
            'levelTwoEffect': await TextEditor.enrichHTML(data.item.system.levelTwoEffect, {
                relativeTo: this.item,
                async: true
            }),
            'levelThreeEffect': await TextEditor.enrichHTML(data.item.system.levelThreeEffect, {
                relativeTo: this.item,
                async: true
            }),
            'levelFourEffect': await TextEditor.enrichHTML(data.item.system.levelFourEffect, {
                relativeTo: this.item,
                async: true
            }),
            'levelFiveEffect': await TextEditor.enrichHTML(data.item.system.levelFiveEffect, {
                relativeTo: this.item,
                async: true
            })
        });

        return data;
    }
}
