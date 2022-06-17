# _Callbacks,Promises,Async/Await_

> Hầu hết ngôn ngữ lập trình đều xử lý từng dòng một cách đồng bộ. Dòng đầu tiên chạy và trả về kết quả, 
sau đó dòng thứ 2 chỉ chạy khi dòng thứ 1 chạy xong (và cho ra kết quả). <br/>
JavaScript chạy trên một thread. Khi trình duyệt thực thi một sự kiện nào đó thì mọi thứ khác bị ngừng lại, người dùng sẽ khó mà phát hiện vì quá trình xử lý cực kỳ nhanh. Chẳng hạn JavaScript detect một click vào button, tính toán, update DOM. Mỗi khi xong thì trình duyệt sẽ xử lý item kế tiếp trong hàng đợi.
## 🧘‍♂️Callbacks🧘‍♂️
- Vậy vấn đề ở đây là gì? Tưởng tượng khi JavaScript gọi một process mất cực kỳ nhiều thời gian như Ajax hoặc xử lý database? Thao tác này có thể mất nhiều giây, hoặc thậm chí cả phút. Và trình duyệt sẽ bị khóa khi nó đang chờ response, tức là không thể xử lý thêm request của người dùng trong khoảng thời gian đó.
- Giải pháp ở đây là xử lý bất đồng bộ. Trong JavaScript, khi một thao tác bất đồng bộ có kết quả (kết quả này có thể là dữ liệu trả về hoặc lỗi xảy ra khi thao tác), nó sẽ gọi một function mỗi khi kết quả sẵn sàng, function này được gọi là "callback". Trong khi đó JavaScript tiếp tục thực thi bình thường. Bạn có thể thấy các framework thường có APIs mà bạn có thể thêm callback function để thực thi sau khi gọi. Đăng ký một event listener trong browser với addEventListener, đọc nội dung file với fs.readFile hoặc đăng ký middleware trong express web server với server.use là ví dụ của những APIs mà sử dụng callback.

## 🧘‍♂️Promises🧘‍♂️
- Vậy làm sao để xử lý khi gặp callback hell? ES2015 (ES6) giới thiệu Promises. Callbacks vẫn được sử dụng, nhưng Promises cung cấp một cú pháp rõ ràng hơn để chain các câu lệnh bất đồng bộ.
Để tạo một Promise, ta dùng đoạn code sau:
```
const myPromise = new Promise(function(resolve, reject) {
  
  // code here
  
  if (codeIsFine) {
    resolve('fine')
  } else {
    reject('error')
  }
})
myPromise
  .then(function whenOk(response) {
    console.log(response)
    return response
  })
  .catch(function notOk(err) {
    console.error(err)
  })
  ```
  
## 🧘‍♂️Async/Await🧘‍♂️
- Promises có thể hơi khó nhằn, nên ES2017 giới thiệu async và await, nó giúp Promise trông đơn giản hơn, tránh được chain .then() dài dằng dặc.

- Async/Await là bước kế tiếp trong công cuộc xử lý thao tác bất đông bộ trong JavaScript. Nó cho bạn 2 từ khóa mới là: async và await. Async sẽ thông báo rằng function sẽ xử lý bất đồng bộ, và await sẽ được dùng để báo chúng ta muốn đợi kết quả của thao tác bất đồng bộ trong một function có đánh dấu async. 
Ví dụ: 
```
async function getSomeAsyncData(value){
    const result = await fetchTheData(someUrl, value);
    return result;
}
```




