// PRO VERSION - Advanced Task Manager v2.0
// This is the core logic for our Mini Task Manager
let myTasks = [];

/**
 * Adds a new task to the list
 * @param {string} taskName - The name of the task
 */
function addTask(taskName) {
    if (!taskName) {
        taskName = "Untitled Task";
    }
    
    const newTask = {
        id: myTasks.length + 1,
        name: taskName,
        completed: false,
        important: false,
        createdAt: new Date()
    };
    
    // FIXED: Changed 'pussh' back to 'push'
    myTasks.push(newTask);
<<<<<<< HEAD
    console.log("⚠️ PRIORITY TASK ADDED: " + taskName);
=======
    console.log("✨ Sweet! New task added: " + taskName);
>>>>>>> feat/friendly-change
}

/**
 * Displays all tasks in the console
 */
function listTasks() {
    console.log("\n--- YOUR CURRENT TASKS ---");
    if (myTasks.length === 0) {
        console.log("No tasks found. Your list is empty!");
    } else {
        // FIXED: Changed 'forEeach' back to 'forEach'
        myTasks.forEach(task => {
            const status = task.completed ? "[X]" : "[ ]";
            console.log(`${task.id}. ${status} ${task.name}`);
        });
    }
}

// Test the functions
addTask("Learn Git Workflows");
addTask("Setup Windsurf IDE");
listTasks();

function clearTasks() {}


function getTaskCount() {
    console.log(`📊 Total Tasks: ${myTasks.length}`);
}
getTaskCount();

