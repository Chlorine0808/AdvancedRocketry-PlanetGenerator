const planetConfig = {
    starName:
    {
        name: "star name",
        displayedName: "Star Name",
        type: "text",
        in: "star",
        default: "Sun"
    },
    temp:
    {
        name: "temp",
        displayedName: "Temperature",
        description: "Original sun temperature = 100.",
        type: "number",
        in: "star",
        placeholder: "100"
    },
    x:
    {
        name: "x",
        displayedName: "X",
        description: "Position of the star in the galaxy map.",
        type: "number",
        in: "star",
        placeholder: "0"
    },
    y:
    {
        name: "y",
        displayedName: "Y",
        description: "Position of the star in the galaxy map.",
        type: "number",
        in: "star",
        placeholder: "0"
    },
    size:
    {
        name: "size",
        displayedName: "Star Size",
        type: "number",
        min: "0",
        step: "0.05",
        in: "star",
        placeholder: "1.0",
        default: "1.0"
    },
    numPlanets:
    {
        name: "numPlanets",
        displayedName: "Number of Planets",
        description: "The number of random-generated planets.",
        type: "number",
        min: "0",
        in: "star",
        placeholder: "0",
        default: "0"
    },
    numGasGiants:
    {
        name: "numGasGiants",
        displayedName: "Number of Gas Giants",
        description: "The number of random-generated Gas Giants.",
        type: "number",
        min: "0",
        in: "star",
        placeholder: "0",
        default: "0"
    },
    blackHole:
    {
        name: "blackHole",
        displayedName: "Is Black Hole ?",
        type: "checkbox",
        in: "star"
    },
    planetName:
    {
        name: "planet name",
        displayedName: "Planet Name",
        type: "text",
        in: "planet",
        default: "Earth"
    },
    DIMID:
    {
        name: "DIMID",
        displayedName: "Dimension ID",
        description: "Better to set.",
        type: "number",
        in: "planet",
        placeholder: "0"
    },
    dimMapping:
    {
        name: "dimMapping",
        displayedName: "Dimension Mapping",
        description: "Allow to specify dimension from another mod.",
        type: "checkbox",
        in: "planet",
        placeholder: "64"
    },
    customIcon:
    {
        name: "customIcon",
        displayedName: "Custom Icon",
        type: "select",
        options: ["GasGiantBlue", "GasGiantRed", "GasGiantBrown", "Venusian", "Lava", "MarsLike", "Moon", "CarbonWorld", "EarthLike", "WaterWorld", "DesertWorld", "IceWorld"],
        in: "planet"
    },
    isKnown:
    {
        name: "isKnown",
        displayedName: "Known by default",
        description: "No effect on moons.",
        type: "checkbox"
    },
    hasRings:
    {
        name: "hasRings",
        displayedName: "Has Rings",
        type: "checkbox"
    },
    gasGiant:
    {
        name: "gasGiant",
        displayedName: "Gas Giant",
        description: "Cannot be landed but can be used as gas source.",
        type: "checkbox"
    },
    gas:
    {
        name: "gas",
        displayedName: "Gas",
        description: "Only effective on Gas Giant.",
        type: "textarea",
        placeholder: "nitrogen\noxygen"
    },
    genType:
    {
        name: "genType",
        displayedName: "Generation Type",
        description: "WARNING : Not 0 may causes problems. 1 is nether-like cave. 2 is asteroid.",
        type: "number",
        min: 0,
        max: 2,
        placeholder: "0"
    },
    fogColor:
    {
        name: "fogColor",
        displayedName: "Fog Color",
        type: "color"
    },
    skyColor:
    {
        name: "skyColor",
        displayedName: "Sky Color",
        type: "color"
    },
    atmosphereDensity:
    {
        name: "atmosphereDensity",
        displayedName: "Atmosphere Density",
        description: "min: 0, max: 1600. <75: unbreathable. =100: Earthlike. >200: cause bad status effects.",
        type: "number",
        min: 0,
        max: 1600,
        placeholder: "100"
    },
    gravitationalMultiplier:
    {
        name: "gravitationalMultiplier",
        displayedName: "Gravitational Multiplier",
        description: "=100: Earthlike. <10: players unable to fall. >110: players unable to jump up blocks.",
        type: "number",
        min: 0,
        max: 400,
        placeholder: "100"
    },
    orbitalDistance:
    {
        name: "orbitalDistance",
        displayedName: "Orbital Distance",
        description: "Distance between planet and star (or moon). =100: Earthlike.",
        type: "number",
        min: 0,
        placeholder: "100"
    },
    orbitalTheta:
    {
        name: "orbitalTheta",
        displayedName: "Orbital Theta",
        description: "Starting angular of position of planet.",
        type: "number",
        min: 0,
        max: 360,
        placeholder: "0"
    },
    orbitalPhi:
    {
        name: "orbitalPhi",
        displayedName: "Orbital Phi",
        description: "Rotating angle. =0: sun to rise in the east and set in the west.",
        type: "number",
        min: 0,
        max: 360,
        placeholder: "0"
    },
    oreGen:
    {
        name: "OreGen",
        displayedName: "Ore Generation",
        type: "planetOre",
        in: "planetOre"
    },
    rotationalPeriod:
    {
        name: "rotationalPeriod",
        displayedName: "Rotational Period",
        description: "Day night cycle time in tick. Not recommend <400.",
        type: "number",
        min: 1,
        max: 2147483647,
        placeholder: "24000"
    },
    fillerBlock:
    {
        name: "fillerBlock",
        displayedName: "Filler Block",
        description: "Many ores may only spawn in stone. Will prevent ALL top blocks and filler blocks from spawning.",
        type: "text",
        placeholder: "minecraft:netherrack"
    },
    oceanBlock:
    {
        name: "oceanBlock",
        displayedName: "Ocean Block",
        description: "Not accept damage value. Not recommend to use Tile entity block.",
        type: "text",
        placeholder: "minecraft:lava"
    },
    seaLevel:
    {
        name: "seaLevel",
        displayedName: "Sea Level",
        description: "This does not affect biome generation.",
        type: "number",
        min: 1,
        max: 255,
        placeholder: "64"
    },
    spawnable:
    {
        name: "spawnable",
        displayedName: "Spawnable",
        type: "spawnable",
        in: "spawnable"
    },
    biomeIds:
    {
        name: "biomeIds",
        displayedName: "Biome IDs",
        type: "text",
        placeholder: "0, 1, 2, 3"
    },
    artifact:
    {
        name: "artifact",
        displayedName: "Artifact",
        description: "Key item to discover the planet.",
        type: "text",
        placeholder: "minecraft:coal 1"
    }
};

