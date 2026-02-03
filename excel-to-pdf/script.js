lucide.createIcons();
// Make sure lucide icons are created first
if (window.lucide) {
  lucide.createIcons();
}

// Elements
const allToolsBtn = document.getElementById('all-tools-btn');
const megaMenu = document.getElementById('mega-menu');

// Toggle function for keyboard & mobile support
function setMenuOpen(isOpen) {
  if (!megaMenu || !allToolsBtn) return;
  if (isOpen) {
    megaMenu.classList.add('open');
    megaMenu.setAttribute('aria-hidden', 'false');
    allToolsBtn.setAttribute('aria-expanded', 'true');
  } else {
    megaMenu.classList.remove('open');
    megaMenu.setAttribute('aria-hidden', 'true');
    allToolsBtn.setAttribute('aria-expanded', 'false');
  }
}

// Click toggling (useful for touch devices / smaller screens)
allToolsBtn && allToolsBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const isOpen = megaMenu.classList.contains('open');
  setMenuOpen(!isOpen);
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!megaMenu || !allToolsBtn) return;
  if (!megaMenu.contains(e.target) && !allToolsBtn.contains(e.target)) {
    setMenuOpen(false);
  }
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    setMenuOpen(false);
    allToolsBtn && allToolsBtn.focus();
  }
});

// Optional: close menu when a menu link is clicked (improves UX)
megaMenu && megaMenu.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link) setMenuOpen(false);
});


    // Search button action
    const searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", () => {
        console.log("Search clicked");
        alert("Search feature coming soon ");
    });

    // Free trial CTA click
    const trialBtn = document.getElementById("trialBtn");
    trialBtn.addEventListener("click", () => {
        console.log("Start Free Trial clicked");
        trialBtn.innerText = "Redirecting...";
        setTimeout(() => {
            trialBtn.innerText = "Start Free Trial";
        }, 1000);
    });

   
/* ================= DATA QUEUE LOGIC ================= */

// Element references
const dropZone = document.getElementById("drop-zone");
const dropArea = dropZone ? dropZone.querySelector(".drop-area") : null;
const fileInput = document.getElementById("file-input");
const fileQueueEl = document.getElementById("file-queue");
const clearQueueBtn = document.getElementById("clear-queue");

// Stores uploaded Excel files
let fileQueue = [];
let activeFileIndex = -1;

/* ---------- Open file picker on click ---------- */
dropZone && dropZone.addEventListener("click", () => {
    fileInput.click();
});

/* ---------- Handle file selection ---------- */
fileInput && fileInput.addEventListener("change", (e) => {
    handleFiles(e.target.files);
});

/* ---------- Drag visual feedback ---------- */
["dragenter", "dragover"].forEach((event) => {
    dropZone && dropZone.addEventListener(event, (e) => {
        e.preventDefault();
        dropArea && dropArea.classList.add("drag-active");
    });
});

["dragleave", "drop"].forEach((event) => {
    dropZone && dropZone.addEventListener(event, (e) => {
        e.preventDefault();
        dropArea && dropArea.classList.remove("drag-active");
    });
});

/* ---------- Handle file drop ---------- */
dropZone && dropZone.addEventListener("drop", (e) => {
    handleFiles(e.dataTransfer.files);
});

/* ---------- Process uploaded files ---------- */
function handleFiles(files) {
    const validFiles = Array.from(files).filter(file =>
        file.name.endsWith(".xlsx") || file.name.endsWith(".xls")
    );

    if (validFiles.length === 0) {
        alert("Please upload Excel files only (.xlsx, .xls)");
        return;
    }

    // Add files to queue
    fileQueue.push(...validFiles);

    // Set first file active
    if (activeFileIndex === -1) activeFileIndex = 0;

    updateQueueUI();
}

/* ---------- Update UI list ---------- */
function updateQueueUI() {
    fileQueueEl.innerHTML = "";

    if (fileQueue.length === 0) {
        fileQueueEl.classList.add("hidden");
        clearQueueBtn.classList.add("hidden");
        return;
    }

    fileQueueEl.classList.remove("hidden");
    clearQueueBtn.classList.remove("hidden");

    fileQueue.forEach((file, index) => {
        const div = document.createElement("div");
        const isActive = index === activeFileIndex;

        div.className = `
            file-item flex items-center justify-between p-2.5 rounded-lg border cursor-pointer
            ${isActive ? "active" : "border-slate-200 bg-white"}
        `;

        div.innerHTML = `
            <!-- File info -->
            <div class="flex items-center gap-3 overflow-hidden"
                 onclick="setActiveFile(${index})">
                <div class="p-1.5 rounded
                    ${isActive ? "bg-white text-brand-600" : "bg-slate-100 text-slate-500"}">
                    <i data-lucide="file-spreadsheet" class="w-4 h-4"></i>
                </div>
                <p class="text-xs font-medium truncate w-32
                    ${isActive ? "text-brand-700" : "text-slate-700"}">
                    ${file.name}
                </p>
            </div>

            <!-- Remove file -->
            <button onclick="removeFile(${index})"
                class="p-1 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded">
                <i data-lucide="x" class="w-3.5 h-3.5"></i>
            </button>
        `;

        fileQueueEl.appendChild(div);
    });

    // Re-render icons
    lucide.createIcons();
}

/* ---------- Set active file ---------- */
window.setActiveFile = function (index) {
    activeFileIndex = index;
    updateQueueUI();
};

/* ---------- Remove single file ---------- */
window.removeFile = function (index) {
    fileQueue.splice(index, 1);

    if (fileQueue.length === 0) {
        activeFileIndex = -1;
    } else if (activeFileIndex >= index) {
        activeFileIndex = Math.max(0, activeFileIndex - 1);
    }

    updateQueueUI();
};

/* ---------- Clear all files ---------- */
clearQueueBtn.addEventListener("click", () => {
    fileQueue = [];
    activeFileIndex = -1;
    updateQueueUI();
});

/* ================= END DATA QUEUE LOGIC ================= */

