
        document.addEventListener('DOMContentLoaded', function() {
            // DOM Elements
            const goalTitleInput = document.getElementById('goal-title');
            const goalDescInput = document.getElementById('goal-description');
            const goalCategorySelect = document.getElementById('goal-category');
            const goalDeadlineInput = document.getElementById('goal-deadline');
            const addGoalBtn = document.getElementById('add-goal-btn');
            const goalsList = document.getElementById('goals-list');
            const filterStatus = document.getElementById('filter-status');
            const filterCategory = document.getElementById('filter-category');
            
            // Load goals from localStorage
            let goals = JSON.parse(localStorage.getItem('personalGoals')) || [];
            
            // Render goals
            renderGoals();
            
            // Add event listeners
            addGoalBtn.addEventListener('click', addGoal);
            filterStatus.addEventListener('change', renderGoals);
            filterCategory.addEventListener('change', renderGoals);
            
            // Functions
            function addGoal() {
                const title = goalTitleInput.value.trim();
                const description = goalDescInput.value.trim();
                const category = goalCategorySelect.value;
                const deadline = goalDeadlineInput.value;
                
                if (title === '') {
                    alert('Please enter a goal title');
                    return;
                }
                
                const newGoal = {
                    id: Date.now(),
                    title,
                    description,
                    category,
                    deadline,
                    completed: false,
                    createdAt: new Date().toISOString()
                };
                
                goals.push(newGoal);
                saveGoals();
                renderGoals();
                
                // Clear form
                goalTitleInput.value = '';
                goalDescInput.value = '';
                goalCategorySelect.value = 'personal';
                goalDeadlineInput.value = '';
            }
            
            function deleteGoal(id) {
                if (confirm('Are you sure you want to delete this goal?')) {
                    goals = goals.filter(goal => goal.id !== id);
                    saveGoals();
                    renderGoals();
                }
            }
            
            function toggleComplete(id) {
                const goalIndex = goals.findIndex(goal => goal.id === id);
                if (goalIndex !== -1) {
                    goals[goalIndex].completed = !goals[goalIndex].completed;
                    saveGoals();
                    renderGoals();
                }
            }
            
            function saveGoals() {
                localStorage.setItem('personalGoals', JSON.stringify(goals));
            }
            
            function renderGoals() {
                const statusFilter = filterStatus.value;
                const categoryFilter = filterCategory.value;
                
                let filteredGoals = goals;
                
                if (statusFilter !== 'all') {
                    const isCompleted = statusFilter === 'completed';
                    filteredGoals = filteredGoals.filter(goal => goal.completed === isCompleted);
                }
                
                if (categoryFilter !== 'all') {
                    filteredGoals = filteredGoals.filter(goal => goal.category === categoryFilter);
                }
                
                if (filteredGoals.length === 0) {
                    goalsList.innerHTML = `
                        <div class="empty-state">
                            <p>${goals.length === 0 ? 
                                "You haven't added any goals yet. Add your first goal above!" : 
                                "No goals match your current filters."}
                            </p>
                        </div>
                    `;
                    return;
                }
                
                goalsList.innerHTML = '';
                
                filteredGoals.forEach(goal => {
                    const goalElement = document.createElement('div');
                    goalElement.classList.add('goal-item');
                    if (goal.completed) {
                        goalElement.classList.add('completed');
                    }
                    
                    let deadlineText = '';
                    if (goal.deadline) {
                        const deadlineDate = new Date(goal.deadline);
                        deadlineText = deadlineDate.toLocaleDateString();
                    }
                    
                    goalElement.innerHTML = `
                        <div class="goal-title">${goal.title}</div>
                        <div class="goal-description">${goal.description}</div>
                        <div class="goal-meta">
                            <span>Category: ${goal.category}</span>
                            ${goal.deadline ? `<span>Deadline: ${deadlineText}</span>` : ''}
                        </div>
                        <div class="goal-actions">
                            <button class="complete-btn" data-id="${goal.id}">${goal.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
                            <button class="delete-btn" data-id="${goal.id}">Delete</button>
                        </div>
                    `;
                    
                    goalsList.appendChild(goalElement);
                });
                
                // Add event listeners to buttons
                document.querySelectorAll('.delete-btn').forEach(button => {
                    button.addEventListener('click', function() {
                        deleteGoal(Number(this.dataset.id));
                    });
                });
                
                document.querySelectorAll('.complete-btn').forEach(button => {
                    button.addEventListener('click', function() {
                        toggleComplete(Number(this.dataset.id));
                    });
                });
            }
        });
