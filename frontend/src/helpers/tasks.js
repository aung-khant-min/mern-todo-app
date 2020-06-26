const baseUrl = 'http://localhost:8080/tasks/'

//Add Task
export const addTask = (description) => fetch(baseUrl,{
    method : 'POST',
    body : JSON.stringify({description}),
    headers : {'Content-type':'application/json; charset=UTF-8'}
}).then(response => response.json())

//Get Tasks
export const fetchTasks = fetch(baseUrl).then(response => response.json())

//Complete Tasks
export const completeTask = (id,completed) => fetch(baseUrl+id,{
    method : 'PATCH',
    body : JSON.stringify({completed}),
    headers: {'Content-type': 'application/json; charset=UTF-8'}
}).then(response => response.json())

//Delete Tasks
export const deleteTask = (id) => fetch(baseUrl+id,{
    method : 'DELETE',
}).then(response => response.json())