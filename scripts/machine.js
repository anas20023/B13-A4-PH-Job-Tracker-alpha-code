const showContainer=(id)=>{
    const nodes=document.querySelectorAll(".nosto-btn")
    for(const node of nodes){
        if(node.classList.contains("btn-primary")){
            node.classList.remove("btn-primary")
        }
    }
    //  console.log(id)
    if(id==="allbtn"){
        document.getElementById("acc_job_container").classList.add("hidden")
        document.getElementById("rej_job_container").classList.add("hidden")
        document.getElementById("all_job_container").classList.remove("hidden")
        document.getElementById("all_job_container").classList.add("flex")
    }
    if(id==="interviewbtn"){
        document.getElementById("all_job_container").classList.add("hidden")
        document.getElementById("rej_job_container").classList.add("hidden")
        document.getElementById("acc_job_container").classList.remove("hidden")
        document.getElementById("acc_job_container").classList.add("flex")
    }
    if(id==="rejectbtn"){
        document.getElementById("acc_job_container").classList.add("hidden")
        document.getElementById("all_job_container").classList.add("hidden")
        document.getElementById("rej_job_container").classList.remove("hidden")
        document.getElementById("rej_job_container").classList.add("flex")
    }
    // document.getElementById(id).classList.remove("hidden")
    document.getElementById(id).classList.add("btn-primary")
}
const innterviewJob=(el)=>{
    const idx=jobCards.findIndex(job=> job.id===Number(el))
    if(idx==-1) {
        return
    }
    jobCards[idx].status="interview"
}
const rejectJob=(el)=>{
    const idx=jobCards.findIndex(job=> job.id===Number(el))
    if(idx==-1) {
        return
    }
    jobCards[idx].status="reject"
    
}
const deleteJob=(el)=>{
    const idx=jobCards.findIndex(job=> job.id===Number(el))
    if(idx==-1) {
        return
    }
    jobCards.splice(idx,1)

}