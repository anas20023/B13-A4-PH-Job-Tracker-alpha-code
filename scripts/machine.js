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