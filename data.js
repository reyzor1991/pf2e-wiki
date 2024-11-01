export const data = [
    {
        id: 1,
        title: 'PF2e Automations',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module for automate action/feats/spells",
        "price": "free",
        html: "<strong>Module for automate action/feats/spells.</strong><hr/>" +
            "<i>Module has 250+ automated rules.</i><hr/>" +
            "<p>Apply effect/condition automatically, when fail saving throw/crit specialization/cast spell.</p>" +
            "<p>When module was installed, need to press Sync Rules button to apply new rules to system.</p>" +
            "<div class='flex'><img src='/pf2e-wiki/module/sync-message.png' alt='Sync Message' width='400'><img src='/pf2e-wiki/module/sync-btn.png' alt='Sync Btn' width='400'></div>" +
            "<p>By default, all rules and handlers are off</p>" +
            "<div class='flex'><img src='/pf2e-wiki/module/rules-empty.png' alt='rules empty' width='500'><img src='/pf2e-wiki/module/handlers.png' alt='rules empty' width='500'></div>" +
            "<p>To turn on rules, you could use Apply Suggestion/Activate All/Activate Filtered and after it press Save</p>" +
            "<p>Handlers could be activated only manually for now</p>" +
            "<p><pre><code>Hooks.on('ready', function () {\n" +
            "    if (game?.pf2eautomations?.registerMessageCreateHandler) {\n" +
            "        game.pf2eautomations.registerMessageCreateHandler('bane-test', async (message) => {\n" +
            "            console.log('handling banes spell');\n" +
            "        })\n" +
            "    }\n" +
            "})</code></pre></p>"
    },
    {
        id: 2,
        title: 'PF2e Hands Management (Reminder)',
        img: '/pf2e-wiki/img/hand.svg',
        "description": "Module to notify about hands management",
        "price": "free",
        html: ""
    },
    {
        id: 3,
        title: 'PF2e Party Sheet Helper',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Module for improving work with PF2e Party Sheet",
        "price": "free",
        html: ""
    },
    {
        id: 4,
        title: 'Pf2e Kingmaker Helper',
        img: '/pf2e-wiki/img/crown.svg',
        "description": "Module for improving work Kingmaker module",
        "price": "free",
        html: ""
    },
    {
        id: 5,
        title: 'PF2e Macros',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module adds macros for improving action/feats",
        "price": "free",
        html: ""
    },
    {
        id: 6,
        title: 'PF2e Troops Helper',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Module for working with troops. Transformation/control",
        "price": "free",
        html: ""
    },
    {
        id: 7,
        title: 'PF2e Summons Helper',
        img: '/pf2e-wiki/img/pentagram.svg',
        "description": "Module for Summon/Dismiss/Sustain minions",
        "price": "free",
        html: ""
    },
    {
        id: 8,
        title: 'PF2e Reaction Checker',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Small module to notify that actor can use reaction",
        "price": "free",
        html: ""
    },
    {
        id: 9,
        title: 'PF2e Dying',
        img: '/pf2e-wiki/img/skull.svg',
        "description": "Module for handling dying conditions",
        "price": "free",
        html: ""
    },
    {
        id: 11,
        title: 'PF2e Weapon Trait Options',
        img: '/pf2e-wiki/img/trait.svg',
        "description": "Module add possibility to add missed modifications to attack/damage roll",
        "price": "free",
        html: ""
    },
    {
        id: 12,
        title: 'PF2e Gatewalkers Helper',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Module provide feature for handling Devian Feats",
        "price": "free",
        html: ""
    },
    {
        id: 13,
        title: 'PF2e Message Editor',
        img: '/pf2e-wiki/img/message.svg',
        "description": "Module for editing messages in chat",
        "price": "free",
        html: ""
    },
    {
        id: 14,
        title: 'PF2e Initiative Effect',
        img: '/pf2e-wiki/img/2d6.svg',
        "description": "Module for homebrew rule, apply effect when roll 1/20 on initiative",
        "price": "free",
        html: ""
    },
    {
        id: 15,
        title: 'PF2e Eidolon Helper',
        img: '/pf2e-wiki/img/pentagram.svg',
        "description": "Module for improving work with Eidolons",
        "price": "free",
        html: ""
    },
    {
        id: 16,
        title: 'PF2e Flip Token',
        img: '/pf2e-wiki/img/flip.svg',
        "description": "Module to flip token image",
        "price": "free",
        html: ""
    },
    {
        id: 17,
        title: 'PF2e Automations (Patreon)',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module for automate action/feats/spells",
        "price": "patreon",
        html: "<strong>Module for automate action/feats/spells.</strong><hr/>" +
            "<i>Module has 900+ automated rules.</i><hr/>" +
            "<p>Apply effect/condition automatically, when fail saving throw/crit specialization/cast spell.</p>" +
            "<p>When module was installed, need to press Sync Rules button to apply new rules to system.</p>" +
            "<div class='flex'><img src='/pf2e-wiki/module/sync-message.png' alt='Sync Message' width='400'><img src='/pf2e-wiki/module/sync-btn.png' alt='Sync Btn' width='400'></div>" +
            "<p>By default, all rules and handlers are off</p>" +
            "<div class='flex'><img src='/pf2e-wiki/module/rules-empty.png' alt='rules empty' width='500'><img src='/pf2e-wiki/module/handlers.png' alt='rules empty' width='500'></div>" +
            "<p>To turn on rules, you could use Apply Suggestion/Activate All/Activate Filtered and after it press Save</p>" +
            "<p>Handlers could be activated only manually for now</p>" +
            "<p><pre><code>Hooks.on('ready', function () {\n" +
            "    if (game?.pf2eautomations?.registerMessageCreateHandler) {\n" +
            "        game.pf2eautomations.registerMessageCreateHandler('bane-test', async (message) => {\n" +
            "            console.log('handling banes spell');\n" +
            "        })\n" +
            "    }\n" +
            "})</code></pre></p>"
    },
    {
        id: 18,
        title: 'PF2e Recall Knowledge',
        img: '/pf2e-wiki/img/scroll.svg',
        "description": "Module for handling Recall Knowledge logic",
        "price": "patreon",
        html: ""
    },
    {
        id: 19,
        title: 'Pf2e Terrains',
        img: '/pf2e-wiki/img/mountain.svg',
        "description": "Module adds new type of regions",
        "price": "patreon",
        html: ""
    },
    {
        id: 20,
        title: 'Pf2e Target Helper',
        img: '/pf2e-wiki/img/target.svg',
        "description": "Module for improving work saving throws/applying damage",
        "price": "patreon",
        html: ""
    },
    {
        id: 21,
        title: 'PF2e Special',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "",
        "price": "patreon",
        html: ""
    },
    {
        id: 22,
        title: 'PF2e NPC Improvements',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Module add NPC Sheet improvement",
        "price": "patreon",
        html: ""
    },
    {
        id: 23,
        title: 'PF2e Monster Designer',
        img: '/pf2e-wiki/img/monster.svg',
        "description": "Module improves creating of new monsters and transforming exists",
        "price": "patreon",
        html: ""
    },
    {
        id: 24,
        title: 'PF2e Measure Helper',
        img: '/pf2e-wiki/img/mountain.svg',
        "description": "Module for working with templates",
        "price": "patreon",
        html: ""
    },
    {
        id: 25,
        title: 'PF2e Item Processor',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module handles work with armors/runes/materials",
        "price": "patreon",
        html: ""
    },
    {
        id: 26,
        title: 'PF2e Item Processor',
        img: '/pf2e-wiki/img/armor.svg',
        "description": "Module handles work with armors/runes/materials",
        "price": "patreon",
        html: ""
    },
    {
        id: 27,
        title: 'PF2e Condition Converter',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module for converting condition to effects",
        "price": "patreon",
        html: ""
    },
    {
        id: 28,
        title: 'PF2e Campaign Statistics',
        img: '/pf2e-wiki/img/scroll.svg',
        "description": "Module for saving encounter/base statistics",
        "price": "patreon",
        html: ""
    },
    {
        id: 29,
        title: 'PF2e Additional automations',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module adds specific automations like blind roll/flat checks",
        "price": "patreon",
        html: ""
    },
    {
        id: 30,
        title: 'PF2e Additional automations',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module adds specific automations like blind roll/flat checks",
        "price": "patreon",
        html: ""
    },
    {
        id: 31,
        title: 'PF2e Charactermancer',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Module for comfortable level up of character",
        "price": "patreon",
        html: ""
    },
    {
        id: 32,
        title: 'Novel messages',
        img: '/pf2e-wiki/img/scroll.svg',
        "description": "Show messages as popups",
        "price": "patreon",
        html: ""
    },
    {
        id: 33,
        title: 'PF2e Animist',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Handling Animist class",
        "price": "free",
        html: ""
    },
    {
        id: 99,
        title: 'Pseudo Afflictions',
        img: '/pf2e-wiki/img/skull.svg',
        "description": "Module for improving work with afflictions.",
        "price": "patreon",
        html: ""
    }
]