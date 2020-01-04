
let iconsTable = [
    // emoticons in FF:
    ["2693", "⚓", "Anchor"],
    ["26EA", "⛪", "Church"],
    ["1F3EF", "🏯", "Japanese Castle"],
    ["1F3F0", "🏰", "Castle"],
    ["1F5FC", "🗼", "Tower"],
    ["1F3E0", "🏠", "House"],
    ["1F3AA", "🎪", "Tent"],
    ["1F3E8", "🏨", "Hotel"],
    ["1F4B0", "💰", "Money bag"],
    ["1F6A8", "🚨", "Revolving Light"],
    ["1F309", "🌉", "Bridge at Night"],
    ["1F5FB", "🗻", "Mountain"],
    ["1F30B", "🌋", "Volcano"],
    ["270A", "✊", "Raised Fist"],
    ["1F44A", "👊", "Oncoming Fist"],
    ["1F4AA", "💪", "Flexed Biceps"],
    ["1F47C", "👼", "Baby Angel"],
    ["1F40E", "🐎", "Horse"],
    ["1F434", "🐴", "Horse Face"],
    ["1F42E", "🐮", "Cow"],
    ["1F43A", "🐺", "Wolf Face"],
    ["1F435", "🐵", "Monkey face"],
    ["1F437", "🐷", "Pig face"],
    ["1F414", "🐔", "Chicken"],
    ["1F411", "🐑", "Ewe"],
    ["1F42B", "🐫", "Camel"],
    ["1F418", "🐘", "Elephant"],
    ["1F422", "🐢", "Turtle"],
    ["1F40C", "🐌", "Snail"],
    ["1F40D", "🐍", "Snake"],
    ["1F41D", "🐝", "Honeybee"],
    ["1F41C", "🐜", "Ant"],
    ["1F41B", "🐛", "Bug"],
    ["1F426", "🐦", "Bird"],
    ["1F438", "🐸", "Frog Face"],
    ["1F433", "🐳", "Whale"],
    ["1F42C", "🐬", "Dolphin"],
    ["1F420", "🐟", "Fish"],
    ["1F480", "💀", "Skull"],
    ["1F432", "🐲", "Dragon Head"],
    ["1F479", "👹", "Ogre"],
    ["1F47A", "👺", "Goblin"],
    ["1F47B", "👻", "Ghost"],
    ["1F47E", "👾", "Alien"],
    ["1F383", "🎃", "Jack-O-Lantern"],
    ["1F384", "🎄", "Christmas Tree"],
    ["1F334", "🌴", "Palm"],
    ["1F335", "🌵", "Cactus"],
    ["2618", "☘️", "Shamrock"],
    ["1F340", "🍀", "Four Leaf Clover"],
    ["1F341", "🍁", "Maple Leaf"],
    ["1F33F", "🌿", "Herb"],
    ["1F33E", "🌾", "Sheaf"],
    ["1F344", "🍄", "Mushroom"],
    ["1F374", "🍴", "Fork and knife"],
    ["1F372", "🍲", "Food"],
    ["1F35E", "🍞", "Bread"],
    ["1F357", "🍗", "Poultry leg"],
    ["1F347", "🍇", "Grapes"],
    ["1F34F", "🍏", "Apple"],
    ["1F352", "🍒", "Cherries"],
    ["1F36F", "🍯", "Honey pot"],
    ["1F37A", "🍺", "Beer"],
    ["1F37B", "🍻", "Beers"],
    ["1F377", "🍷", "Wine glass"],
    ["1F3BB", "🎻", "Violin"],
    ["1F3B8", "🎸", "Guitar"],
    ["1F52A", "🔪", "Knife"],
    ["1F52B", "🔫", "Pistol"],
    ["1F4A3", "💣", "Bomb"],
    ["1F4A5", "💥", "Collision"],
    ["1F4A8", "💨", "Dashing away"],
    ["1F301", "🌁", "Foggy"],
    ["2744", "❄️", "Snowflake"],
    ["26A1", "⚡", "Electricity"],
    ["1F320", "🌠", "Shooting star"],
    ["1F319", "🌙", "Crescent moon"],
    ["1F525", "🔥", "Fire"],
    ["1F4A7", "💧", "Droplet"],
    ["1F30A", "🌊", "Wave"],
    ["23F0", "⏰", "Alarm Clock"],
    ["231B", "⌛", "Hourglass"],
    ["1F3C6", "🏆", "Goblet"],
    ["26F2", "⛲", "Fountain"],
    ["26F5", "⛵", "Sailboat"],
    ["26FA", "⛺", "Campfire"],
    ["2764", "❤", "Red Heart"],
    ["1F498", "💘", "Heart With Arrow"],
    ["1F489", "💉", "Syringe"],
    ["1F4D5", "📕", "Closed Book"],
    ["1F4D6", "📚", "Books"],
    ["1F381", "🎁", "Wrapped Gift"],
    ["1F3AF", "🎯", "Archery"],
    ["1F52E", "🔮", "Magic ball"],
    ["1F3AD", "🎭", "Performing arts"],
    ["1F3A8", "🎨", "Artist palette"],
    ["1F457", "👗", "Dress"],
    ["1F392", "🎒", "Backpack"],
    ["1F451", "👑", "Crown"],
    ["1F48D", "💍", "Ring"],
    ["1F48E", "💎", "Gem"],
    ["1F514", "🔔", "Bell"],
    ["1F3B2", "🎲", "Die"],
    // black and white icons in FF:
    ["26A0", "⚠", "Alert"],
    ["2317", "⌗", "Hash"],
    ["2318", "⌘", "POI"],
    ["2307", "⌇", "Wavy"],
    ["27F1", "⟱", "Downwards Quadruple"],
    ["21E6", "⇦", "Left arrow"],
    ["21E7", "⇧", "Top arrow"],
    ["21E8", "⇨", "Right arrow"],
    ["21E9", "⇩", "Left arrow"],
    ["21F6", "⇶", "Three arrows"],
    ["2699", "⚙", "Gear"],
    ["269B", "⚛", "Atom"],
    ["2680", "⚀", "Die1"],
    ["2681", "⚁", "Die2"],
    ["2682", "⚂", "Die3"],
    ["2683", "⚃", "Die4"],
    ["2684", "⚄", "Die5"],
    ["2685", "⚅", "Die6"],
    ["26B4", "⚴", "Pallas"],
    ["26B5", "⚵", "Juno"],
    ["26B6", "⚶", "Vesta"],
    ["26B7", "⚷", "Chiron"],
    ["26B8", "⚸", "Lilith"],
    ["263F", "☿", "Mercury"],
    ["2640", "♀", "Venus"],
    ["2641", "♁", "Earth"],
    ["2642", "♂", "Mars"],
    ["2643", "♃", "Jupiter"],
    ["2644", "♄", "Saturn"],
    ["2645", "♅", "Uranus"],
    ["2646", "♆", "Neptune"],
    ["2647", "♇", "Pluto"],
    ["26B3", "⚳", "Ceres"],
    ["2654", "♔", "Chess king"],
    ["2655", "♕", "Chess queen"],
    ["2656", "♖", "Chess rook"],
    ["2657", "♗", "Chess bishop"],
    ["2658", "♘", "Chess knight"],
    ["2659", "♙", "Chess pawn"],
    ["2660", "♠", "Spade"],
    ["2663", "♣", "Club"],
    ["2665", "♥", "Heart"],
    ["2666", "♦", "Diamond"],
    ["2698", "⚘", "Flower"],
    ["2625", "☥", "Ankh"],
    ["2626", "☦", "Orthodox"],
    ["2627", "☧", "Chi Rho"],
    ["2628", "☨", "Lorraine"],
    ["2629", "☩", "Jerusalem"],
    ["2670", "♰", "Syriac cross"],
    ["2020", "†", "Dagger"],
    ["262A", "☪", "Muslim"],
    ["262D", "☭", "Soviet"],
    ["262E", "☮", "Peace"],
    ["262F", "☯", "Yin yang"],
    ["26A4", "⚤", "Heterosexuality"],
    ["26A2", "⚢", "Female homosexuality"],
    ["26A3", "⚣", "Male homosexuality"],
    ["26A5", "⚥", "Male and female"],
    ["26AD", "⚭", "Rings"],
    ["2690", "⚐", "White flag"],
    ["2691", "⚑", "Black flag"],
    ["263C", "☼", "Sun"],
    ["263E", "☾", "Moon"],
    ["2668", "♨", "Hot springs"],
    ["2600", "☀", "Black sun"],
    ["2601", "☁", "Cloud"],
    ["2602", "☂", "Umbrella"],
    ["2603", "☃", "Snowman"],
    ["2604", "☄", "Comet"],
    ["2605", "★", "Black star"],
    ["2606", "☆", "White star"],
    ["269D", "⚝", "Outlined star"],
    ["2618", "☘", "Shamrock"],
    ["21AF", "↯", "Lightning"],
    ["269C", "⚜", "FleurDeLis"],
    ["2622", "☢", "Radiation"],
    ["2623", "☣", "Biohazard"],
    ["2620", "☠", "Skull"],
    ["2638", "☸", "Dharma"],
    ["2624", "☤", "Caduceus"],
    ["2695", "⚕", "Aeculapius staff"],
    ["269A", "⚚", "Hermes staff"],
    ["2697", "⚗", "Alembic"],
    ["266B", "♫", "Music"],
    ["2702", "✂", "Scissors"],
    ["2696", "⚖", "Scales"],
    ["2692", "⚒", "Hammer and pick"],
    ["2694", "⚔", "Swords"],
    ["0021", "!", "Exclamation"]
];

