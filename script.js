function satCode() {

  
  let bodyById = document.getElementById('body');
  
  // console.log(bodyById)
  
  // by querySelector
  
  let bodyq = document.querySelector('#body .nav');
  
  console.log(bodyq)
  
  // by querySelectorAll
  
  let allLi = document.querySelectorAll('.tasks li');
  
  allLi.forEach(li=> {
    console.log(li)
  })
  console.log(allLi)
  
  // ? dom navigation
  
  let navH1 = document.querySelector('.nav h1');
  
  console.log(navH1.parentElement)
  console.log(navH1.parentElement.firstElementChild)
  console.log(navH1.parentElement.lastElementChild)
  console.log(navH1.nextElementSibling)
  console.log(navH1.nextElementSibling.previousElementSibling)
  

  
  let nav = navH1.parentElement;
  // gettting text
  console.log(nav.textContent)
  console.log(nav.innerText)
  console.log(nav.innerHTML)

  
  
  navH1.setAttribute('title','Todo List App')
  
  // remove attribute
  
  nav.setAttribute('class','nav NAV')


  let li = document.createElement('li');
  let spanTask = document.createElement('span');
  let spanDelete = document.createElement('span');
  
  // add attributes
  li.setAttribute('class','li li4');
  spanTask.setAttribute('class','task');
  spanDelete.setAttribute('class','delete');
  
  // add text
  spanTask.textContent = 'New Task';
  spanDelete.textContent = 'Delete';
  
  // rearrange: append or prepend
  li.append(spanTask)
  li.append(spanDelete)
  
  // add to dom
  let taskOl = document.querySelector('.tasks ol');
  
  taskOl.append(li)
  

  
  let li1 = document.querySelector('.tasks .li1'); 
  let li2 = document.querySelector('.tasks .li2'); 
  
  let a = document.createElement('a');
  
  // add text
  a.textContent = 'Learn React Js';
  
  // add attribute
  
  a.setAttribute('href','http://google.com')
  a.setAttribute('target','_blank');
  
  // add to dom
  
  li1.replaceChild(a,li1.childNodes[1]);
  
  console.log(li1)
  // removing an element;
  
 
  
  li2.remove();
  
  //? htmll event
  
  function handleClick(e) {
    alert('You Clicked Me');
    console.log()
  }
  
  
  let newNav = document.querySelector('.nav');
  
  newNav.addEventListener('click',(e)=>{
    console.log(e.target)
  })
  
  }
  +
  
  // select required tags
  let body = document.querySelector('body');
  let themeBtn = document.querySelector('.nav button');
  
  themeBtn.addEventListener('click',(e)=> {
    body.classList.toggle('darkTheme');
  
    if(String(body.className).includes('darkTheme')) {
      themeBtn.textContent = 'Light Theme';
    }else{
      themeBtn.textContent = 'Dark Theme';
  
    }
  })
 
  
  let searchInput = document.querySelector('.search input');
  
  let allTasks = document.querySelectorAll('.tasks li');
  
  
  searchInput.addEventListener('keyup',(e)=> {
    let lowerInputText = String(searchInput.value).toLowerCase();
  
    allTasks.forEach(li=> {
     let  lowerTasksText = String(li.firstElementChild.textContent).toLowerCase() 
        if(lowerTasksText.includes(lowerInputText)) {
          li.style.display = 'flex';
        }else{
          li.style.display = 'none';
  
        }
    })
  })
  
  let taskOl = document.querySelector('.tasks ol');
  
  taskOl.addEventListener('click',(e)=> {
    if(String(e.target.className).includes('delete')) {
      let askUser = confirm('Are You Sure you want to Delete this tAsk?');
      if(askUser) {
        e.target.parentElement.style.display='none'
      }
    }
  })
  
  let addTaskForm = document.querySelector('.addTask');
  let addTaskInput = addTaskForm.firstElementChild;
  let liCount = 3;
  
  addTaskForm.addEventListener('submit',(e)=> {
    e.preventDefault();
    // create element
    let li = document.createElement('li');
    let taskSpan = document.createElement('span');
    let deleteSpan = document.createElement('span');
    // add attribute
    li.setAttribute('class',`li li${liCount +=1}`);
    taskSpan.setAttribute('class', 'task')
    deleteSpan.setAttribute('class', 'delete');
  
    // add text
    taskSpan.textContent = addTaskInput.value;
    deleteSpan.textContent = 'Delete';
  
    // rearragne
    li.append(taskSpan);
    li.append(deleteSpan);
     if(String(addTaskInput.value).length > 2) {
       // add to dom
       taskOl.append(li);
       // reset form
       addTaskForm.reset();
  
     }else{
      alert('Check!!, Task is not Meaningfull!!!!')
     }
  })