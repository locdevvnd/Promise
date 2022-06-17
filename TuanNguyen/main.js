// ->>>> Callback
// callback
const callback1 = (data) => {
  console.log("callback", data);
  return data;
};
const getData1 = (data, callback1) => {
  console.log("getdata", data);
  return callback1(data);
};

// getData1("Callback", callback1);

// Promise 1
const callback = (data) => {
  console.log("callback", data);
  return data;
};
const callbackFail = (err) => {
  console.log("callbackFail", err);
  return err;
};
const getData4 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise 2");
    // rej("faile");
  }, 2500);
});

const getData = () => {
  const getApi = new Promise((res, rej) => {
    setTimeout(() => {
      res("Promise");
      // rej("faile");
    }, 2500);
  });
  getApi
    .then((data) => {
      console.log(data);
      return getData4;
    })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => console.log(e))
    .finally(() => console.log("Done"));
};
getData();
// Promise 2

const getApiData = async () => {
  const temp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await temp.json();
  return data;
};
const getDataBy = (callback) => {
  const getApi = new Promise((res, rej) => {
    const data = getApiData1();
    res(data);
  });
  getApi
    .then(callback)
    .catch(callbackFail)
    .finally(() => console.log("Done"));
};
// getDataBy(callback);
//<------------

///Async Await
const getName = async () => {
  try {
    const res = asd;
    // 1 biến ko xác định
  } catch (e) {
    console.log("catch: ", e);
  }
};
const getUser = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
// getName();
getUser();