const asteroidConfig = {
    asteroidName:
    {
        name: "asteroid name",
        displayedName: "Asteroid Name",
        type: "text",
        in: "asteroid",
        placeholder: "Original Asteroid",
        default: "Original Asteroid"
    },
    distance:
    {
        name: "distance",
        displayedName: "Distance",
        description: "The minimum viewable distance to discover this from Observatory.",
        type: "number",
        min: "35",
        max: "200",
        in: "asteroid",
        placeholder: "100"
    },
    mass:
    {
        name: "mass",
        displayedName: "Mass",
        description: "The total amount of blocks can be harvested.",
        type: "number",
        min: "1",
        in: "asteroid",
        placeholder: "50"
    },
    massVariability:
    {
        name: "massVariability",
        displayedName: "Mass Variability",
        description: "0 to 1",
        type: "number",
        min: "0",
        max: "1",
        step: "0.01",
        in: "asteroid",
        placeholder: "0.5"
    },
    richness:
    {
        name: "richness",
        displayedName: "Richness",
        description: "0 to 1. The ratio of the ore to rock.",
        type: "number",
        min: "0",
        max: "1",
        step: "0.01",
        in: "asteroid",
        placeholder: "0.8"
    },
    richnessVariability:
    {
        name: "richnessVariability",
        displayedName: "Richness Variability",
        description: "0 to 1",
        type: "number",
        min: "0",
        max: "1",
        step: "0.01",
        in: "asteroid",
        placeholder: "0.5"
    },
    probability:
    {
        name: "probability",
        displayedName: "Probability",
        description: "The probability of showing up in the asteroid list.",
        type: "number",
        min: "0",
        in: "asteroid",
        placeholder: "10"
    },
    timeMultiplier:
    {
        name: "timeMultiplier",
        displayedName: "Time Multiplier",
        description: "Time multiplier require to mine an asteroid.",
        type: "number",
        min: "0",
        in: "asteroid",
        step: "0.1",
        placeholder: "1.2"
    },
    asteroidOre:
    {
        name: "asteroidOre",
        displayedName: "Ores",
        description: "Add ores with their chance.",
        type: "asteroidOre",
        in: "asteroidOre"
    }
};

