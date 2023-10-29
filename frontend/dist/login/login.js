"use strict";
(self["webpackChunksocket_test_front"] = self["webpackChunksocket_test_front"] || []).push([["login/login"],{

/***/ "./src/login/login.ts":
/*!****************************!*\
  !*** ./src/login/login.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const as = document.querySelectorAll('.etc2');
let inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
const sel = document.querySelector('#sel');
const logo = document.querySelector('#logo');
// as[2].addEventListener('click', e=>{
//     location.href = './mail.html'
// })
// const change = e => {
//     sel.dataset.id = sel.value;
//     inputs.forEach(v => v.value = '');
//     // if(sel.value === '/mail/register'){
//     //     inputs[0].type = 'email';
//     //     inputs[0].placeholder = " Ur Email Here-";
//     //     inputs[1].value = 'aaaaaaaa';
//     // } 
//     else {
//         inputs[0].type = 'text';
//         inputs[0].placeholder = " Ur ID Here-";
//     }
// };
let bool = Array.from(inputs).every(v => {
    return v.validity;
});
// window.addEventListener('load', change, {once:true});
// sel.addEventListener('change', change);
button.addEventListener('click', async (e) => {
    if (Array.from(inputs).every(v => v.validity.valid)) {
        const obj = {
            id: inputs[0].value,
            pass: inputs[1].value
        };
        const res = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        const check = await res.json();
        if (check.status === 'good') {
            location.href = check.url;
        }
        else {
            alert(check.reason);
        }
    }
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/login/login.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4vbG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7QUFDN0MsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBSTdDLHVDQUF1QztBQUN2QyxvQ0FBb0M7QUFDcEMsS0FBSztBQUNMLHdCQUF3QjtBQUN4QixrQ0FBa0M7QUFDbEMseUNBQXlDO0FBQ3pDLDZDQUE2QztBQUM3Qyx1Q0FBdUM7QUFDdkMsd0RBQXdEO0FBQ3hELDJDQUEyQztBQUMzQyxZQUFZO0FBQ1osYUFBYTtBQUNiLG1DQUFtQztBQUNuQyxrREFBa0Q7QUFDbEQsUUFBUTtBQUNSLEtBQUs7QUFDTCxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNwQyxPQUFPLENBQUMsQ0FBQyxRQUFRO0FBQ3JCLENBQUMsQ0FBWTtBQUNiLHdEQUF3RDtBQUN4RCwwQ0FBMEM7QUFDMUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDdkMsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDL0MsTUFBTSxHQUFHLEdBQUc7WUFDUixFQUFFLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDbEIsSUFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1NBQ3ZCLENBQUM7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDOUIsTUFBTSxFQUFDLE1BQU07WUFDYixPQUFPLEVBQUM7Z0JBQ0osY0FBYyxFQUFDLGtCQUFrQjthQUNwQztZQUNELElBQUksRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztTQUMzQixDQUFDLENBQUM7UUFDSCxNQUFNLEtBQUssR0FBVSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QyxJQUFHLEtBQUssQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFDO1lBQ3ZCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUM3QjthQUFNO1lBQ0gsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2QjtLQUNKO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2NrZXQtdGVzdC1mcm9udC8uL3NyYy9sb2dpbi9sb2dpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ldGMyJylcclxubGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG5jb25zdCBzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VsJyk7XHJcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nbycpO1xyXG5pbXBvcnQge3N0YXR1c30gZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5cclxuLy8gYXNbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlPT57XHJcbi8vICAgICBsb2NhdGlvbi5ocmVmID0gJy4vbWFpbC5odG1sJ1xyXG4vLyB9KVxyXG4vLyBjb25zdCBjaGFuZ2UgPSBlID0+IHtcclxuLy8gICAgIHNlbC5kYXRhc2V0LmlkID0gc2VsLnZhbHVlO1xyXG4vLyAgICAgaW5wdXRzLmZvckVhY2godiA9PiB2LnZhbHVlID0gJycpO1xyXG4vLyAgICAgLy8gaWYoc2VsLnZhbHVlID09PSAnL21haWwvcmVnaXN0ZXInKXtcclxuLy8gICAgIC8vICAgICBpbnB1dHNbMF0udHlwZSA9ICdlbWFpbCc7XHJcbi8vICAgICAvLyAgICAgaW5wdXRzWzBdLnBsYWNlaG9sZGVyID0gXCIgVXIgRW1haWwgSGVyZS1cIjtcclxuLy8gICAgIC8vICAgICBpbnB1dHNbMV0udmFsdWUgPSAnYWFhYWFhYWEnO1xyXG4vLyAgICAgLy8gfSBcclxuLy8gICAgIGVsc2Uge1xyXG4vLyAgICAgICAgIGlucHV0c1swXS50eXBlID0gJ3RleHQnO1xyXG4vLyAgICAgICAgIGlucHV0c1swXS5wbGFjZWhvbGRlciA9IFwiIFVyIElEIEhlcmUtXCI7XHJcbi8vICAgICB9XHJcbi8vIH07XHJcbmxldCBib29sID0gQXJyYXkuZnJvbShpbnB1dHMpLmV2ZXJ5KHYgPT4ge1xyXG4gICAgcmV0dXJuIHYudmFsaWRpdHlcclxufSkgYXMgQm9vbGVhblxyXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNoYW5nZSwge29uY2U6dHJ1ZX0pO1xyXG4vLyBzZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2hhbmdlKTtcclxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgZSA9PiB7XHJcbiAgICBpZihBcnJheS5mcm9tKGlucHV0cykuZXZlcnkodiA9PiB2LnZhbGlkaXR5LnZhbGlkKSl7XHJcbiAgICAgICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgICAgICBpZDppbnB1dHNbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIHBhc3M6aW5wdXRzWzFdLnZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2xvZ2luJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KG9iailcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBjaGVjazpzdGF0dXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIGlmKGNoZWNrLnN0YXR1cyA9PT0gJ2dvb2QnKXtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9IGNoZWNrLnVybDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydChjaGVjay5yZWFzb24pO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==