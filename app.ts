enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = 2,
  FAILED = 3,
}

const res = {
  message: 'Payment success',
  statusCode: StatusCode.SUCCESS,
};

// 1 - success
// 2 - in process
// 3 - failed

const action = (status: StatusCode) => {};

action(StatusCode.SUCCESS);
action(1);

const enum Roles {
  ADMIN = 1,
  USER = 2,
}

const res2 = Roles.ADMIN;