document.addEventListener('DOMContentLoaded', generateForm);

function generateForm() {
    const planetform = document.getElementById('planetForm');
    createForm(planetConfig, planetform, 'planetXML', 'generatePlanetXML');
    const asteroidForm = document.getElementById('asteroidForm');
    createForm(asteroidConfig, asteroidForm, 'asteroidXML', 'generateAsteroidXML');
}

function createForm(config, form, outputId, xmlGenerator) {
    for (const key in config) {
        const cfg = config[key];
        createFormElement(cfg, form);
    }

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = 'Generate XML';
    button.setAttribute('onclick', `${xmlGenerator}('${outputId}')`);
    form.appendChild(button);
}

function createFormElement(cfg, form) {
    const label = document.createElement('label');
    label.setAttribute('for', cfg.name);
    label.textContent = cfg.displayedName + ": ";
    form.appendChild(label);

    let input = createInput(cfg);
    input.setAttribute('id', cfg.name);
    input.setAttribute('name', cfg.name);
    if (cfg.required !== false) input.required = true;
    form.appendChild(input);

    if (cfg.description) {
        const description = document.createElement('span');
        description.textContent = " " + cfg.description;
        form.appendChild(description);
    }

    const br = document.createElement('br');
    form.appendChild(br);
}

function createInput(config) {
    let input;
    if (config.type === "textarea") {
        input = document.createElement('textarea');
        if (config.placeholder !== undefined) input.setAttribute('placeholder', config.placeholder);
    } else if (config.type === "select") {
        input = document.createElement('select');
        config.options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            input.appendChild(opt);
        });
    } else if (config.type === "asteroidOre") {
        input = createSpecialInput(config.name, "asteroid");
    } else if (config.type === "planetOre") {
        input = createSpecialInput(config.name, "planet");
    } else if (config.type === "spawnable") {
        input = createSpecialInput(config.name, "spawnable");
    } else {
        input = document.createElement('input');
        input.setAttribute('type', config.type);
        if (config.default !== undefined) input.value = config.default;
        if (config.min !== undefined) input.setAttribute('min', config.min);
        if (config.max !== undefined) input.setAttribute('max', config.max);
        if (config.step !== undefined) input.setAttribute('step', config.step);
        if (config.placeholder !== undefined) input.setAttribute('placeholder', config.placeholder);
    }
    return input;
}

function createSpecialInput(name, type) {
    const container = document.createElement('div');
    container.setAttribute('id', name);

    const addButton = document.createElement('button');
    addButton.setAttribute('type', 'button');
    if (type === "spawnable")
        addButton.textContent = 'Add Mob';
    else
        addButton.textContent = 'Add Ore';
    addButton.onclick = () => addSpecialInput(container, type);
    container.appendChild(addButton);

    return container;
}

function addSpecialInput(container, type) {
    const newContainer = document.createElement('div');
    var formElements = [];

    if (type === "planet") {
        formElements = [
            { name: 'block', displayedName: 'block', type: 'text', placeholder: 'minecraft:iron_block' },
            { name: 'meta', displayedName: 'meta', type: 'text', placeholder: '0' },
            { name: 'minHeight', displayedName: 'minHeight', type: 'number', placeholder: '0', min: '1', max: '255' },
            { name: 'maxHeight', displayedName: 'maxHeight', type: 'number', placeholder: '64', min: '1', max: '255' },
            { name: 'clumpSize', displayedName: 'clumpSize', type: 'number', placeholder: '2', min: '1', description: "Not the number of ore blocks. coal is 16, iron is 8." },
            { name: 'chancePerChunk', displayedName: 'chancePerChunk', type: 'number', placeholder: '16', min: '1' }
        ];
    }
    else if (type === "asteroid") {
        formElements = [
            { name: 'itemStack', displayedName: 'itemStack', type: 'text', placeholder: 'minecraft:gold_block' },
            { name: 'chance', displayedName: 'chance', type: 'number', placeholder: 'chance' }
        ];
    }
    else if (type === "spawnable") {
        formElements = [
            { name: 'mobID', displayedName: 'mobID', type: 'text', placeholder: 'minecraft:sheep' },
            { name: 'Weight', displayedName: 'Weight', type: 'text', placeholder: '1' },
            { name: 'groupMin', displayedName: 'groupMin', type: 'number', placeholder: '1' },
            { name: 'groupMax', displayedName: 'groupMax', type: 'number', placeholder: '5' }
        ];
    }

    formElements.forEach(elementConfig => {
        createFormElement(elementConfig, newContainer);
    });

    container.appendChild(newContainer);
}

