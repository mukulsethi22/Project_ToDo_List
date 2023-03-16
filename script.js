let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask = $('#inpNewTask')


btnAdd.click(()=>{
    let listItem = $('<li>',{
        'class':'list-group-item',
        text:inpNewTask.val()
    })
    listItem.click(()=>{
        // $(event.target)
        listItem.toggleClass('done')
    })
    ulTasks.append(listItem)
    inpNewTask.val('')
})

btnReset.click(()=>inpNewTask.val(''))