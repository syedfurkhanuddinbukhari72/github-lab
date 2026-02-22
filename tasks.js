// 🚩 BUGGY VERSION - DO NOT USE IN PRODUCTION
let taskList = [];

function addTask(taskName) {
    if (!taskName) {
        // TYPO 1: 'consoole' instead of 'console'
        consoole.error("Error: Task name cannot be empty!"); 
        return;
    }
    
    const newTask = {
        id: taskList.length + 1,
        name: taskName,
        completed: false,
        createdAt: new Date()
    };
    
    // TYPO 2: 'pussh' instead of 'push'
    taskList.pussh(newTask); 
    console.log(`✅ Task Added: "${taskName}"`);
}

function listTasks() {
    console.log("\n--- YOUR CURRENT TASKS ---");
    if (taskList.length === 0) {
        console.log("No tasks found. Your list is empty!");
    } else {
        // TYPO 3: 'forEeach' instead of 'forEach'
        taskList.forEeach(task => { 
            const status = task.completed ? "[X]" : "[ ]";
            console.log(`${task.id}. ${status} ${task.name}`);
        });
    }
    console.log("---------------------------\n");
}

addTask("Learn Git Workflows");
addTask("Setup Windsurf IDE");
listTasks();