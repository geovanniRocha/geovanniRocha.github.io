 
function editEvents() {
 
  burgs = pack.burgs.filter(b => b.i && !b.removed)
  
  $("#eventsEditor").dialog({
    title: "Events Generator", minWidth: "40em", minHeight:'40rem',
    position: {my: "center", at: "center", of: 'svg' }
  });
 
  document.getElementById('generateEvent').addEventListener('click', btnClick)
  const eventsOption = document.getElementById('EventType') 
  
   
  
  
  function btnClick() {
      let q = generateQuest()
      
      let loc = getPossibleLocation()      
      addQuestMarker(q[0], q[1], loc[0], loc[1])


  } 
  function getPossibleLocation() {
    let x=0, y=0;
    roads = []
    pack.cells.road.forEach((el,i)=>{
        roads.push({el, i}) 
    }) 
    cell = randomEl(roads.filter(x=>x.el != 0)).i 
    x = pack.cells.p[cell][0];
    y = pack.cells.p[cell][1];
    return [x,y]
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
  
      
      let title = `qwe`
      let content = 'asd' 
  
      return [title, content]
  }
   

  function randomEl(items) {
      return items.length ? items[Math.floor(Math.random() * items.length)] : "";
  }
   

}