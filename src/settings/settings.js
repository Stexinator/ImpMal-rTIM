Hooks.on('init', () => {
    registerSettings();

    if (game.settings.get("impmal-rtim", "alternativeInitiative") == true) {
        CONFIG.Combat.initiative = {
            formula: game.settings.get("impmal-rtim", "alternativeInitiativeFormula"),
        };
    }
});


function registerSettings() {
    game.settings.register("impmal-rtim", "alternativeInitiative", {
        name: "Alternative Initiative",
        hint: "Use alternative initiative from the formula below. Requires restart.",
        scope: "world",
        config: true,
        default: false,
        requiresReload: true,
        type: Boolean
    });

    game.settings.register("impmal-rtim", "alternativeInitiativeFormula", {
        name: "Alternative Initiative Formula",
        scope: "world",
        config: true,
        default: "d10 + @combat.initiative + @skills.reflexes.total/100",
        requiresReload: true,
        type: String
    });
}