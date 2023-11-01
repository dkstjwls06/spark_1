"use strict";
(self["webpackChunksocket_test_front"] = self["webpackChunksocket_test_front"] || []).push([["login/addid"],{

/***/ "./src/login/addid.ts":
/*!****************************!*\
  !*** ./src/login/addid.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
const inputs = document.querySelectorAll('input');
const button = document.querySelector('button');
button.addEventListener('click', async (e) => {
    if (Array.from(inputs).every(v => v.validity.valid)) { // 모든 유효성 검사 통과 시
        const obj = {
            id: inputs[0].value,
            pass: inputs[1].value
        };
        const res = await fetch(`/mail/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        const check = (await res.json());
        if (check.status === 'good') {
            alert(`회원가입에 성공하셨습니다!`);
            location.href = check.url;
        }
        else {
            alert(`회원가입에 실패하였습니다. Reason is: ${check.reason}`);
        }
    }
});



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/login/addid.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4vYWRkaWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWhELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsRUFBQyxFQUFFO0lBQ3ZDLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFDLEVBQUUsaUJBQWlCO1FBQ2xFLE1BQU0sR0FBRyxHQUFVO1lBQ2YsRUFBRSxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1lBQ2xCLElBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztTQUN2QixDQUFDO1FBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQ2pDLE1BQU0sRUFBQyxNQUFNO1lBQ2IsT0FBTyxFQUFDO2dCQUNKLGNBQWMsRUFBQyxrQkFBa0I7YUFDcEM7WUFDRCxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBVyxDQUFDO1FBQzNDLElBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUM7WUFDdkIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDeEIsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQzdCO2FBQU07WUFDSCxLQUFLLENBQUMsNkJBQTZCLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO0tBQ0o7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2tldC10ZXN0LWZyb250Ly4vc3JjL2xvZ2luL2FkZGlkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xyXG5pbXBvcnQge3N0YXR1c30gZnJvbSAnLi4vdHlwZXMnXHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIGUgPT4geyAvL+uyhO2KvCDriIzroLjsnYTrlYxcclxuICAgIGlmKEFycmF5LmZyb20oaW5wdXRzKS5ldmVyeSh2ID0+IHYudmFsaWRpdHkudmFsaWQpKXsgLy8g66qo65OgIOycoO2aqOyEsSDqsoDsgqwg7Ya16rO8IOyLnFxyXG4gICAgICAgIGNvbnN0IG9iajpvYmplY3QgPSB7XHJcbiAgICAgICAgICAgIGlkOmlucHV0c1swXS52YWx1ZSxcclxuICAgICAgICAgICAgcGFzczppbnB1dHNbMV0udmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvbWFpbC9hZGRgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDonUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gKGF3YWl0IHJlcy5qc29uKCkpIGFzIHN0YXR1cztcclxuICAgICAgICBpZihjaGVjay5zdGF0dXMgPT09ICdnb29kJyl7XHJcbiAgICAgICAgICAgIGFsZXJ0KGDtmozsm5DqsIDsnoXsl5Ag7ISx6rO17ZWY7IWo7Iq164uI64ukIWApO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gY2hlY2sudXJsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGDtmozsm5DqsIDsnoXsl5Ag7Iuk7Yyo7ZWY7JiA7Iq164uI64ukLiBSZWFzb24gaXM6ICR7Y2hlY2sucmVhc29ufWApO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==