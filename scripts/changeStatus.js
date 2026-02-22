jobContainer.addEventListener("click",(e)=>{
    //console.log(e.target.dataset)
    const action=e.target.dataset.action
    const el=e.target.dataset.id
    if(action==="interview"){
        innterviewJob(el)
        return
    }
    if(action==="reject"){
        rejectJob(el)
        return
    }
    if(action==="delete"){
        deleteJob(el)
        return
    }
})