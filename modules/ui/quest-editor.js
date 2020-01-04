 
let burgs = pack.burgs.filter(b => b.i && !b.removed)
let states = [...new Set(pack.states.filter(x=>!x.removed).map(x => x.name))];

function editQuests() {  
  $("#questsEditor").dialog({
    title: "Quest Editor", minWidth: "40em", minHeight:'40rem',
    position: {my: "center", at: "center", of: 'svg' }
  });

  
 
  document.getElementById('generateQuest').addEventListener('click', btnClick)


  const cardTitle = document.getElementById('cardtitle')
  const cardText = document.getElementById('cardtext')
    
  const kingdom = document.getElementById('kingdom') 
  const location = document.getElementById("location")
  const onlyBurg = document.getElementById("onlyBurg")
  
 onlyBurg.onchange = (e)=>{
   kingdom.disabled = onlyBurg.checked
 }
  
  
  function btnClick() {
    
      let loc = getPossibleLocation()
      let q = getObjective(loc[2])
      cardTitle.innerHTML = q[0]
      cardText.innerHTML = q[1]
      
      
      addQuestMarker(q[0], q[1], loc[0], loc[1])


  } 
  function getPossibleLocation() {
    burg = Object
    if(!onlyBurg.checked){
       
     burg = pack.cells.p[randomEl(pack.cells.h.filter(h=>h>20))]
     burg.x = burg[0]
     burg.y = burg[1]
    } else{
      state = kingdom.value
      if(!state.includes("none")){
        stateId = pack.states.filter(x=>x.name===state, state)[0].i
        burg = randomEl(burgs.filter(x=>x.state===stateId, stateId))     
      }else{
        burg = randomEl(burgs)
      }
    }
    return [burg.x,burg.y, burg]
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
  
  
 
  function getObjective(burg) {


    
      let objetivo = randomEl(texts.inicial)

      let Local = location.value == 'none'? randomEl(quests.Local):location.value
      let LocalDescricao = randomEl(quests.LocalDescricao[Local])

      let Empregador = randomEl(quests.Empregador) 
      let Objetivo = randomEl(quests.Objetivo) 
      let Alvo = randomEl(quests.Alvo) 
      let Verbo = randomEl(quests.Verbo)  
     
      debugger
      objetivo = objetivo          
          .replace("$Objetivo$",Objetivo ) 
          .replace("$Local$", Local)
          .replace("$LocalDescricao$",LocalDescricao) 
          .replace("$Alvo$", Alvo)  
          .replace('$Verbo$', Verbo)
          .replace('$Empregador$', Empregador)
      objetivo = `${objetivo.charAt(0).toUpperCase()}${objetivo.slice(1).toLowerCase()}`
          
      title = ` asd` 
      return [title, objetivo ]


      choice = Array()
      if (burg.Temple !== '') {
          choice.push(`Templo de ${destino.name}`)
      } else if (destino.Port !== '') {
          choice.push(`Porto de ${destino.name}`)
      } else if (burgs[1]["Shanty Town"] !== '') {
          choice.push(`Favela de ${destino.name}`)
      } else if (destino.Plaza !== '') {
          choice.push(`Mercado de ${destino.name}`)
      }
  }
 


  
  
  function randomEl(items) {  
      return items.length ? items[Math.floor(Math.random() * items.length)] : "";  
  }

   

  quests.Local.forEach(el => {
    location.options.add(new Option(el,el)); 
    })

  states.forEach(el => {
      kingdom.options.add(new Option(el,el)); 
  })
    

}

