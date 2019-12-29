 
function editQuests() {
 
  burgs = pack.burgs.filter(b => b.i && !b.removed)
  
  $("#questsEditor").dialog({
    title: "Quest Editor", minWidth: "40em", minHeight:'40rem',
    position: {my: "center", at: "center", of: 'svg' }
  });

  
 
  document.getElementById('generateQuest').addEventListener('click', btnClick)


  const cardTitle = document.getElementById('cardtitle')
  const cardText = document.getElementById('cardtext')
  
  const startCity = document.getElementById('startCity')
  const finishCity = document.getElementById('destination')
  const kingdom = document.getElementById('kingdom')
  const questTypes = document.getElementById("QuestType")
  const location = document.getElementById("location")
  
  kingdom.addEventListener('click', (e) => {
      if (kingdom.value !== 'none') {
          finishCity.disabled = true
          finishCity.selectedIndex = 0
      } else {
          finishCity.disabled = false
      }
  })
  
  
  function btnClick() {
      let q = generateQuest()
      cardTitle.innerHTML = q[0]
      cardText.innerHTML = q[1]
      
      let loc = getPossibleLocation()
      
      addQuestMarker(q[0], q[1], loc[0], loc[1])


  } 
  function getPossibleLocation() {

    let x=0, y=0;
        state = kingdom.value
        stateId = pack.states.filter(x=>x.name===state, state)[0].i
        burg = randomEl(pack.burgs.filter(x=>x.state===stateId, stateId))
        debugger
        // let questPosibles = Array.from(cells.i).filter(i => cells.pop[i] > 2 && cells.h[i] < 50 && cells.h[i] > 25);
        // const cell = questPosibles.splice(Math.floor(Math.random() * questPosibles.length), 1);
        // x = pack.cells.p[cell][0]
        // y = pack.cells.p[cell][1];
    
    return [burg.x,burg.y]
  }

  function addQuestMarker(title, text, x, y) {
    addMarker("battlefield", "!", 50, 50, 20); 
      const id = getNextId("markerElement");
      markers
        .append("use")
        .attr("id", id)
        .attr("xlink:href", "#marker0")
        .attr("data-id", "#marker0")
        .attr("data-x", x)
        .attr("data-y", y)
        .attr("x", x - 15)        
        .attr("y", y - 15)
        .attr("data-size", 1)
        .attr("width", 30)
        .attr("height", 30);

    //   const name = Names.getCulture(cells.culture[cell]) + " Battlefield";
    //   const date = new Date(rand(100, 1000),rand(12),rand(31)).toLocaleDateString("en", {year:'numeric', month:'long', day:'numeric'}) + " " + era;
    //   notes.push({id, name, legend:`A historical battlefield spot. \r\nDate: ${date}`});
      notes.push({id, name:title, legend:text});
  }

  function addMarker(id, icon, x, y, size) {
    const markers = svg.select("#defs-markers");
    if (markers.select("#marker_"+id).size()) return;

    const symbol = markers.append("symbol").attr("id", "marker_"+id).attr("viewBox", "0 0 30 30");
    symbol.append("path").attr("d", "M6,19 l9,10 L24,19").attr("fill", "#000000").attr("stroke", "none");
    symbol.append("circle").attr("cx", 15).attr("cy", 15).attr("r", 10).attr("fill", "#ffffff").attr("stroke", "#000000").attr("stroke-width", 1);
    symbol.append("text").attr("x", x+"%").attr("y", y+"%").attr("fill", "#000000").attr("stroke", "#3200ff").attr("stroke-width", 0)
      .attr("font-size", size+"px").attr("dominant-baseline", "central").text(icon);
     
  }
  
  
  function generateQuest() {
    
      let a = Object,
          b = Object
  
      let org = startCity.value
      let destinat = finishCity.value
      let king = kingdom.value
  
      if (!org.includes("none") && !destinat.includes('none')) {
          a = randomBurg(org, x => x.name === org)
          filter(king)
          b = randomBurg(destinat, x => x.name === destinat)
      }
      if (!org.includes("none") && destinat.includes('none')) {
          a = randomBurg(org, x => x.name === org)
          filter(king)
          b = randomBurg(null, x => x.population > 0)
      }
  
      if (org.includes("none") && destinat.includes('none')) {
          filter(king)
          a = randomBurg(null, x => x.population > 0)
          b = randomBurg(null, x => x.population > 0)
      }
  
      let title = `${a.name} ${b.name}`
      let content = getObjective(a, b)
  
      return [title, content, a,b]
  }
  
  function getObjective(origem, destino) {
      let objetivo = randomEl(texts.inicial)
      let empregador = randomEl(quests.Empregador)
      let contrato = quests.TipoDeContrato
          .filter(x => x.dropdown === questTypes.value, questTypes.value)[0].texto
          .replace("$", randomEl(quests.Contrato[questTypes.value]))
      let alvo = randomEl(quests.Alvo)
      if (alvo.includes("$")) {
          choice = Array()
          if (destino.Temple !== '') {
              choice.push(`Templo de ${destino.name}`)
          } else if (destino.Port !== '') {
              choice.push(`Porto de ${destino.name}`)
          } else if (burgs[1]["Shanty Town"] !== '') {
              choice.push(`Favela de ${destino.name}`)
          } else if (destino.Plaza !== '') {
              choice.push(`Mercado de ${destino.name}`)
          }
          alvo = randomEl(choice)
      }
  
      let ameaca = randomEl(quests.Ameaca)
      let recompensa = randomEl(quests.Recompensas)






 
      let Local = location.value == 'none'? randomEl(quests.Local):location.value
      let LocalDescricao = randomEl(quests.LocalDescricao[Local])

      let Objetivos = randomEl(quests.Objetivos)
      let ObjetivosDescricao = randomEl(quests.ObjetivosDescricao[Objetivos]) 
    
      let state = kingdom.value
      let monstrosTexto="", complicacaoTexto =""
      if(notes.filter(x=>x.name===state, state)[0] ){
        let legend = notes.filter(x=>x.name===state, state)[0].legend 
        monstrosTexto =    randomEl(legend.split("Monstros: ")[1].split('\n')[0].split(",") ) 
        complicacaoTexto = randomEl(legend.split("Complicacoes: ")[1].split('\n')[0].split(",") )
      }
      objetivo = objetivo
          .replace("$origem$", origem ? origem.name : "")
          .replace("$destino$", destino ? destino.name : "")
          .replace("$empregador$", empregador)
          .replace("$TipoDeContrato$", contrato)
          .replace("$local$", alvo)
          .replace("$ameaca$", ameaca)
          .replace("$recompensa$", recompensa)

          .replace("$Objetivos$", Objetivos.includes('/')? randomEl(Objetivos.split('/')):Objetivos)
          .replace("$ObjetivosDescricao$", ObjetivosDescricao)
          .replace("$Local$", Local)
          .replace("$LocalDescricao$",LocalDescricao) 
          .replace("$Complicacoes$", complicacaoTexto)  
          .replace('$Monstros$', monstrosTexto)
  
      return objetivo
  
  }
 


  
  function filter(king) {
      if (!king.includes('none')) {
          burgs = burgs.filter(x => pack.states[x.state] === king, king)
      } else {
          burgs =  pack.burgs.filter(b => b.i && !b.removed)
      }
  }
  
  
  function randomEl(items) {
  
      return items.length ? items[Math.floor(Math.random() * items.length)] : "";
  
  }
  
  //randomBurg(x=>x.Population < 1000)
  function randomBurg(context, fx) {
      return randomEl(burgs.filter(fx, context))
  }
  
  function burgDist(burg1, burg2) {
      return distance(burg1.Latitude, burg1.Longitude, burg2.Latitude, burg2.Longitude)
  }
   


  let states = [...new Set(pack.states.map(x => x.name))];

  kingdom.innerHTML = "<option value='none'>Reinos</option>";
  questTypes.innerHTML = "";
  startCity.innerHTML = " <option value='none'>Cidade Inicial</option>";
  finishCity.innerHTML = "<option value='none'>Cidade Final</option>"; 

  quests.Local.forEach(el => {
    location.options.add(new Option(el,el));
    // .innerHTML += `<option>${el}</option>`
    })

  states.forEach(el => {
      kingdom.options.add(new Option(el,el));
      // .innerHTML += `<option>${el}</option>`
  })
  
  quests.TipoDeContrato.forEach(el => {
    questTypes.options.add(new Option(el.dropdown,el.dropdown));
      // questTypes.innerHTML += `<option>${el.dropdown}</option>`
  }) 
  burgs.forEach(el => {
    
      startCity.options.add(new Option(el.name,el.name));
      finishCity.options.add(new Option(el.name,el.name));
      // startCity.innerHTML += `<option value='${el.name}'>${el.name}</option>`
      // finishCity.innerHTML += `<option value='${el.name}'>${el.name}</option>`
  }) 
    

}

