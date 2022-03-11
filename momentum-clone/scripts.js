window.addEventListener("DOMContentLoaded", (event) => {
  function getTime() {
    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const currTime = `${hours}:${minutes}:${seconds}`;
    document.querySelector(".time").textContent = currTime;
  }

  setInterval(getTime, 1000);

  const quote = document.querySelector("blockquote p");
  fetch("https://quotes.rest/qod?language=en")
    .then((response) => response.json())
    .then((data) => (quote.textContent = data.contents.quotes[0].quote));



//   function saveToStorage(tasks, callBack){
//     chrome.storage.sync.set({tasks}, function(){
//        callBack()
//     })
//   }


//   function getFromStorage(callBack){
//       chrome.storage.sync.get(['tasks'], function(result){
//           console.log(result)
//           if(result && result.tasks) {
//               callBack(result.tasks)
//           }
//           callBack([])
//       })
// }




//   function printTasks() {
// getFromStorage(function(tasks){

//     let str = "";
//     $("#todos").empty();
//     for (const task of tasks) {
//       str = `${str}
//                 <li class="${task.done ? "complate" : ""}"> 
//                     <input ${
//                       task.done ? "checked" : ""
//                     } type="checkbox" class="do-task">
//                         ${task.name} 
//                     <button class="delete-task">Delete</button>
//                 </li>
//                 `;
//     }
//     $("#todos").append(str);
// })
//   }
//   printTasks();
//   $(document).on("click", ".do-task", function () {
//     console.log($(this).parent().index());
// getFromStorage(function(tasks){

//     tasks[$(this).parent().index()].done =
//       !tasks[$(this).parent().index()].done;
//     printTasks();
//     saveToStorage(tasks, function(){
//         printTasks()
//     })
// })
//   });
//   $(document).on("click", ".delete-task", function () {
//     console.log($(this).parent().index());
// getFromStorage(function(tasks){

//     const index = $(this).parent().index();
//     tasks.splice(index, 1);
//     saveToStorage(tasks, function(){
//         printTasks()
//     })
// })
//   });
//   $('#addTask').on('click', function(){
//       const value = $('#newTask').val()
//       console.log(value)
//       getFromStorage(function(tasks){
//         tasks.push({
//             name:value,
//             done:false
//         })
//         saveToStorage(tasks, function(){
//             printTasks()
//         })
//     })
//   })
});
