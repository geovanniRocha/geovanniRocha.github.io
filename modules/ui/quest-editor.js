 
function editQuests() {
 
  burgs = pack.burgs.filter(b => b.i && !b.removed)
  
  $("#questsEditor").dialog({
    title: "Quest Editor", minWidth: "40em", minHeight:'40rem',
    position: {my: "center", at: "center", of: 'svg' }
  });

  
 
  document.getElementById('generateQuest').addEventListener('click', btnClick)


  const cardTitle = document.getElementById('cardtitle')
  const cardText = document.getElementById('cardtext')
    
  const kingdom = document.getElementById('kingdom') 
  const location = document.getElementById("location")
  
 
  
  
  function btnClick() {
      let q = getObjective()
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
        .attr("xlink:href", "#marker_Exclamation")
        .attr("data-id", "#marker_Exclamation")
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
  
  
 
  function getObjective( ) {
    let objetivo = randomEl(texts.inicial)

      let Local = location.value == 'none'? randomEl(quests.Local):location.value
      let LocalDescricao = randomEl(quests.LocalDescricao[Local])

      let Objetivos = randomEl(quests.Objetivos)
      let ObjetivosDescricao = randomEl(quests.ObjetivosDescricao[Objetivos]) 
    
      let state = kingdom.value
      let monstrosTexto="", complicacaoTexto ="" 
      if(!state.includes('none'))
        if(!notes.filter(x=>x.name===state, state)[0] ){
          let legend = notes.filter(x=>x.name===state, state)[0].legend 
          monstrosTexto =    randomEl(legend.split("Monstros: ")[1].split('\n')[0].split(",") ) 
          complicacaoTexto = randomEl(legend.split("Complicacoes: ")[1].split('\n')[0].split(",") )
        }
        let currentObjective = Objetivos.includes('/')? randomEl(Objetivos.split('/')):Objetivos
      objetivo = objetivo          
          .replace("$Objetivos$",currentObjective )
          .replace("$ObjetivosDescricao$", ObjetivosDescricao)
          .replace("$Local$", Local)
          .replace("$LocalDescricao$",LocalDescricao) 
          .replace("$Complicacoes$", complicacaoTexto)  
          .replace('$Monstros$', monstrosTexto)
        
    title = `${currentObjective} ${LocalDescricao}` 
      return [title, objetivo ]
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

  quests.Local.forEach(el => {
    location.options.add(new Option(el,el));
    // .innerHTML += `<option>${el}</option>`
    })

  states.forEach(el => {
      kingdom.options.add(new Option(el,el));
      // .innerHTML += `<option>${el}</option>`
  })
    

}

