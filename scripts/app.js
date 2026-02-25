import { jobCards } from './data.js';

let currentTab = "allbtn";
const jobContainer = document.getElementById("all_job_container");
const acc_job_container = document.getElementById("acc_job_container");
const rej_job_container = document.getElementById("rej_job_container");

const totalCountElements = document.querySelectorAll(".total_count");
const interviewCountElement = document.querySelector(".interview_count");
const rejectCountElement = document.querySelector(".reject_count");

const smallCounter = document.getElementById('smallCounter');
const allbtn = document.getElementById("allbtn");
const interviewbtn = document.getElementById("interviewbtn");
const rejectbtn = document.getElementById("rejectbtn");

document.addEventListener('DOMContentLoaded', () => {
    updateDashboardCounts();
    renderActiveTab();
});

const updateDashboardCounts = () => {
    const total = jobCards.length;
    const interview = jobCards.filter(job => job.status === 'interview').length;
    const reject = jobCards.filter(job => job.status === 'reject').length;

    totalCountElements.forEach(el => el.innerText = total);
    interviewCountElement.innerText = interview;
    rejectCountElement.innerText = reject;
};

const renderCards = (container, jobs, isFilteredTab = false) => {
    container.innerHTML = '';
    
    // Update small counter
    if (!isFilteredTab) {
        smallCounter.innerHTML = `${jobCards.length} Jobs`;
    } else {
        smallCounter.innerHTML = `${jobs.length} of ${jobCards.length} Jobs`;
    }

    if (jobs.length === 0) {
        container.innerHTML = `
            <section class='max-w-6xl mx-auto'>
                <div class="flex flex-col justify-center items-center">
                    <img class="w-20 h-20" src="./jobs.png" alt="No jobs">
                    <p class="font-bold text-[#002C5C]">No jobs available</p>
                    <p class="text-sm text-slate-500">Check back soon for new job opportunities</p>
                </div>
            </section>
        `;
        return;
    }

    jobs.forEach(job => {
        let borderColor = "border-slate-400";
        let statusBadgeClass = "bg-slate-400";
        let statusText = "Not Applied";

        if (job.status === "reject") {
            borderColor = "border-red-400";
            statusBadgeClass = "bg-red-400 text-white";
            statusText = "Reject";
        } else if (job.status === "interview") {
            borderColor = "border-green-400";
            statusBadgeClass = "bg-green-400 text-white";
            statusText = "Interview";
        }

        const child = document.createElement('div');
        child.innerHTML = `
            <div class="flex flex-col justify-between gap-2 bg-white outline-2 outline-gray-100 p-4 rounded border-l-4 ${borderColor}">
                <div class="flex flex-row justify-between items-center">
                    <div>
                        <h1 class="text-lg font-bold text-[#002C5C]">${job.companyName}</h1>
                        <p class="text-md text-gray-500">${job.position}</p>
                    </div>
                    <div data-id="${job.id}" data-action="delete" class="border-2 h-8 w-8 border-slate-200 rounded-full p-2.5 flex flex-col justify-center items-center cursor-pointer hover:border-red-400 active:bg-slate-50 transition-all duration-200 ease-in-out">
                        <i data-id="${job.id}" data-action="delete" class="fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <p class="text-sm text-gray-500">${job.location} • ${job.type} • ${job.salary}</p>
                <span class="${statusBadgeClass} w-32 text-center rounded p-2 mt-1">${statusText}</span>
                <p class="text-sm text-gray-500">${job.description}</p>
                <div class="flex flex-row gap-2 pt-2">
                    <button data-id="${job.id}" data-action="interview" class="btn btn-outline btn-success interview_btn">Interview</button>
                    <button data-id="${job.id}" data-action="reject" class="btn btn-outline btn-error reject_btn">Rejected</button>
                </div>
            </div>
        `;
        container.appendChild(child);
    });
};

const renderActiveTab = () => {
    if (currentTab === "allbtn") {
        renderCards(jobContainer, jobCards, false);
    } else if (currentTab === "interviewbtn") {
         const interviewJobs = jobCards.filter(job => job.status === "interview");
         renderCards(acc_job_container, interviewJobs, true);
    } else if (currentTab === "rejectbtn") {
         const rejectJobs = jobCards.filter(job => job.status === "reject");
         renderCards(rej_job_container, rejectJobs, true);
    }
};

const toggleTabVisibility = (id) => {
    document.querySelectorAll(".nosto-btn").forEach(node => {
        node.classList.remove("btn-primary");
    });
    
    document.getElementById(id).classList.add("btn-primary");

    [jobContainer, acc_job_container, rej_job_container].forEach(container => {
        container.classList.add("hidden");
    });

    if (id === "allbtn") {
        jobContainer.classList.remove("hidden");
    } else if (id === "interviewbtn") {
        acc_job_container.classList.remove("hidden");
    } else if (id === "rejectbtn") {
        rej_job_container.classList.remove("hidden");
    }
};

// Event Listeners for Tabs
allbtn.addEventListener('click', () => {
    currentTab = "allbtn";
    toggleTabVisibility('allbtn');
    renderActiveTab();
});

interviewbtn.addEventListener("click", () => {
    currentTab = "interviewbtn";
    toggleTabVisibility('interviewbtn');
    renderActiveTab();
});

rejectbtn.addEventListener("click", () => {
    currentTab = "rejectbtn";
    toggleTabVisibility('rejectbtn');
    renderActiveTab();
});

// Event Delegation for Action Buttons
const handleJobAction = (e) => {
    const action = e.target.dataset.action;
    const elId = Number(e.target.dataset.id);

    if (!action || !elId) return;

    const jobIndex = jobCards.findIndex(job => job.id === elId);
    if (jobIndex === -1) return;

    if (action === "interview") {
        jobCards[jobIndex].status = "interview";
    } else if (action === "reject") {
         jobCards[jobIndex].status = "reject";
    } else if (action === "delete") {
         jobCards.splice(jobIndex, 1);
    }

    updateDashboardCounts();
    renderActiveTab();
};

[jobContainer, acc_job_container, rej_job_container].forEach(container => {
    container.addEventListener("click", handleJobAction);
});
