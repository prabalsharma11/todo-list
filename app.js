const but = document.getElementById('btn')
const inp = document.getElementById('title')
const dis = document.getElementById('desc')
const todo = document.getElementById('todo')
but.addEventListener('click', () => {
  if (!inp.value.trim() || !dis.value.trim()) {
    alert('exter full details')
    return
  }
  let task = document.createElement('div')
  task.classList.add(
    'border',
    'p-3',
    'mycolor',
    'd-flex',
    'justify-content-between',
    'align-items-center',
    'mt-3',
    'rounded-4'
  )
  let leftdiv = document.createElement('div')
  let rightdiv = document.createElement('div')
  let head = document.createElement('h3')
  head.innerText = inp.value.trim()
  let tdis = document.createElement('p')
  tdis.innerText = dis.value.trim()
  let dlt = document.createElement('button')
  dlt.innerText = 'delete'
  dlt.addEventListener('click', () => {
    todo.removeChild(task)
  })
  dlt.classList.add('btn', 'btn-danger')
  task.appendChild(leftdiv)
  task.appendChild(rightdiv)
  leftdiv.appendChild(head)
  leftdiv.appendChild(tdis)
  rightdiv.appendChild(dlt)
  todo.appendChild(task)
  inp.value = ''
  dis.value = ''
})
