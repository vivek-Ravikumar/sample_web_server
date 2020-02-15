// const fileSystemWrite = text => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("file is being written");
//       console.log(text);
//       try {
//         undefined();           //Set timeout should have its own try catch
//       } catch (e) {
//         console.log(e);
//       }
//       resolve("success");
//     });
//   });
// };

const fileSystemWrite = text => {
  return new Promise((resolve, reject) => {
    console.log("file is being written");
    console.log(text);
    reject("failed");
    resolve("success");
  });
};

fileSystemWrite("my Text")
  .then(status => {
    console.log(`file write operation:${status}`);
  })
  .catch(error => {
    console.log(`error occured:${error}`);
  });