texts = {
    inicial: [
        'Um $Empregador$ esta solicitando ajuda para $Objetivo$ $Alvo$ que $Verbo$ uma $Local$ $LocalDescricao$',
        'Devemos $Objetivo$ $Alvo$ em uma $Local$ $LocalDescricao$ para ajudar um $Empregador$',
        'Em uma $Local$ $LocalDescricao$ existe $Alvo$ que voces devem $Objetivo$',
        '$Verbo$ uma $Local$ $Alvo$, que esta causando problemas para o reino.',
        'Em uma $Local$ existe um $Empregador$ ajudar a $Objetivo$ $Alvo$'

    ]
}

quests = {


    Empregador:['Nobre', 'Anciao', 'Sacerdote', 'Ladrao', 'Alquimista', 'Plebeu', 'Mago', "Soldado", 'Bruxo', 'Homem misterioso', 'Mercador', 'Espiao', 'Bardo', 'Taverneiro', 'Ferreiro', "Joalheiro", 'Puta'],
    

    Local: ['Cidade Grande', 'Vila', 'Ruina', "Masmorra", "Regiao isolada"],
    LocalDescricao: {
        "Cidade Grande": ['No templo local', 'no Castelo', 'na sede de uma guilda', 'no distrito mais pobre', 'no subterraneo da cidade', 'no distrito dos mercados'],
        "Vila": ['abandonada', 'pobre', 'destruida', 'protegida', 'amaldicoada', 'afetada por uma peste'],
        "Ruina": ['de uma antiga cidade', 'da torre de um feiticeiro', 'de um antigo forte', 'de uma tumba', 'de um pequno vilarejo', 'de um templo', 'de um antigo monasterio', 'de um antigo castelo'],
        "Masmorra": ['antiga', 'abandonada', 'elfica', 'anã', 'sangrenta', 'fedorenta', 'toxica', 'soterrada', 'deslumbrate', 'submersa', 'desconhecida', 'esquecida', 'lacrada', 'escura', 'ancestral'],
        "Regiao isolada": ['do reino', 'de um vale proibido', 'por uma antiga magia', 'e desconhecida',  'contendo um forte', 'com uma torre', 'com um acampamento', 'e probida', 'por ser perigosa']
    },


    Objetivo: ['Eliminar', 'Resgatar', 'Deter', 'Obter informacoes sobre', 'Encontrar', 'Escoltar', 'Proteger', 'Roubar', 'Sequestrar', 'Enganar'],

    Alvo: ['Uma caravana', 'uma criatura misteriosa', 'um ser sobrenatural', 'um general', 'um artefato', 'um bando de criaturas', 'um vampiro', 'o rei', 'um documento',
    //  'um nobre', 'um anciao', 'um sacerdote', 'um ladrao', 'um alqumista', 'um plebeu', 'um mago', 'um soldado','um bruxo', 'um homem misterioso', 'um mercador', 'um espiao', 'um bardo', 'um taverneiro', 'um ferreiro', 'um joalheiro',
      'uma puta'],

    Verbo:['esta escondido em', 'esta assolando', 'esta atacando', 'esta roubando', 'esta fugindo de', 'esta mantendo refens em', 'esta tocando o terror em', 'esta aterrorizando', 'esta saqueando', 'esta assombrando', 'esta causando problemas em', 'esta escondendo um objeto em', 'esta em posse de'],
 
    

   
}


function loadMarkers(){
    for (let i=0; i < iconsTable.length; i++) {
      let svgIcon = `<symbol id="marker_${iconsTable[i][2]}" viewBox="0 0 30 30" width="30" height="30">
          <path d="M6,19 l9,10 L24,19" fill="#000000" stroke="none"></path>
          <circle cx="15" cy="15" r="10" fill="#ffffff" stroke="#000000" stroke-width="1"></circle><text x="50%" y="50%"
          fill="#000000" stroke="#3200ff" stroke-width="0" font-size="17.5px" dominant-baseline="central">
          ${iconsTable[i][1]}
          </text>
        </symbol> `
        document.getElementById("defs-markers").innerHTML+=(svgIcon)
        
    }
  }
loadMarkers()