texts= {
  inicial:[
'  $Objetivos$ , $ObjetivosDescricao$ , $Local$ , $LocalDescricao$ , $Complicacoes$ ,    $Monstros$, ------------------ $origem$ $destino$ $empregador$ $TipoDeContrato$ $local$ $ameaca$ $recompensa$'
  ]}

quests = {


    Local:['Cidade', 'Vila', 'Ruina', "Masmorra", "Regiao isolada"],
    LocalDescricao:{"Cidade":['No templo local','no Castelo do lord', 'na sede de uma guilda', 'na casa de um nobre','no subterraneo'],
     "Vila":['abandonada', 'pegando fogo', 'com sinos tocando', 'com pessoas gritando', 'pobre', 'amaldicoada', 'afetada pela peste'], 
     "Ruina":['de uma cidade antiga', 'da torre de um feiticeiro', 'de um forte', 'de uma tumba','de um pequno vilarejo', 'de um templo'], 
     "Masmorra":['antiga', 'abandonada', 'elfica', 'anã', 'sangrenta', 'fedorenta', 'toxica', 'soterrada', 'deslumbrate', 'submersa'],
     "Regiao isolada":['de um vale proibido', 'de um templo antigo', 'contendo um forte','com uma torre', 'com um acampamento']
    },


    Objetivos:['ATACAR/MATAR/DESTRUIR', 'encontrar/recuperar', 'roubar/sequestrar', 'proteger', 'explorar/descobrir', 'sobreviver/escapar'],
    ObjetivosDescricao:{'ATACAR/MATAR/DESTRUIR':['uma pessoa importante', 'uma organizacao', 'uma comunidade', 'um artefato', 'uma criatura','um local'],
    'encontrar/recuperar':['uma pessoa desaparecida', 'uma pessoa sequestrada', 'um objeto perdido', 'um objeto roubado',' uma criatura rara', 'uma planta rara'],
    'roubar/sequestrar':['uma obra de arte', 'um item magico','um grimorio', 'uma pessoa importante', 'uma criatura poderosa', 'um mapa ou pergaminho com informacoes importantes'],
    'proteger':['uma comunidade','um local','um mercador', 'um objeto importante', 'uma caravana', 'uma organizacao' ],
    'explorar/descobrir':['uma nova rota ou caminho', 'uma ilha exotica', 'uma ruina', 'as catacumbas de uma cidade', 'um novo feitico sinistro', 'o paredeiro de um objeto poderoso'],
    'sobreviver/escapar':['de uma prisao', 'da caçada por uma guilda de assasinos', 'da furia de um feiticeiro', 'de um desastre natural', 'da acusacao de um crime nao cometido']},

    




    Pessoas:{
        Amigos:['amigo', 'irmao', 'pai'],
        Inimigos:['rei', 'traficante rival', 'concorrente'],
        Militar:['General','Tenente','Lider']
    },
    Contrato:{
        "Proteger":['um charlatao'],
        "Adquirir informação":[],
        "Eliminar":['alguma coisa', 'outra coisa'],
        "Roubo":[],
        "Resgate de uma ou mais pessoas":[],
        "Comprar/Vender":[],
        "Capturar":[],
        "Esconder":[],
        "Recuperar":[],
        "Invasão":[],
    },
    Empregador: [
        "Uma I.A.",
        "Uma banda de Rock",
        "Um hacker",
        "Um Membro do governo",
        "O Grupo Paramilitar",
        "Um jornalista",
        "Uma Gangue",
        "Um Detetive",
        "O CEO de uma mega Corporação",
        "Um Presidiário"
    ],
    // $=Amigos, %=Inimigos, &=Militar
    TipoDeContrato: [
        {dropdown: "Proteger", texto: "proteger $"},
        {dropdown: "Adquirir informação", texto: "Recolher intel"},
        {dropdown: "Eliminar", texto: "eliminar $"},
        {dropdown: "Roubo", texto: "roubar $"},
        {dropdown: "Resgate de uma ou mais pessoas", texto: "resgatar um amigo"},
        {dropdown: "Comprar/Vender", texto: "comprar e vender"},
        {dropdown: "Capturar", texto: "capturar $"},
        {dropdown: "Esconder", texto: "esconder $"},
        {dropdown: "Recuperar um item físico", texto: "recuparar uma reliquia"},
        {dropdown: "Invasão", texto: "invadir $"} 
    ],
    Alvo: [
        "$",
        "Nas ruas",
        "QG de uma Mega Corporação",
        "uma rede de esgotos",
        "um clube",
        "uma fábrica",
        "um local público",
        "um ambiente urbano",
        "uma Estação espacial",
        "um Centro de pesquisa",
        "uma Entidade governamental"
    ],
    Ameaca: [
        "Uma I.A. de nova geração",
        "Uma gangue de cybermotociclistas",
        "Drones patrulheiros",
        "Assassino de aluguel",
        "Militar com grande experiência de campo",
        "um CEO de uma megacorp",
        "Uma ameaça biotecnológica",
        "Cybermutante fruto de engenharia genética",
        "O líder de um país com políticas rivais a nação do jogo",
        "Anarquista que deseja reformar o mundo"
    ],
    complicacao:{"humandor":[], 'elferin':[]},
    Recompensas: [ 
        "Informação sigilosa",
        "Um item específico de alta tecnologia",
        "A planta de um local altamente vigiado",
        "Dinheiro",
        "Armamento",
        "Um estabelecimento",
        "Aliado poderoso",
        "Reputação",
        "Traição",
        "Morte"
    ]

}