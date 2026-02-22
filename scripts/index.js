const jobContainer = document.getElementById("job_container")
const totalCount=document.querySelectorAll(".total_count")
const interviewCount=document.querySelector(".interview_count")
const rejectCount=document.querySelector(".reject_count")
document.addEventListener('DOMContentLoaded', () => {
    showAllJobs()
    for(const counter of totalCount){
        counter.innerText=Number(jobCards.length)
    }
    // console.log(totalCount)
})
const showAllJobs = () => {
    jobContainer.innerHTML=''
    if(jobCards.length<=0){
        const child=document.createElement("section")
        child.className='max-w-6xl mx-auto'
        child.innerHTML=

            `
                <div class="flex flex-col justify-center items-center">
                <img class="w-20 h-20" src="../jobs.png" >
                <p class="font-bold text-[#002C5C]">No jobs available</p>
                <p class="text-sm text-slate-500">Check back soon for new job opportunities</p>
                </div>
            `

        jobContainer.appendChild(child)
        return
    }

    for (const job of jobCards) {
        const child = document.createElement('div')
        child.innerHTML = `
    
                    <div class="flex flex-col justify-between gap-2 bg-white outline-2 outline-gray-100 p-4 rounded border-l-4 ${(job.status==="reject")?"border-red-400":(job.status==="interview")?"border-green-400":"border-slate-400"}">
                    <div class="flex flex-row justify-between items-center">
                        <div>
                            <h1 class="text-lg font-bold text-[#002C5C]">${job.companyName}</h1>
                            <p class="text-md text-gray-500">${job.position}</p>
                        </div>
                        <div
                            class="border-2 h-8 w-8 border-slate-200 rounded-full p-2.5 flex flex-col justify-center items-center cursor-pointer hover:border-red-400 active:bg-slate-50 transition-all duration-200 ease-in-out">
                            <i class="fa-regular fa-trash-can"></i>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500">${job.location + "  •  "+ job.type +"  •  "+ job.salary}</p>
                    <span class="${(job.status==="reject")?"bg-red-400 text-white":(job.status==="interview")?"bg-green-400 text-white":"bg-slate-400"} w-32 text-center rounded p-2 mt-1">${(job.status==="reject")?"REJECT":(job.status==="interview")?"APPLIED":"NOT APPLED"}</span>
                    <p class="text-sm text-gray-500">${job.description}</p>
                    <div class="flex flex-row gap-2 pt-2">
                        <button  class="btn btn btn-outline btn-success interview_btn">Interview</button>
                        <button  class="btn btn btn-outline btn-error reject_btn">Rejected</button>
                    </div>
                </div>
    
    `
        jobContainer.appendChild(child)
    }
}
const showInterViewJobs = () => {
    jobContainer.innerHTML=''
    // console.log(jobCards)
    const newJobCards=jobCards.filter((job)=>{
        return job.status==="interview"
    })
    if(newJobCards.length<=0){
        const child=document.createElement("section")
        child.className='max-w-6xl mx-auto'
        child.innerHTML=

            `
                <div class="flex flex-col justify-center items-center">
                <img class="w-20 h-20" src="../jobs.png" >
                <p class="font-bold text-[#002C5C]">No jobs available</p>
                <p class="text-sm text-slate-500">Check back soon for new job opportunities</p>
                </div>
            `

        jobContainer.appendChild(child)
        return
    }

    for (const job of newJobCards) {
        const child = document.createElement('div')
        child.innerHTML = `
    
                    <div class="flex flex-col justify-between gap-2 bg-white outline-2 outline-gray-100 p-4 rounded border-l-4 ${(job.status==="reject")?"border-red-400":(job.status==="interview")?"border-green-400":"border-slate-400"}">
                    <div class="flex flex-row justify-between items-center">
                        <div>
                            <h1 class="text-lg font-bold text-[#002C5C]">${job.companyName}</h1>
                            <p class="text-md text-gray-500">${job.position}</p>
                        </div>
                        <div
                            class="border-2 h-8 w-8 border-slate-200 rounded-full p-2.5 flex flex-col justify-center items-center cursor-pointer hover:border-red-400 active:bg-slate-50 transition-all duration-200 ease-in-out">
                            <i class="fa-regular fa-trash-can"></i>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500">${job.location + "  •  "+ job.type +"  •  "+ job.salary}</p>
                    <span class="${(job.status==="reject")?"bg-red-400 text-white":(job.status==="interview")?"bg-green-400 text-white":"bg-slate-400"} w-32 text-center rounded p-2 mt-1">${(job.status==="reject")?"REJECT":(job.status==="interview")?"APPLIED":"NOT APPLED"}</span>
                    <p class="text-sm text-gray-500">${job.description}</p>
                    <div class="flex flex-row gap-2 pt-2">
                        <button  class="btn btn btn-outline btn-success interview_btn">Interview</button>
                        <button  class="btn btn btn-outline btn-error reject_btn">Rejected</button>
                    </div>
                </div>
    
    `
        jobContainer.appendChild(child)
    }
}
const showRejectViewJobs = () => {
    jobContainer.innerHTML=''
    // console.log(jobCards)
    const newJobCards=jobCards.filter((job)=>{
        return job.status==="reject"
    })
    if(newJobCards.length<=0){
        const child=document.createElement("section")
        child.className='max-w-6xl mx-auto'
        child.innerHTML=

            `
                <div class="flex flex-col justify-center items-center">
                <img class="w-20 h-20" src="../jobs.png" >
                <p class="font-bold text-[#002C5C]">No jobs available</p>
                <p class="text-sm text-slate-500">Check back soon for new job opportunities</p>
                </div>
            `

        jobContainer.appendChild(child)
        return
    }

    for (const job of newJobCards) {
        const child = document.createElement('div')
        child.innerHTML = `
    
                    <div class="flex flex-col justify-between gap-2 bg-white outline-2 outline-gray-100 p-4 rounded border-l-4 ${(job.status==="reject")?"border-red-400":(job.status==="interview")?"border-green-400":"border-slate-400"}">
                    <div class="flex flex-row justify-between items-center">
                        <div>
                            <h1 class="text-lg font-bold text-[#002C5C]">${job.companyName}</h1>
                            <p class="text-md text-gray-500">${job.position}</p>
                        </div>
                        <div
                            class="border-2 h-8 w-8 border-slate-200 rounded-full p-2.5 flex flex-col justify-center items-center cursor-pointer hover:border-red-400 active:bg-slate-50 transition-all duration-200 ease-in-out">
                            <i class="fa-regular fa-trash-can"></i>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500">${job.location + "  •  "+ job.type +"  •  "+ job.salary}</p>
                    <span class="${(job.status==="reject")?"bg-red-400 text-white":(job.status==="interview")?"bg-green-400 text-white":"bg-slate-400"} w-32 text-center rounded p-2 mt-1">${(job.status==="reject")?"REJECT":(job.status==="interview")?"APPLIED":"NOT APPLED"}</span>
                    <p class="text-sm text-gray-500">${job.description}</p>
                    <div class="flex flex-row gap-2 pt-2">
                        <button  class="btn btn btn-outline btn-success interview_btn">Interview</button>
                        <button  class="btn btn btn-outline btn-error reject_btn">Rejected</button>
                    </div>
                </div>
    
    `
        jobContainer.appendChild(child)
    }
}