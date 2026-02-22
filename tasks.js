// This is the core logic for our Mini Task Manager
let taskList = [];

/**
 * Adds a new task to the list
 * @param {string} taskName - The name of the task
 */
function addTask(taskName) {
    if (!taskName) {
        // FIXED: Changed 'consoole' back to 'console'
        console.error("Error: Task name cannot be empty!");
        return;
    }
    
    const newTask = {
        id: taskList.length + 1,
        name: taskName,
        completed: false,
        createdAt: new Date()
    };
    
    // FIXED: Changed 'pussh' back to 'push'
    taskList.push(newTask);
    console.log(`✅ Task Added: "${taskName}"`);
}

/**
 * Displays all tasks in the console
 */
function listTasks() {
    console.log("\n--- YOUR CURRENT TASKS ---");
    if (taskList.length === 0) {
        console.log("No tasks found. Your list is empty!");
    } else {
        // FIXED: Changed 'forEeach' back to 'forEach'
        taskList.forEach(task => {
            const status = task.completed ? "[X]" : "[ ]";
            console.log(`${task.id}. ${status} ${task.name}`);
        });
    }
    console.log("---------------------------\n");
}

// Test the functions
addTask("Learn Git Workflows");
addTask("Setup Windsurf IDE");
listTasks();
