const listOfFeatures = [
    {
        name: "Actions",
        list: [
            "Aid",
            "Anadi Venom",
            "Arcane Cascade",
            "Avoid Notice",
            "Battle Medicine",
            "Bend Time",
            "Blizzard Evasion",
            "Bullet Dancer Stance",
            "Calculate Threats",
            "Call Upon the Brightness",
            "Catharsis",
            "Channel Elements",
            "Clue In",
            "Conduct Energy",
            "Conjure Bullet",
            "Cover Tracks",
            "Crawl",
            "Critical Specialization",
            "Daydream Trance",
            "Debilitating Strike",
            "Defend",
            "Demoralize",
            "Devise a Stratagem",
            "Disarm",
            "Drop Prone",
            "Energy Shot",
            "Entity's Resurgence",
            "Escape",
            "Exploration Activity",
            "Fade Into Daydreams",
            "Feint",
            "Follow the Expert",
            "Frightful Presence",
            "Grapple",
            "Harrow the Fiend",
            "Hunt Prey",
            "Hustle",
            "Initiative actions",
            "Investigate",
            "Jinx",
            "Liberating Step",
            "Master Strike",
            "Prone When Critical Fails Acrobatic Skill",
            "Rage",
            "Recall Under Pressure",
            "Refocus",
            "Repeat a Spell",
            "Retributive Strike",
            "Screaming Skull",
            "Search",
            "Self effect",
            "Selfish Shield",
            "Soaring Flight",
            "Spin Tale",
            "Stand",
            "Steal Shadow",
            "Subsist",
            "Swallow Whole",
            "Tail Toxin",
            "Tenacious Stance",
            "Track",
            "Treat Disease",
            "Treat Wounds",
            "Trip",
            "True Shape Bomb",
            "Unleash Psyche",
            "Walking the Cardinal Paths"
        ],
    },
    {
        name: "Feats",
        list: [
            "Accelerating Touch",
            "Acknowledge Fan",
            "Aldori Parry",
            "Anoint Ally",
            "Apparition Sense",
            "Arcane Propulsion",
            "Armor in Earth",
            "Aura of Courage",
            "Avenge In Glory",
            "Blessed Armament",
            "Bloodlines",
            "Bon Mot",
            "Bone Spikes",
            "Bone Swarm",
            "Bristle",
            "Buckler Dance",
            "Cat Nap",
            "Catfolk Dance",
            "Ceremony of Protection",
            "Channel The Godmind",
            "Channeling Block",
            "Chaotic Spell",
            "Clan's Edge",
            "Cobra Stance",
            "Combat Grab",
            "Connect the Dots",
            "Consolidated Overlay Panopticon",
            "Consult The Stars",
            "Core Cannon",
            "Crane Stance",
            "Crimson Shroud",
            "Critical Debilitation",
            "Cut from the Air",
            "Dash of Herbs",
            "Defensive Advance",
            "Defensive Instincts",
            "Defensive Recovery",
            "Deity's Protection",
            "Desert Wind",
            "Desperate Wrath",
            "Devoted Guardian",
            "Didactic Strike",
            "Dirty Trick",
            "Disarming Stance",
            "Disrupting Strikes",
            "Disruptive Stance",
            "Divine Aegis",
            "Divine Infusion",
            "Divine Wings",
            "Dragon Stance",
            "Dragon's Rage Wings",
            "Dualborn",
            "Dueling Dance",
            "Dueling Parry",
            "Duelist's Challenge",
            "Earth Impulse Junction",
            "Elemental Assault",
            "Elementalist Dedication",
            "Emblazon Armament",
            "Energize Wings",
            "Envenom Fangs",
            "Everstand Stance",
            "Exemplary Finisher",
            "Extravagant Parry",
            "Eye of the Arclords",
            "Fane's Fourberie",
            "Favorable Winds",
            "First Attack",
            "Forcible Energy",
            "Fortify Shield",
            "Fresh Produce",
            "Fulminating Shot",
            "Furnace Form",
            "Game Hunter",
            "Game Hunter Dedication",
            "Gathering Moss",
            "Geologic Attunement",
            "Ghost Strike",
            "Ghost Wrangler",
            "Ghosts in the Storm",
            "Giant's Lunge",
            "Giant's Stature",
            "Gorilla Stance",
            "Graceful Poise",
            "Guardian's Deflection",
            "Guardian's Embrace",
            "Guided Skill",
            "Guided by the Stars",
            "Harden Flesh",
            "Hardwood Armor",
            "Harrower Dedication",
            "Heaven's Thunder",
            "Heroic Recovery",
            "Hungry",
            "Hydraulic Deflection",
            "Impassable Wall Stance",
            "Impose Order",
            "Impose Order Psy",
            "Indomitable Spirit",
            "Intimidating Strike",
            "Ironblood Stance",
            "Jellyfish Stance",
            "Juvenile Flight",
            "Kip Up",
            "Known Weaknesses",
            "Life-Giving Magic",
            "Lunging Stance",
            "Maiden's Mending",
            "Marshal Dedication",
            "Martial Performance",
            "Masquerade of Seasons Stance",
            "Masterful Hunter",
            "Metal Carapace",
            "Metallic Skin",
            "Mighty Rage",
            "Mobile Shot Stance",
            "Monastic Archer Stance",
            "Monster Warden",
            "Mountain Stance",
            "Mountain Stronghold",
            "Multishot Stance",
            "Mutate Weapon",
            "Nanite Surge",
            "Oracle curse",
            "Oracular Warning",
            "Orchard's Endurance",
            "Overdrive",
            "Panache",
            "Paragon's Guard",
            "Peafowl Stance",
            "Pinpoint Poisoner",
            "Pistol Twirl",
            "Point Blank Stance",
            "Poison Weapon",
            "Powder Punch Stance",
            "Prayer-Touched Weapon",
            "Precious Ammunition",
            "Predictable",
            "Prevailing Position",
            "Propulsive Leap",
            "Psi Strikes",
            "Radiant Circuitry",
            "Rain of Embers Stance",
            "Raise a Tome",
            "Rapport",
            "Reactive Shield",
            "Reckless Abandon",
            "Red-Gold Mortality",
            "Reflective Ripple Stance",
            "Remove Champion's Resistance",
            "Renewed Vigor",
            "Repair Module",
            "Replenishment of War",
            "Ricochet Stance",
            "Root Magic",
            "Rough Terrain Stance",
            "Saoc Astrology",
            "Scars of Steel",
            "Sea Glass Guardians",
            "Seedpod",
            "Shadow Sight",
            "Shared Prey",
            "Shattershields",
            "Shed Tail",
            "Shield Warden",
            "Shooting Stars Stance",
            "Six Pillars Stance",
            "Sky and Heaven Stance",
            "Smite",
            "Sniping Duo Dedication",
            "Song",
            "Spark Fist",
            "Spike Skin",
            "Spiral Sworn",
            "Starlight Armor",
            "Stoked Flame Stance",
            "Stone Body",
            "Stoney Deflection",
            "Strategic Bypass",
            "Striking Retribution",
            "Stumbling Stance",
            "Stunning Blows",
            "Tamper",
            "Tangled Forest Stance",
            "Terrified Retreat",
            "The Oscillating Wave",
            "Thermal Nimbus",
            "Tidal Shield",
            "Tiger Stance",
            "Tiller's Drive",
            "Towering Presence",
            "Tremor",
            "Tumble Behind",
            "Tunnel Wall",
            "Twinned Defense",
            "Ursine Avenger Form",
            "Victorious Vigor",
            "Vitality-Manipulating Stance",
            "Vivacious Bravado",
            "Warden's Boon",
            "Watchful Gaze",
            "Weapon Infusion",
            "Whirling Blade Stance",
            "Whirlwind Stance",
            "Wings Of Air",
            "Winter Sleet",
            "Wolf Jaws",
            "Wolf Stance"
        ]
    },
    {
        name: "Spells",
        list: [
            "Aberrant Form",
            "Aberrant Whispers",
            "Adapt Self",
            "Adaptive Ablation",
            "Aerial Form",
            "Agile Feet",
            "Agitate",
            "Agonizing Despair",
            "Albatross Curse",
            "Allegro",
            "Ancestral Form",
            "Ancestral Memories",
            "Ancestral Touch",
            "Angel Form",
            "Angelic Halo",
            "Angelic Wings",
            "Animal Feature",
            "Animal Form",
            "Animus Mine",
            "Ant Haul",
            "Anticipate Peril",
            "Apex Companion",
            "Aqueous Blast",
            "Arcane Countermeasure",
            "Armor of Bones",
            "Aromatic Lure",
            "Ash Cloud",
            "Ash Form",
            "Ashen Wind",
            "Athletic Rush",
            "Bane",
            "Battlefield Persistence",
            "Befuddle",
            "Bestial Curse",
            "Bind Undead",
            "Bless",
            "Blessing of Defiance",
            "Blindness",
            "Blood Vendetta",
            "Blood Ward",
            "Blur",
            "Boost Eidolon",
            "Bottle the Storm",
            "Briny Bolt",
            "Bullhorn",
            "Buzzing Bites",
            "Calm",
            "Canopy Crawler",
            "Celestial Brand",
            "Chromatic Armor",
            "Cinder Gaze",
            "Claws of the Otter",
            "Clawsong",
            "Cloak of Light",
            "Competitive Edge",
            "Conductive Weapon",
            "Cosmic Form",
            "Countless Eyes",
            "Courageous Anthem",
            "Daemon Form",
            "Dancing Shield",
            "Darkened Sight",
            "Darkvision",
            "Daze",
            "Deafness",
            "Death Ward",
            "Deep Sight",
            "Dehydrate",
            "Demon Form",
            "Detect Magic",
            "Devil Form",
            "Devouring Dark Form",
            "Diabolic Edict",
            "Dinosaur Form",
            "Dirge of Doom",
            "Discern Secrets",
            "Divine Decree",
            "Divine Wrath",
            "Dragon Form",
            "Eat Fire",
            "Element Embodied",
            "Elemental Absorption",
            "Elemental Form",
            "Elemental Gift",
            "Elemental Motion",
            "Elephant Form",
            "Embrace the Pit",
            "Endure",
            "Enduring Might",
            "Energy Absorption",
            "Energy Aegis",
            "Enlarge",
            "Entropic Wheel",
            "Envenom Companion",
            "Euphoric Renewal",
            "Evil Eye",
            "Evolution Surge",
            "Extend Boost",
            "Extract Poison",
            "Face in the Crowd",
            "False Vitality",
            "Fear",
            "Fear the Sun",
            "Ferrous Form",
            "Fey Form",
            "Fiery Body",
            "Fire Shield",
            "Flame Barrier",
            "Flame Dancer",
            "Flame Wisp",
            "Flashy Disappearance",
            "Fleet Step",
            "Flicker",
            "Flurry of Claws",
            "Fly",
            "Forbidding Ward",
            "Foresight",
            "Fortify Summoning",
            "Fortissimo Composition",
            "Freezing Rain",
            "Frostbite",
            "Gecko Grip",
            "Ghostly Shift",
            "Ghostly Weapon",
            "Glass Form",
            "Glass Shield",
            "Glimpse Weakness",
            "Glutton's Jaws",
            "Gravity Weapon",
            "Gray Shadow",
            "Guidance",
            "Guided Introspection",
            "Haste",
            "Healer's Blessing",
            "Heroism",
            "Hidden Mind",
            "Hidebound",
            "Hymn of Healing",
            "Ill Omen",
            "Illusory Disguise",
            "Illusory Shroud",
            "Infectious Enthusiasm",
            "Infuse Vitality",
            "Inner Upheaval",
            "Inscrutable Mask",
            "Insect Form",
            "Inside Ropes",
            "Instant Armor",
            "Iron Gut",
            "Juvenile Companion",
            "Lashunta's Life Bubble",
            "Laughing Fit",
            "Lay on Hands",
            "Levitate",
            "Life Boost",
            "Life Connection",
            "Life Link",
            "Life-Giving Form",
            "Lifelink Surge",
            "Light",
            "Lingering Composition",
            "Lucky Number",
            "Magic Hide",
            "Magic Stone",
            "Magic's Vessel",
            "Malignant Sustenance",
            "Mimic Undead",
            "Mirror Image",
            "Monstrosity Form",
            "Moon Frenzy",
            "Mountain Resilience",
            "Musical Accompaniment",
            "Mystic Armor",
            "Nature Incarnate",
            "Necromancer's Generosity",
            "Never Mind",
            "Nudge Fate",
            "Nudge the Odds",
            "Nymph's Token",
            "Oaken Resilience",
            "Object Memory",
            "One with the Land",
            "Ooze Form",
            "Organsight",
            "Painful Vibrations",
            "Paralyze",
            "Penumbral Disguise",
            "Pest Form",
            "Petrify",
            "Phantom Pain",
            "Phase Familiar",
            "Phoenix Ward",
            "Physical Boost",
            "Plant Form",
            "Pocket Library",
            "Practice Makes Perfect",
            "Primal Summons",
            "Prismatic Armor",
            "Prismatic Shield",
            "Protect Companion",
            "Protection",
            "Protective Wards",
            "Protector's Sphere",
            "Qi Form",
            "Qi Rush",
            "Rallying Anthem",
            "Rapid Adaptation",
            "Read the Air",
            "Regenerate",
            "Reinforce Eidolon",
            "Repel Metal",
            "Resist Energy",
            "Return the Favor",
            "Rousing Splash",
            "Runic Body",
            "Runic Weapon",
            "Sacred Form",
            "Safeguard Secret",
            "Sand Form",
            "See the Unseen",
            "Serrate",
            "Share Life",
            "Shield",
            "Shielded Arm",
            "Shields of the Spirit",
            "Shifting Form",
            "Shillelagh",
            "Shrink",
            "Silence",
            "Slow",
            "Song of Strength",
            "Soothe",
            "Soothing Words",
            "Speaking Sky",
            "Spiral of Horrors",
            "Spirit Sense",
            "Stabilize",
            "Stoke the Heart",
            "Stormwind Flight",
            "Stupefy",
            "Summoner's Visage",
            "Sure Strike",
            "Swarm Form",
            "Sweet Dream",
            "Synesthesia",
            "Tailwind",
            "Take Root",
            "Tempest Cloak",
            "Tempest Form",
            "Tempt Fate",
            "Thermal Remedy",
            "Thermal Stasis",
            "Thicket of Knives",
            "Thundering Dominance",
            "Touch of the Moon",
            "Touch of the Void",
            "Translocate",
            "Traveler's Transit",
            "Tremorsense",
            "Triple Time",
            "Unblinking Flame Aura",
            "Unblinking Flame Ignition",
            "Unbreaking Wave Vapor",
            "Unfettered Movement",
            "Untamed Form",
            "Untamed Shift",
            "Untwisting Iron Augmentation",
            "Untwisting Iron Pillar",
            "Unusual Anatomy",
            "Vapor Form",
            "Vision of Death",
            "Vision of Weakness",
            "Vital Beacon",
            "Vital Luminance",
            "Warp Step",
            "Wash Your Luck",
            "Weapon Surge",
            "Whispers of the Void",
            "Wind Jump",
            "Wooden Fists",
            "Zealous Conviction"
        ]
    },
    {
        name: "Equipment",
        list: [
            "Ablative Armor Plating",
            "Aeon Stone",
            "Aeon Stone Resonance",
            "Alchemist Goggles",
            "Alloy Orb",
            "Amphisbaena Spittle",
            "Ancestral Geometry",
            "Animal Blind",
            "Anklets of Alacrity",
            "Antidote",
            "Antifungal Salve",
            "Antiplague",
            "Applereed Mutagen",
            "Apricot of Bestial Might",
            "Arachnid Harness",
            "Architect's Pattern Book",
            "Aromatic Ammunition",
            "Ascendant Dragon Spirit",
            "Assassin Vine Wine",
            "Auric Noodles",
            "Bag of Devouring",
            "Bag of Weasels",
            "Barding of the Zephyr",
            "Batsbreath Cane",
            "Belt of the Five Kings",
            "Bestial Mutagen",
            "Blast Suit",
            "Blasting Stone",
            "Blight Breath",
            "Blindpepper Bomb Blinded",
            "Blood Booster",
            "Bloodhound Mask",
            "Bloodhound Olfactory Stimulators",
            "Bloodseeker Beak",
            "Bomber's Eye",
            "Boots of Elvenkind",
            "Bottled Lightning",
            "Bottled Omen",
            "Boulder Seed",
            "Boulderhead Bock",
            "Bracelet of Dashing",
            "Bracers of Missile Deflection",
            "Bravo's Brew",
            "Brewer's Regret",
            "Bronze Bull Pendant",
            "Chatterer of Follies",
            "Cheetah's Elixir",
            "Choker Arm Mutagen",
            "Cinnamon Seers",
            "Clandestine Cloak",
            "Clawed Bracers",
            "Cloak of Swiftness",
            "Cloud Buns",
            "Codex of Unimpeded Sight",
            "Cognitive Mutagen",
            "Cold Iron Blanch",
            "Containment Contraption",
            "Covenant Tea",
            "Crown of the Kobold King",
            "Darkvision Elixir",
            "Deadweight Mutagen",
            "Deathdrinking",
            "Decrease Alchemical Crossbow",
            "Delve Scale",
            "Demortification Oil",
            "Diplomat's Badge",
            "Diplomat's Charcuterie",
            "Discord Fulu",
            "Doubling Rings",
            "Dragon Pearl",
            "Dragon Throat Scale",
            "Dragon's Blood Pudding",
            "Dragonfly Fulu",
            "Dragonfly Potion",
            "Dragonscale Amulet",
            "Drakeheart Mutagen",
            "Dread Ampoule",
            "Drowsy Sun Eye Drops",
            "Dueling Cape",
            "Eagle Eye Elixir",
            "Earplugs",
            "Egg Cream Fizz",
            "Elixir of Life",
            "Elysian Dew",
            "Emberheart",
            "Energized Cartridge",
            "Energizing",
            "Energizing Lattice",
            "Energizing Pill",
            "Energizing Tea",
            "Energy Adaptive",
            "Energy Mutagen",
            "Energy Robe of Electricity",
            "Energy Robe of Fire",
            "Enhanced Hearing Aids",
            "Escape Fulu",
            "Exsanguinating Ammunition",
            "Eye of the Unseen",
            "Fanged",
            "Feyfoul",
            "Fire and Iceberg",
            "Flask of Fellowship",
            "Force Shield",
            "Frost Breath",
            "Frost Vial",
            "Fury Cocktail",
            "Galvanic Chew",
            "Gecko Potion",
            "Ghost Charge",
            "Ghost Fowl Porridge",
            "Ghost Lantern",
            "Ghost Oil",
            "Ghost Scarf",
            "Ghostbane Fulu",
            "Ginger Chew",
            "Glow Rod",
            "Glue Bomb",
            "Golden Breath Fulu",
            "Grindlegrub Steak",
            "Hexing Jar",
            "Holy Chain",
            "Hydra Mutagen",
            "Ichthyosis Mutagen",
            "Immortal Bastion",
            "Impossible Cake",
            "Insight Coffee",
            "Iron Medallion",
            "Iron Wine",
            "Ivory Baton",
            "Juggernaut Mutagen",
            "Lastwall Soup",
            "Leopard's Armor",
            "Life-Boosting Oil",
            "Malleable Mixture",
            "Mistform Elixir",
            "Morning Glow",
            "Mortalis Coin",
            "Necrotic Bomb",
            "Necrotic Cap",
            "Numbing Tonic",
            "Obsidian Goggles",
            "Ochre Fulcrum Lens",
            "Ommatophoric Mutagen",
            "Ooze Ammunition",
            "Pallesthetic Mutagen",
            "Phoenix Flask",
            "Portable Animal Blind",
            "Potency Crystal",
            "Potion of Acid Resistance",
            "Potion of Cold Resistance",
            "Potion of Electricity Resistance",
            "Potion of Emergency Escape",
            "Potion of Fire Resistance",
            "Potion of Flying",
            "Potion of Minute Echoes",
            "Potion of Quickness",
            "Potion of Sonic Resistance",
            "Potion of Stable Form",
            "Potion of Swimming",
            "Prey Mutagen",
            "Quicksilver Mutagen",
            "Red-Rib Gill Mask",
            "Sanguine Mutagen",
            "Sea Touch Elixir",
            "Sense-Dulling Hood",
            "Serene Mutagen",
            "Shatterstone",
            "Shining Ammunition",
            "Shrinking Potion",
            "Silver Crescent",
            "Silver Salve",
            "Silvertongue Mutagen",
            "Sixfingers Elixir",
            "Skeptic's Elixir",
            "Skunk Bomb",
            "Sneaky Key",
            "Soothing Toddy",
            "Soothing Tonic",
            "Spellguard Blade",
            "Spiderfoot Brew",
            "Stalk Goggles",
            "Star of Cynosure",
            "Statue Skin Salve",
            "Stole of Civility",
            "Stone Body Mutagen",
            "Stone Fist Elixir",
            "Storm Breath",
            "Storm Chair",
            "Stormbreaker Fulu",
            "Stubborn Skin",
            "Taper of Sanctification",
            "Thawing Candle",
            "The Desert",
            "Theatrical Mutagen",
            "Thousand-Year Dragonroot",
            "Thurible of Revelation",
            "Tiger Menuki",
            "Tome of Restorative Cleansing",
            "Topology Protoplasm",
            "Tracker's Stew",
            "Tremorsensors",
            "Tricky Liniment",
            "Triton's Conch",
            "Tteokguk of Time Advancement",
            "Ugly Cute's Gift",
            "Vapor Sphere",
            "Vaultbreaker's Harness",
            "Vengeful Demon's Tears",
            "Vermin Repellent Agent",
            "Viper Rapier",
            "Viperous Elixir",
            "War Blood Mutagen",
            "Watery Form",
            "Wemmuth Trinket",
            "Wine of the Blood",
            "Winged Sandals",
            "Witch's Finger",
            "Wounding Oil",
            "Wyrm Claw - Armor"
        ]
    },
    {
        name: "Npc",
        list: [
            "Absorb Memories",
            "Activate Defenses",
            "Adaptive Strike",
            "Alchemical Crossbow",
            "Alchemical Strike",
            "Ancestral Journey",
            "Ancestral Response",
            "Artificer's Command",
            "Assimilate Lava",
            "Aura of Command",
            "Barbed Net",
            "Battle Cry",
            "Blade Barrage",
            "Blood Frenzy",
            "Blood Fury",
            "Blood Magic",
            "Blood Soak",
            "Bloom Regeneration",
            "Bodyguard's Defense",
            "Bond In Light",
            "Brutal Rally",
            "Bully the Departed",
            "Bully's Rage",
            "Curse of Boiling Blood",
            "Grab",
            "Knockdown",
            "Push"
        ]
    },
    {
        name: "Other",
        list: [
            "Agonizing Cries Aura Immunity",
            "Alien Presence Aura Immunity",
            "Allergen Aura Immunity",
            "Alluring Scent Aura Immunity",
            "Appetizing Aroma Aura Immunity",
            "Aura of Angry Crystals Immunity",
            "Aura of Blinding Light Immunity",
            "Aura of Charm Immunity",
            "Aura of Doom Immunity",
            "Aura of Forgetfulness Immunity",
            "Aura of Peace Immunity",
            "Aura of Protection Immunity",
            "Aura of Sobs Immunity",
            "Aura of Whispers Immunity",
            "Baleful Glare Aura Immunity",
            "Battlemage's Apotheosis",
            "Blight Aura Immunity",
            "Blinding Aura Immunity",
            "Blinding Halo Aura Immunity",
            "Breath of Silt Aura Immunity",
            "Breath of the Bog Aura Immunity",
            "Bullying Bluster Aura Immunity",
            "Calming Presence Aura Immunity",
            "Caustic Belch",
            "Chattering Teeth Aura Immunity",
            "Commanding Presence Aura Immunity",
            "Cunning Fervor",
            "Curtain of Calm Aura Immunity",
            "Cute But Deadly Aura Immunity",
            "Daily Obedience",
            "Death Stench Aura Immunity",
            "Deepest Fear Aura Immunity",
            "Deific Conduit",
            "Desiccation Aura Immunity",
            "Despair Aura Immunity",
            "Destabilizing Field Aura Immunity",
            "Destined Kill",
            "Die Another Day",
            "Disorienting Faces Aura Immunity",
            "Divine Strategy",
            "Draining Presence Aura Immunity",
            "Dread Flickering Aura Immunity",
            "Ecstatic Hunger Aura Immunity",
            "Excommunication",
            "False Authority Aura Immunity",
            "Fascination of Flame Aura Immunity",
            "Fervor of Force",
            "Forever Furious",
            "Furious Anatomy",
            "Gentle Facade Aura Immunity",
            "Gibbering Aura Immunity",
            "Gory Finish",
            "Great Despair Immunity",
            "Grieving Aura Immunity",
            "Hallucinatory Scale Dust Aura Immunity",
            "Heavy Aura Immunity",
            "Heraldic Statue",
            "Lichen's Tenacity",
            "Light Aura Immunity",
            "Lingering Fury",
            "Loathsome Stench Aura Immunity",
            "Luminous Lure Aura Immunity",
            "Maddening Cacophony Aura Immunity",
            "Magic-Warping Aura Immunity",
            "Malevolent Mishaps Aura Immunity",
            "Malodorous Smoke Aura Immunity",
            "Masked Intentions Aura Immunity",
            "Menacing Guardian Aura Immunity",
            "Miasma Aura Immunity",
            "Miasma of Pollution Aura Immunity",
            "Mindfog Aura Immunity",
            "Mocking Laughter Aura Immunity",
            "Musk Aura Immunity",
            "Necrotic Runoff Aura Immunity",
            "Noxious Scent Aura Immunity",
            "Odor of Rot Aura Immunity",
            "Ominous Footsteps Aura Immunity",
            "Overpowering Fervor",
            "Pacifying Aura Immunity",
            "Pained Muttering Aura Immunity",
            "Peaceful Aura Immunity",
            "Perfume Aura Immunity",
            "Powerful Stench Aura Immunity",
            "Predatory Aura Immunity",
            "Psychogenic Secretions Aura Immunity",
            "Pungent Aura Immunity",
            "Putrid Stench Aura Immunity",
            "Remove effects when Unconscious",
            "Ripping Gaze Aura Immunity",
            "Rose's Tranquility",
            "Rotting Stench Aura Immunity",
            "Scarecrow's Leer Aura Immunity",
            "Scintillating Aura Immunity",
            "Scrutinizing Presence Aura Immunity",
            "Sheathed in Light",
            "Sibilant Whispers Aura Immunity",
            "Smoke Aura Immunity",
            "Smoldering Haze Aura Immunity",
            "Smoldering Stench Aura Immunity",
            "Spirit Empathy",
            "Stench Immunity",
            "Stinky Sweat Aura Immunity",
            "Terrifying Gaze Aura Immunity",
            "Terrorspores Aura Immunity",
            "Titanic Rage",
            "Tympanic Heartbeat Aura Immunity",
            "Unfathomable Infinity Aura Immunity",
            "Unluck Aura Immunity",
            "Unnerving Presence Aura Immunity",
            "Unrest Aura Immunity",
            "Utter Despair Aura Immunity",
            "Volatile Rage",
            "Water Pressure Aura Immunity",
            "Weapon Runes",
            "Weeping Aura Immunity",
            "World-Shaking Throw"
        ]
    }
]

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
        html: "<h2>Module to notify about hands management</h2>" +
            "<p>Player uses more than 2 hands</p>" +
            "<p><div class='flex'><img class='' src='/pf2e-wiki/module/hand/hold.png' alt=''></div></p>" +
            "<p>Can't cast spell because need free hand</p>" +
            "<p>Pc tries to use action when under specific conditions</p>" +
            "<h3>Settings</h3>" +
            "<p><div class='flex'><img class='scale-06' src='/pf2e-wiki/module/hand/settings.png' alt=''></div></p>"
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
            "<p><strong>Inline Influence checks</strong></p>" +
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
            "<br>" +
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
        html: "<p><strong>Aid</strong></p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/macro/aid.png' alt=''></div></p>" +
            "<br>" +
            "<p><strong>Favorite weapon</strong></p>" +
            "<p>Set favorite weapons for macros - default weapon when run macros</p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/macro/fav.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/macro/fav-set.png' alt=''></div></p>" +
            "<br>"
    },
    {
        id: 6,
        title: 'PF2e Troops Helper',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Module for working with troops. Transformation/control",
        "price": "free",
        html: "<p class='c'><strong>Module handle logic about Create troop/Form up/and handle hp of troop</strong></p>" +
            "<br>" +
            "<p><strong>Create Troop</strong></p>" +
            "<p>Btn or macro</p>" +
            "<video width='320' height='240' controls><source src='https://github.com/reyzor1991/pf2e-wiki/assets/6688366/34de0215-c41d-40de-b77f-585266afd0a4' type='video/mp4'></video>" +
            "<br>" +
            "<p><strong>Form Up</strong></p>" +
            "<p>Macro</p>" +
            "<video width='320' height='240' controls><source src='https://github.com/user-attachments/assets/bc677993-a98e-4cb9-adff-a3aea563b0fe' type='video/mp4'></video>" +
            "<br>" +
            "<br>"
    },
    {
        id: 7,
        title: 'PF2e Summons Helper',
        img: '/pf2e-wiki/img/pentagram.svg',
        "description": "Module for Summon/Dismiss/Sustain minions",
        "price": "free",
        html: "<p class='c'><strong>Module notify about sustain summoned creature</strong></p>" +
            "<br/>" +
            "<p><strong>Settings</strong></p>" +
            "<p>Set available sources for summoning</p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/summon/sum.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/summon/source.png' alt=''></div></p>" +
            "<br/>" +
            "<p><strong>Example of summoning</strong></p>" +
            "<video width='320' height='240' controls><source src='https://github.com/user-attachments/assets/1f2747c8-d32d-4b76-99f9-447951352e7d' type='video/mp4'></video>" +
            "<br/>" +
            "<p><strong>Mirror's Reflection</strong></p>" +
            "<video width='320' height='240' controls><source src='https://github.com/user-attachments/assets/829d1f11-aac0-4150-8d59-a5f0da910b30' type='video/mp4'></video>" +
            "<br/>" +
            "<p><strong>Sustain</strong></p>" +
            "<video width='320' height='240' controls><source src='https://github.com/reyzor1991/pf2e-wiki/assets/6688366/801ebb3f-418e-479b-9bfe-cb561d723f53' type='video/mp4'></video>" +
            "<br/>" +
            "<p><strong>Dismiss</strong></p>" +
            "<video width='320' height='240' controls><source src='https://github.com/reyzor1991/pf2e-wiki/assets/6688366/49a1a31e-44db-4c0b-857b-eab846cc10d1' type='video/mp4'></video>" +
            "<br/>" +
            "<br/>"
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
        html: "<p>Module for handling dying condition and related logic. Auto apply/delete dying/wounded/unconscious conditions</p>" +
            "<p>Module has Macro for <a href=\"https://2e.aonprd.com/Rules.aspx?ID=382\">Heroic Recovery</a></p>" +
            "<br/>" +
            "<h3>Settings</h3>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/die/settings.png' alt=''></div></p>" +
            "<br/>" +
            "<h3>Errors</h3>" +
            "<p>If you have issue with unconscious layer (status effect) run inc console to delete it and turn off setting</p>" +
            "<p><pre><code>_token.actor.effects.find(a=>a.statuses.has('unconscious'))?.delete()</code></pre></p>"
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
        html: "<p>Module for editing messages in chat</p>"
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
        html: "<p>Module which sync hp handling logic between Summoner and Eidolon</p>" +
            "<h3>Base steps</h3>" +
            "<ol>" +
            "<li>Turn on option in settings</li>" +
            "<li>Create eidolon (need to use PF2e Companion Compendia or create actor with class eidolon)</li>" +
            "<li>Choose actor(summoner)</li>" +
            "<li>Target Eidolon of summoner</li>" +
            "<li>Run macro \"Set HP of Summoner to Eidolon</li>" +
            "</ol>" +
            "<p>If you get error check slug of Eidolon class (Need to select 1 token of eidolon as target to set HP of summoner)</p>" +
            "<p>If you get error check slug of Summoner class (Actor should be Summoner)</p>" +
            "<br/>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/eid/ei1.png' alt=''><img class='scale-03' src='/pf2e-wiki/module/eid/ei2.png' alt=''></div></p>" +
            "<br/>" +
            "<p>After it, macro create linked hp bar. Summoner take damage when eidolon get it Eidolon take damage when summoner get it</p>" +
            "<br/>" +
            "<h3>Settings</h3>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/eid/settings.png' alt=''></div></p>"+
            "<br/>" +
            "<h3>Errors</h3>" +
            "<p>Check eidolon feats - sometimes feat provide item bonus to ac need to change type to untyped</p>"
    },
    {
        id: 16,
        title: 'PF2e Flip Token',
        img: '/pf2e-wiki/img/flip.svg',
        "description": "Module to flip token image",
        "price": "free",
        html: "<p>Module for fast changing tokens</p>" +
            "<h3>Configuration</h3>" +
            "<p>Flip config provide logic of manual changing tokens</p>" +
            "<p>Flip battle config provide logic of auto changing tokens when encounter start/end</p>" +
            "<p><div class='flex'>" +
            "<img class='scale-03' src='/pf2e-wiki/module/flip/c.png' alt=''>" +
            "<img class='scale-03' src='/pf2e-wiki/module/flip/c1.png' alt=''>" +
            "<img class='scale-03' src='/pf2e-wiki/module/flip/c2.png' alt=''>" +
            "</div></p>"+
            "<h3>Example</h3>" +
            "<p><video width=\"400\" controls autoplay><source src='/pf2e-wiki/module/flip/example.mov' type=\"video/mp4\"></video></p>"
    },
    {
        id: 17,
        title: 'PF2e Automations (Patreon)',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module for automate action/feats/spells",
        "price": "patreon",
        html: "<strong>Module for automate action/feats/spells.</strong>" +
            "<p><i>Module has 900+ automated rules.</i></p>" +
            "<p>Module react on messages in chat. When someone post message with attack/action/damage, as result:</p>" +
            "<p>Apply effect/condition automatically, when fail saving throw/crit specialization/cast spell.</p>" +
            "<h3>Manage Rule Settings</h3>" +
            "<p><div class='flex'><img class='scale-06' src='/pf2e-wiki/module/v3/mrs.png' alt=''></div></p>" +
            "<ol>" +
            "<li>Rules grouped by types</li>" +
            "<li>Possibility to activate/deactivate all rules</li>" +
            "<li>Possibility to activate/deactivate specific rules</li>" +
            "<li>Possibility to activate/deactivate by group</li>" +
            "<li>Possibility to activate suggested rules</li>" +
            "<li>Filter rules</li>" +
            "</ol>" +
            "<h3>Settings</h3>" +
            "<p><div class='flex'><img class='scale-06' src='/pf2e-wiki/module/v3/settings.png' alt=''></div></p>" +
            "<h3>Roll Settings Menu</h3>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/v3/rsm.png' alt=''></div></p>" +
            "<br/>" +
            "<h3>Hide Roll Menu</h3>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/v3/hrm.png' alt=''></div></p>" +
            "<ol><li>Set roll as blind based on settings</li></ol>" +
            "<br/>" +
            "<h3>Incapacitation Roll Menu</h3>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/v3/irm.png' alt=''></div></p>" +
            "<ol><li>Setting for change logic of Incapacitation</li></ol>" +
            "<br/>" +
            "<h3>Combat Settings Menu</h3>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/v3/csm.png' alt=''></div></p>" +
            "<br/>" +
            "<h3>Additional settings menu</h3>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/v3/asm.png' alt=''></div></p>" +
            "<p>Decrease Frightened feature covers logic like</p>" +
            "<ol>" +
            "<li>Bogeyman breath</li>" +
            "<li>Dread runes</li>" +
            "<li>Dwarven doughtiness</li>" +
            "</ol>" +
            "<br/>" +
            "<br/>" +
            "<h3>List of features</h3>" +
            "<br/>" +
            listOfFeatures.map(e => {
                return `<details><summary>${e.name}</summary>${e.list.map(ee => `<p>* ${ee}</p>`).join("")}</details>`
            }).join("")
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
        id: 27,
        title: 'PF2e Condition Converter',
        img: '/pf2e-wiki/img/gear.svg',
        "description": "Module for converting condition to effects",
        "price": "patreon",
        html: "<p>Module for converting condition to effects: auto apply from any source</p>" +
            "<p><div class='flex wrap'><img class='scale-04' src='/pf2e-wiki/module/cc/1.png' alt=''>" +
            "<img class='scale-04' src='/pf2e-wiki/module/cc/2.png' alt=''>" +
            "<img class='scale-04' src='/pf2e-wiki/module/cc/3.png' alt=''></div></p>" +
            "<h3>Settings</h3>" +
            "<p><div class='flex'><img class='scale-06' src='/pf2e-wiki/module/cc/settings.png' alt=''></div></p>"
    },
    {
        id: 28,
        title: 'PF2e Campaign Statistics',
        img: '/pf2e-wiki/img/scroll.svg',
        "description": "Module for saving encounter/base statistics",
        "price": "patreon",
        html: "<p>Module saves statistics of actions/encounters</p>" +
            "<br/>" +
            "<p>Module saves information to Journal, which has 3 section: Overall statistics, Non combat actions and encounters</p>" +
            "<p><div class='flex wrap'><img class='scale-04' src='/pf2e-wiki/module/stat/journal.png' alt=''>" +
            "<img class='scale-04' src='/pf2e-wiki/module/stat/over.png' alt=''>" +
            "<img class='scale-04' src='/pf2e-wiki/module/stat/non.png' alt=''>" +
            "<img class='scale-04' src='/pf2e-wiki/module/stat/battle.png' alt=''></div></p>" +
            "<h3>Settings</h3>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/stat/settings.png' alt=''></div></p>"
    },
    {
        id: 30,
        title: 'PF2e Charactermancer',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Module for comfortable level up of character",
        "price": "patreon",
        html: "<p>Module for comfortable level up of character</p>" +
            "<h3>Create new character</h3>" +
            "<p><div class='flex'><img class='scale-06' src='/pf2e-wiki/module/char/an.png' alt=''></div></p>" +
            "<p><div class='flex'><img class='scale-06' src='/pf2e-wiki/module/char/an2.png' alt=''></div></p>" +
            "<p><div class='flex'><img class='scale-06' src='/pf2e-wiki/module/char/back.png' alt=''></div></p>" +
            "<p><div class='flex'><img class='scale-06' src='/pf2e-wiki/module/char/cl.png' alt=''></div></p>" +
            "<p><div class='flex'><img class='scale-06' src='/pf2e-wiki/module/char/att.png' alt=''></div></p>" +
            "<h3>Level up character<h3>" +
            "<p><div class='flex'><img class='scale-06' src='/pf2e-wiki/module/char/lvlup.png' alt=''></div></p>"
    },
    {
        id: 31,
        title: 'Novel messages',
        img: '/pf2e-wiki/img/scroll.svg',
        "description": "Show messages as popups",
        "price": "patreon",
        html: "<p>Module shows dialogs from actors as popups</p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/novel/pop.png' alt=''></div></p>" +
            "<p>Module supports different icons for emotions: happiness, sadness, anger, fear, surprise, disgust</p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/novel/icon.png' alt=''>" +
            "<img class='scale-03' src='/pf2e-wiki/module/novel/emotions.png' alt=''></div></p>" +
            "<h3>Settings</h3>" +
            "<p><div class='flex'><img class='scale-06' src='/pf2e-wiki/module/novel/settings.png' alt=''></div></p>"
    },
    {
        id: 32,
        title: 'PF2e Animist',
        img: '/pf2e-wiki/img/group.svg',
        "description": "Handling Animist class",
        "price": "free",
        html: "<p>Changing apparitions and click ghost btn to apply new spells/lores</p>" +
            "<p>You could use command as macro to apply changes</p>" +
            "<p><pre><code>game.modules.get(\"pf2e-animist\").macros.applyChanges(actor)</code></pre></p>" +
            "<p></p>" +
            "<p><div class='flex'><img class='scale-03' src='/pf2e-wiki/module/animist/app.png' alt=''>" +
            "<img class='scale-03' src='/pf2e-wiki/module/animist/ic.png' alt=''></div></p>" +
            "<h3>Settings</h3>" +
            "<p><div class='flex'><img class='scale-06' src='/pf2e-wiki/module/animist/settings.png' alt=''></div></p>"
    },
    {
        id: 33,
        title: 'Foundry Folder',
        img: '/pf2e-wiki/img/folder.svg',
        "description": "Moving actor/items to folder",
        "price": "patreon",
        html: "<p>Module store new actor/items to specific folder if it's missed</p>" +
            "<h3>Settings</h3>" +
            "<p><div class='flex'><img class='scale-06' src='/pf2e-wiki/module/folder/settings.png' alt=''></div></p>"
    },
    {
        id: 99,
        title: 'Pseudo Afflictions',
        img: '/pf2e-wiki/img/skull.svg',
        "description": "Module for improving work with afflictions.",
        "price": "patreon",
        html: "<p>Mode has hardcoded effects as afflictions</p>" +
            "<p>Mode contains 90% of all aflictions, and handle logic of stage changing, roll damage, apply effects/conditions</p>" +
            "<p><div class='flex'>" +
            "<img class='scale-06' src='/pf2e-wiki/module/aff/st.png' alt=''>" +
            "<img class='scale-06' src='/pf2e-wiki/module/aff/aff.png' alt=''>" +
            "</div></p>"
    }
]