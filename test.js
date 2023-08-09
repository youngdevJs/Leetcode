const apiEndpoint = 'https://api.publicapis.org/entries'; // Địa chỉ API endpoint cần gọi
let apiCalled = false; // Biến cờ để kiểm tra xem API đã được gọi hay chưa

async function callAPI() {
  if (!apiCalled) {
    try {
      for (let i = 0; i < n; i++) {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        console.log(data); // Hoặc xử lý dữ liệu ở đây
      }
      apiCalled = true; // Đánh dấu rằng API đã được gọi
    } catch (error) {
      console.error('Error calling API:', error);
    }
  } else {
    console.log('API has already been called.');
  }
}

const n = 5; // Số lần gọi API
//callAPI(); // Gọi hàm để thực hiện cuộc gọi API n lần, nhưng API chỉ được gọi một lần duy nhất
console.log(113113, document.querySelector(".btn"));
document.querySelector(".btn").onclick=()=>{
  console.log(113113);
  callAPI()
}