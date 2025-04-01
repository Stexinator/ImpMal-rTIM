const fields = foundry.data.fields;

export default class BaseBuildingData extends BaseActorModel {
    static defineSchema() {
        return {
            ...super.defineSchema(),
            levelLimit: new fields.NumberField({ initial: 0 }),
            totalLevelsLimit: new fields.NumberField({ initial: 0 }),
            totalLevels: new fields.NumberField({ initial: 0 }),
            availableUpgradePoints: new fields.NumberField({ initial: 0 }),
            spentUpgradePoints: new fields.NumberField({ initial: 0 })
        };
    }
}
