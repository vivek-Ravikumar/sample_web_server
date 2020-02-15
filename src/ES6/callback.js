/* Simple Async function 

setTimeout is used to mimic a Asych function 

*/


const fileSystemWrite = (text, completedCallBack=()=>null) => {
  setTimeout(() => {
    console.log("file is being written");
    completedCallBack("success");
  });
};

const textToWrite = "Hello World";

fileSystemWrite(textToWrite, status => {
  console.log(`file write operation:${status}`);
});
