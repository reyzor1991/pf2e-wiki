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
        html: "<p>Notify that player uses more than 2 hands</p>" +
            "<p>Notify that player can't cast spell because need free hand</p>" +
            "<p>Also notify when pc tries to use action when under specific conditions</p>"
    },
    {
        id: 3,
        title: 'PF2e Party Sheet Helper',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Module for improving work with PF2e Party Sheet",
        "price": "free",
        html: "<p class='c'><strong>Module contains few feature to improve Party Sheet</strong></p>" +
            "<br/>" +
            "<p><strong>Roll template</strong></p>" +
            "<p>Create roll template when click on skill secret if Meta/Ctrl) (copy check if Shift)</p>" +
            "<video width='320' height='240' controls><source src='https://github.com/reyzor1991/pf2e-wiki/assets/6688366/58bc0bdc-a33a-4951-9e10-e79e0115b92f' type='video/mp4'></video>" +
            "<br/>" +
            "<p><strong>Button for create encounter for party</strong></p>" +
            "<br/>" +
            "<p><strong>Buttons to call Travel Duration Calculators</strong></p>" +
            "<br/>" +
            "<p><strong>Health Setting</strong></p>" +
            "<p>PCs see heath bar as status instead of numbers</p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/health-setting.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/party/party-sheet-health.png' alt=''></div></p>" +
            "<br/>" +
            "<p><strong>Party Leader</strong></p>" +
            "<p>Show leader of party, leader of party is first in list</p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/leader-setting.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/party/party-leader.png' alt=''></div></p>" +
            "<br/>" +
            "<p><strong>Hide Wealth from PCs</strong></p>" +
            "<br/>" +
            "<p><strong>Party Sharing</strong></p>" +
            "<video width='320' height='240' controls><source src='https://github.com/reyzor1991/pf2e-wiki/assets/6688366/c89e9243-b928-4a74-ac65-ac631174817d' type='video/mp4'></video>" +
            "<br/>" +
            "<p><strong>Subsytems</strong></p>" +
            "<p>Enable subsystem</p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/subsystem-setting.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/party/sub1.png' alt=''><img class='scale-02' src='/pf2e-wiki/module/party/sub2.png' alt=''></div></p>" +
            "<video width='320' height='240' controls><source src='https://github.com/reyzor1991/pf2e-wiki/assets/6688366/45dc1fcc-3d75-4b54-be67-9bcf1ad1c038' type='video/mp4'></video>" +
            "<br/>" +
            "<p><strong>Inline Influence checks\n</strong></p>" +
            "<p><pre><code>@Check[type:diplomacy|dc:33|traits:action:influence,npc-name:NPC 1]{Make impression on an NPC 1}</code></pre></p>" +
            "<p><pre><code>@Check[type:diplomacy|dc:15|traits:action:chases,npc-name:Sajan]{Sajan scares crowd}</code></pre></p>" +
            "<p><i>action:influence</i> - necessary to trigger skill check</p>" +
            "<p><i>npc-name:NPC 1</i> - necessary to write to subsystem npc name</p>" +
            "<p><pre><code>Points of result\n" +
            "     criticalFailure: -1\n" +
            "     failure: 0\n" +
            "     success: 1\n" +
            "     criticalSuccess: 2" +
            "</code></pre></p>" +
            "<br/>" +
            "<p><strong>Achivments</strong></p>" +
            "<p>Create achivments for PCs</p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/ach-setting.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/party/ach.png' alt=''></div></p>" +
            "<br/>" +
            "<p><strong>Show encounter</strong></p>" +
            "<p>Show base info about PCs in party</p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/enc-setting.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/party/enc.png' alt=''></div></p>" +
            "<br/>" +
            "<p><strong>Afflictions</strong></p>" +
            "<p>Show afflictions(effects with affliction in name) applied to PCs</p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/aff-setting.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/party/aff.png' alt=''></div></p>" +
            "<br/>" +
            "<p><strong>Show effects</strong></p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/eff-setting.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/party/effects.png' alt=''></div></p>" +
            "<br/>" +
            "<p><strong>Show focus points</strong></p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/fp.png' alt=''></div></p>" +
            "<br/>" +
            "<p><strong>Show spell info</strong></p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/spellinfo.png' alt=''></div></p>" +
            "<br>" +
            "<p><strong>Print inventory</strong></p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/print-set.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/party/print.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/party/print-example.png' alt=''></div></p>" +
            "<br>" +
            "<p><strong>Hide general info</strong></p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/hide-set.png' alt=''></div></p>" +
            "<br>" +
            "<p><strong>Max Encumbrance</strong></p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/enc-setting.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/party/encu.png' alt=''></div></p>" +
            "<br>" +
            "<p><strong>Store last skills</strong></p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/skills.png' alt=''></div></p>" +
            "<br>" +
            "<p><strong>Party points</strong></p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/points-set.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/party/points.png' alt=''></div></p>" +
            "<br>" +
            "<p><strong>Damage All</strong></p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/party/damage.png' alt=''></div></p>" +
            "<br>" +
            "<br>"
    },
    {
        id: 4,
        title: 'Pf2e Kingmaker Helper',
        img: '/pf2e-wiki/img/crown.svg',
        "description": "Module for improving work Kingmaker module",
        "price": "free",
        html: "<p><strong>Colored Hexes</strong></p>" +
            "<p>Show colored hexes (toggled btn) :</p>" +
            "<p>- Reconnoitered as green (default setting)</p>" +
            "<p>- Mapped as blue (default setting)</p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/king/set.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/king/def.png' alt=''></div></p>" +
            "<br>" +
            "<p><strong>Resources</strong></p>" +
            "<p>GM/PC views. PC see only resources with checkbox “Show Camps and Commodities to Players</p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/king/res.png' alt=''></div></p>" +
            "<br>" +
            "<p><strong>Features</strong></p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/king/fea.png' alt=''></div></p>" +
            "<br>"+
            "<p><strong>Prepare Campsite</strong></p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/king/camp.png' alt=''></div></p>" +
            "<br>"
    },
    {
        id: 5,
        title: 'PF2e Macros',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module adds macros for improving action/feats",
        "price": "free",
        html: "<p></p>"
    },
    {
        id: 6,
        title: 'PF2e Troops Helper',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Module for working with troops. Transformation/control",
        "price": "free",
        html: "<p></p>"
    },
    {
        id: 7,
        title: 'PF2e Summons Helper',
        img: '/pf2e-wiki/img/pentagram.svg',
        "description": "Module for Summon/Dismiss/Sustain minions",
        "price": "free",
        html: "<p></p>"
    },
    {
        id: 8,
        title: 'PF2e Reaction Checker',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Small module to notify that actor can use reaction",
        "price": "free",
        html: "<p></p>"
    },
    {
        id: 9,
        title: 'PF2e Dying',
        img: '/pf2e-wiki/img/skull.svg',
        "description": "Module for handling dying conditions",
        "price": "free",
        html: "<p></p>"
    },
    {
        id: 11,
        title: 'PF2e Weapon Trait Options',
        img: '/pf2e-wiki/img/trait.svg',
        "description": "Module add possibility to add missed modifications to attack/damage roll",
        "price": "free",
        html: "<p></p>"
    },
    {
        id: 12,
        title: 'PF2e Gatewalkers Helper',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Module provide feature for handling Devian Feats",
        "price": "free",
        html: "<p></p>"
    },
    {
        id: 13,
        title: 'PF2e Message Editor',
        img: '/pf2e-wiki/img/message.svg',
        "description": "Module for editing messages in chat",
        "price": "free",
        html: "<p></p>"
    },
    {
        id: 14,
        title: 'PF2e Initiative Effect',
        img: '/pf2e-wiki/img/2d6.svg',
        "description": "Module for homebrew rule, apply effect when roll 1/20 on initiative",
        "price": "free",
        html: "<p></p>"
    },
    {
        id: 15,
        title: 'PF2e Eidolon Helper',
        img: '/pf2e-wiki/img/pentagram.svg',
        "description": "Module for improving work with Eidolons",
        "price": "free",
        html: "<p></p>"
    },
    {
        id: 16,
        title: 'PF2e Flip Token',
        img: '/pf2e-wiki/img/flip.svg',
        "description": "Module to flip token image",
        "price": "free",
        html: "<p></p>"
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
            "<p><strong>Recomendation</strong> Click Activate All Rules after it click Apply Suggestions (Deactivate only) and save rules</p>" +
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
        html: "<p></p>"
    },
    {
        id: 19,
        title: 'Pf2e Terrains',
        img: '/pf2e-wiki/img/mountain.svg',
        "description": "Module adds new type of regions",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 20,
        title: 'Pf2e Target Helper',
        img: '/pf2e-wiki/img/target.svg',
        "description": "Module for improving work saving throws/applying damage",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 21,
        title: 'PF2e Special',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 22,
        title: 'PF2e NPC Improvements',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Module add NPC Sheet improvement",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 23,
        title: 'PF2e Monster Designer',
        img: '/pf2e-wiki/img/monster.svg',
        "description": "Module improves creating of new monsters and transforming exists",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 24,
        title: 'PF2e Measure Helper',
        img: '/pf2e-wiki/img/mountain.svg',
        "description": "Module for working with templates",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 25,
        title: 'PF2e Item Processor',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module handles work with armors/runes/materials",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 26,
        title: 'PF2e Item Processor',
        img: '/pf2e-wiki/img/armor.svg',
        "description": "Module handles work with armors/runes/materials",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 27,
        title: 'PF2e Condition Converter',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module for converting condition to effects",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 28,
        title: 'PF2e Campaign Statistics',
        img: '/pf2e-wiki/img/scroll.svg',
        "description": "Module for saving encounter/base statistics",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 29,
        title: 'PF2e Additional automations',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module adds specific automations like blind roll/flat checks",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 30,
        title: 'PF2e Additional automations',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module adds specific automations like blind roll/flat checks",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 31,
        title: 'PF2e Charactermancer',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Module for comfortable level up of character",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 32,
        title: 'Novel messages',
        img: '/pf2e-wiki/img/scroll.svg',
        "description": "Show messages as popups",
        "price": "patreon",
        html: "<p></p>"
    },
    {
        id: 33,
        title: 'PF2e Animist',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Handling Animist class",
        "price": "free",
        html: "<p></p>"
    },
    {
        id: 99,
        title: 'Pseudo Afflictions',
        img: '/pf2e-wiki/img/skull.svg',
        "description": "Module for improving work with afflictions.",
        "price": "patreon",
        html: "<p></p>"
    }
]