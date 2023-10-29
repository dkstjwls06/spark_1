"use strict";
(self["webpackChunksocket_test_front"] = self["webpackChunksocket_test_front"] || []).push([["login/mail"],{

/***/ "./src/login/mail.ts":
/*!***************************!*\
  !*** ./src/login/mail.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
const sel = document.querySelector('#sel');
const logo = document.querySelector('#logo');
inputs[1].value = 'aaaaaaaa';
let bool = Array.from(inputs).every(v => {
    return v.validity;
});
// const change = e => {
//     sel.dataset.id = sel.value;
//     inputs.forEach(v => v.value = '');
//     // if(sel.value === '/mail/register'){
//     //     inputs[0].type = 'email';
//     //     inputs[0].placeholder = " Ur Email Here-";
//     //     
//     // } 
//     else {
//         inputs[0].type = 'text';
//         inputs[0].placeholder = " Ur ID Here-";
//     }
// };
// window.addEventListener('load', change, {once:true});
// sel.addEventListener('change', change);
button.addEventListener('click', async (e) => {
    if (Array.from(inputs).every(v => v.validity.valid)) {
        const obj = {
            id: inputs[0].value,
            pass: inputs[1].value
        };
        const res = await fetch('/mail/register', {
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/login/mail.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4vbWFpbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRzdDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO0FBQzdCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ3BDLE9BQU8sQ0FBQyxDQUFDLFFBQVE7QUFDckIsQ0FBQyxDQUFZO0FBQ2Isd0JBQXdCO0FBQ3hCLGtDQUFrQztBQUNsQyx5Q0FBeUM7QUFDekMsNkNBQTZDO0FBQzdDLHVDQUF1QztBQUN2Qyx3REFBd0Q7QUFDeEQsY0FBYztBQUNkLFlBQVk7QUFDWixhQUFhO0FBQ2IsbUNBQW1DO0FBQ25DLGtEQUFrRDtBQUNsRCxRQUFRO0FBQ1IsS0FBSztBQUVMLHdEQUF3RDtBQUN4RCwwQ0FBMEM7QUFDMUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUU7SUFDdkMsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUM7UUFDL0MsTUFBTSxHQUFHLEdBQVU7WUFDZixFQUFFLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDbEIsSUFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1NBQ3ZCLENBQUM7UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUN0QyxNQUFNLEVBQUMsTUFBTTtZQUNiLE9BQU8sRUFBQztnQkFDSixjQUFjLEVBQUMsa0JBQWtCO2FBQ3BDO1lBQ0QsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1NBQzNCLENBQUMsQ0FBQztRQUNILE1BQU0sS0FBSyxHQUFVLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RDLElBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUM7WUFDdkIsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQzdCO2FBQU07WUFDSCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZCO0tBQ0o7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2tldC10ZXN0LWZyb250Ly4vc3JjL2xvZ2luL21haWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcbmNvbnN0IHNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWwnKTtcclxuY29uc3QgbG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dvJyk7XHJcbmltcG9ydCB7c3RhdHVzfSBmcm9tICcuLi90eXBlcydcclxuXHJcbmlucHV0c1sxXS52YWx1ZSA9ICdhYWFhYWFhYSc7XHJcbmxldCBib29sID0gQXJyYXkuZnJvbShpbnB1dHMpLmV2ZXJ5KHYgPT4ge1xyXG4gICAgcmV0dXJuIHYudmFsaWRpdHlcclxufSkgYXMgQm9vbGVhblxyXG4vLyBjb25zdCBjaGFuZ2UgPSBlID0+IHtcclxuLy8gICAgIHNlbC5kYXRhc2V0LmlkID0gc2VsLnZhbHVlO1xyXG4vLyAgICAgaW5wdXRzLmZvckVhY2godiA9PiB2LnZhbHVlID0gJycpO1xyXG4vLyAgICAgLy8gaWYoc2VsLnZhbHVlID09PSAnL21haWwvcmVnaXN0ZXInKXtcclxuLy8gICAgIC8vICAgICBpbnB1dHNbMF0udHlwZSA9ICdlbWFpbCc7XHJcbi8vICAgICAvLyAgICAgaW5wdXRzWzBdLnBsYWNlaG9sZGVyID0gXCIgVXIgRW1haWwgSGVyZS1cIjtcclxuLy8gICAgIC8vICAgICBcclxuLy8gICAgIC8vIH0gXHJcbi8vICAgICBlbHNlIHtcclxuLy8gICAgICAgICBpbnB1dHNbMF0udHlwZSA9ICd0ZXh0JztcclxuLy8gICAgICAgICBpbnB1dHNbMF0ucGxhY2Vob2xkZXIgPSBcIiBVciBJRCBIZXJlLVwiO1xyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG5cclxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjaGFuZ2UsIHtvbmNlOnRydWV9KTtcclxuLy8gc2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZSk7XHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGUgPT4ge1xyXG4gICAgaWYoQXJyYXkuZnJvbShpbnB1dHMpLmV2ZXJ5KHYgPT4gdi52YWxpZGl0eS52YWxpZCkpe1xyXG4gICAgICAgIGNvbnN0IG9iajpvYmplY3QgPSB7XHJcbiAgICAgICAgICAgIGlkOmlucHV0c1swXS52YWx1ZSxcclxuICAgICAgICAgICAgcGFzczppbnB1dHNbMV0udmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvbWFpbC9yZWdpc3RlcicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeShvYmopXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgY2hlY2s6c3RhdHVzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBpZihjaGVjay5zdGF0dXMgPT09ICdnb29kJyl7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBjaGVjay51cmw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoY2hlY2sucmVhc29uKTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=