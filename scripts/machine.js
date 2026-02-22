const showContainer=(id)=>{
    const nodes=document.querySelectorAll(".nosto-btn")
    for(const node of nodes){
        if(node.classList.contains("btn-primary")){
            node.classList.remove("btn-primary")
        }
    }
    // document.getElementById(id).classList.remove("hidden")
    document.getElementById(id).classList.add("btn-primary")
}
const innterviewJob=(el)=>{
    const idx=Number(el)-1
    jobCards[idx].status="interview"
}
const rejectJob=(el)=>{
    const idx=Number(el)-1
    jobCards[idx].status="reject"
    
}
const deleteJob=(el)=>{
    const idx=Number(el)-1
    jobCards.splice(idx,1)

}