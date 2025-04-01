const fields = foundry.data.fields;

export default class ModuleData extends StandardItemModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            description: new fields.StringField({ initial: '' }),
            level: new fields.NumberField({ initial: 0 }),

            levelZeroEffect: new fields.StringField({ initial: '' }),
            levelOneEffect: new fields.StringField({ initial: '' }),
            levelTwoEffect: new fields.StringField({ initial: '' }),
            levelThreeEffect: new fields.StringField({ initial: '' }),
            levelFourEffect: new fields.StringField({ initial: '' }),
            levelFiveEffect: new fields.StringField({ initial: '' })
        };
    }

    async summaryData() {
        let data = await super.summaryData();
        data.details.item.effect = 'blablabla';
        return data;
    }
}