function generatePlanetXML(outputId) {
    const formData = {};
    const starData = {};
    const planetData = {};
    const spawnableData = {};
    const oreData = {};
    const planetName = document.getElementById("planet name").value;

    for (const key in planetConfig) {
        const config = planetConfig[key];
        const element = document.getElementById(config.name);
        if (element) {
            let value;
            if (config.type === 'checkbox') {
                value = element.checked;
            } else if (config.type === 'color') {
                value = element.value.replace(/#/g, '0x');
            } else if (element.name === "gas") {
                value = element.value.replace("\n", "</gas>\n            <gas>");
            } else if (config.type === 'spawnable') {
                value = getSpawnableData(element);
            } else if (config.type === "planetOre") {
                value = getPlanetOreData(element);
            } else {
                value = element.value;
            }
            if (config.in === 'star') {
                starData[config.name] = value;
            } else if (config.in === 'planet') {
                planetData[config.name] = value;
            } else if (config.in === 'spawnable') {
                spawnableData[config.name] = value;
            } else if (config.in === 'planetOre') {
                oreData[config.name] = value;
            } else {
                formData[config.name] = value;
            }
        }
    }

    const xmlParts = [];
    // xmlParts.push(`<galaxy>`);
    if (Object.keys(starData).length > 0) {
        let starAttributes = [];
        for (const key in starData) {
            if (starData[key] !== false && starData[key] !== "") {
                starAttributes.push(`${key}="${starData[key]}"`);
            }
        }
        xmlParts.push(`    <${starAttributes.join(' ')}>`);
    }

    if (planetName !== "" && Object.keys(planetData).length > 0) {
        let planetAttributes = [];
        for (const key in planetData) {
            if (planetData[key] !== false && planetData[key] !== "") {
                if (key === "dimMapping") {
                    planetAttributes.push(`${key}=""`);
                } else {
                    planetAttributes.push(`${key}="${planetData[key]}"`);
                }
            }
        }
        xmlParts.push(`        <${planetAttributes.join(' ')}>`);

        let spawnAttributes = [];
        for (const key in spawnableData) {
            const value = spawnableData[key];
            if (value !== false && value !== "") {
                spawnAttributes.push(`${value}`);
            }
        }
        if (spawnAttributes.length > 0) {
            xmlParts.push(`${spawnAttributes.join(' ')}`);
        }

        let oreAttributes = [];
        for (const key in oreData) {
            const value = oreData[key];
            if (value !== false && value !== "") {
                oreAttributes.push(`${value}`);
            }
        }
        if (oreAttributes.length > 0) {
            xmlParts.push(`${oreAttributes.join(' ')}`);
        }

        for (const key in formData) {
            const value = formData[key];
            if (value !== false && value !== "") {
                xmlParts.push(`            <${key}>${value}</${key}>`);
            }
        }
        xmlParts.push(`        </planet>`);
    }
    xmlParts.push('    </star>');
    // xmlParts.push(`</galaxy>`);

    const xmlString = xmlParts.join('\n');

    const outputArea = document.getElementById(outputId);
    outputArea.value = xmlString;
}

function generateAsteroidXML(outputId) {
    const formData = {};
    const asteroidData = {};
    const oreData = {};
    for (const key in asteroidConfig) {
        const config = asteroidConfig[key];
        const element = document.getElementById(config.name);
        if (element) {
            let value;
            if (config.type === 'checkbox') {
                value = element.checked;
            } else if (config.type === 'color') {
                value = element.value.replace(/#/g, '0x');
            } else if (config.type === 'asteroidOre') {
                value = getAsteroidOreData(element);
            } else {
                value = element.value;
            }
            if (config.in === 'asteroid') {
                asteroidData[config.name] = value;
            } else if (config.in === 'asteroidOre') {
                oreData[config.name] = value;
            } else {
                formData[config.name] = value;
            }
        }
    }

    const xmlParts = [];
    xmlParts.push(`<Asteroid>`);
    let asteroidAttributes = [];
    for (const key in asteroidData) {
        const value = asteroidData[key];
        if (value !== false && value !== "") {
            asteroidAttributes.push(`${key}="${value}"`);
        }
    }
    xmlParts.push(`    <${asteroidAttributes.join(' ')}>`);

    let oreAttributes = [];
    for (const key in oreData) {
        const value = oreData[key];
        if (value !== false && value !== "") {
            oreAttributes.push(`${value}`);
        }
    }
    if (oreAttributes.length > 0) {
        xmlParts.push(`${oreAttributes.join(' ')}`);
    }

    for (const key in formData) {
        const value = formData[key];
        if (value !== false && value !== "") {
            xmlParts.push(`        <${key}>${value}</${key}>`);
        }
    }

    xmlParts.push(`    </asteroid>`);
    xmlParts.push(`</Asteroid>`);
    const xmlString = xmlParts.join('\n');

    const outputArea = document.getElementById(outputId);
    outputArea.value = xmlString;
}

function getPlanetOreData(container) {
    const oreData = [];
    const resultData = [];
    const oreInputs = container.querySelectorAll('div');
    oreInputs.forEach(oreInput => {
        const block = oreInput.querySelector('input[id="block"]').value;
        const meta = oreInput.querySelector('input[id="meta"]').value;
        const minHeight = oreInput.querySelector('input[id="minHeight"]').value;
        const maxHeight = oreInput.querySelector('input[id="maxHeight"]').value;
        const clumpSize = oreInput.querySelector('input[id="clumpSize"]').value;
        const chancePerChunk = oreInput.querySelector('input[id="chancePerChunk"]').value;
        let result = [];
        if (block && minHeight && maxHeight && clumpSize && chancePerChunk) {
            result.push(`                <ore block="${block}" `);
            if (meta)
                result.push(`meta="${meta}" `);
            result.push(`minHeight="${minHeight}" maxHeight="${maxHeight}" clumpSize="${clumpSize}" chancePerChunk="${chancePerChunk}" />`);
            oreData.push(result.join(''));
        }
    });
    if (oreData.length > 0) {
        resultData.push(`            <OreGen>`);
        resultData.push(`${oreData.join('\n')}`);
        resultData.push(`            </OreGen>`);
    }
    return resultData.join('\n');
}

function getSpawnableData(container) {
    const spawnableData = [];
    const spawnableInputs = container.querySelectorAll('div');
    spawnableInputs.forEach(spawnableInput => {
        const weight = spawnableInput.querySelector('input[id="Weight"]').value;
        const groupMin = spawnableInput.querySelector('input[id="groupMin"]').value;
        const groupMax = spawnableInput.querySelector('input[id="groupMax"]').value;
        const mobID = spawnableInput.querySelector('input[id="mobID"]').value;
        if (weight && groupMin && groupMax && mobID) {
            spawnableData.push(`            <spawnable weight="${weight}" groupMin="${groupMin}" groupMax="${groupMax}">${mobID}</spawnable>`);
        }
    });
    return spawnableData.join('\n');
}

function getAsteroidOreData(container) {
    const oreData = [];
    const oreInputs = container.querySelectorAll('div');
    oreInputs.forEach(oreInput => {
        const itemStack = oreInput.querySelector('input[id="itemStack"]').value;
        const chance = oreInput.querySelector('input[id="chance"]').value;
        if (itemStack && chance) {
            oreData.push(`        <ore itemStack="${itemStack}" chance="${chance}" />`);
        }
    });
    return oreData.join('\n');
}
