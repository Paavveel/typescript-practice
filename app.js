"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Payment success',
    statusCode: StatusCode.SUCCESS,
};
// 1 - success
// 2 - in process
// 3 - failed
const action = (status) => { };
action(StatusCode.SUCCESS);
action(1);
const res2 = 1 /* Roles.ADMIN */;
