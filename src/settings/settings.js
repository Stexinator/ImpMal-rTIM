Hooks.on('init', () => {
    registerSettings();

    foundry.utils.mergeObject(game.impmal.config.disciplines, {
        waaagh: "WAAAGH!"
    });

    foundry.utils.mergeObject(game.impmal.config.corruptionType, {
        exaltation: "Exaltation",
        revelation: "Revelation",
        cosmeticmutation: "Cosmetic Mutation"
    });

    if (game.settings.get("impmal-rtim", "alternativeInitiative") === true) {
        CONFIG.Combat.initiative = {
            formula: game.settings.get("impmal-rtim", "alternativeInitiativeFormula"),
        };
    }
});

Hooks.on('renderChatMessage', (message, html, messageData) => {
    if (game.settings.get("impmal-rtim", "computeDoublesAll") === true) {
        if (message.content.includes(game.i18n.localize("IMPMAL.Fumble")) || message.content.includes(game.i18n.localize("IMPMAL.Critical"))) {
            return true;
        }
        if ((message.rolls[0].total % 11 === 0) || message.rolls[0].total === 100) {
            let toInsert = html[0].querySelector('.sl').textContent.includes('+') ? game.i18n.localize("IMPMAL.Critical") : game.i18n.localize("IMPMAL.Fumble");
            html[0].querySelector('.tags').insertAdjacentHTML('beforeend', `<div>${toInsert}</div>`)
        }
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

    game.settings.register("impmal-rtim", "computeDoublesAll", {
        name: "Add Critical/Fumble on all tests",
        hint: "Not all tests add Critical/Fumble on tests. This will add a tag below the result.",
        scope: "world",
        config: true,
        default: false,
        requiresReload: false,
        type: Boolean
    });
}