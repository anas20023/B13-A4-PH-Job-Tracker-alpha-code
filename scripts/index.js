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

    for (const job of jobCards) {
        const child = document.createElement('div')
        child.innerHTML = `
    
                    <div class="flex flex-col justify-between gap-2 bg-white outline-2 outline-gray-100 p-4 rounded border-l-4 border-slate-200">
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
                    <span class="bg-[#EEF4FF] w-32 text-center rounded p-2 mt-1">NOT APPLIED</span>
                    <p class="text-sm text-gray-500">${job.description}</p>
                    <div class="flex flex-row gap-2 pt-2">
                        <button class="btn btn btn-outline btn-success">Interview</button>
                        <button class="btn btn btn-outline btn-error">Rejected</button>
                    </div>
                </div>
    
    `
        jobContainer.appendChild(child)
    }
}