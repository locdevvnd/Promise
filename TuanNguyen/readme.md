# Callback,Promise,AsyncAwait

`Callback`

- là hàm được truyền làm tham số của hàm khác, và được chạy sau khi hàm gọi nó chạy xong,

`Promise`

- Promise có chứa 1 hàm có 2 tham số là resolve(giải quyết) và reject(từ chối).Nếu giá trị resolve được gọi thì sẽ vào .then() và giá trị reject được gọi thì sẽ vào .cacth().
- Promise có 3 trạng thái:
  - Pending(Đang chờ xử lý): trạng thái đang chờ, không hoàn thành và không được từ chối
  - fulfilled(Hoàn thành): Hoat động đã được thành công
  - rejected (từ chối):Hoạt động không thành công
- Promise có 3 hàm:
  .then() : Khi Promise đó hoàn thành thì gọi hàm để trả là giá trị hoặc thực hiện 1 hành động khác
  .catch(): Khi Promise dó bị từ chối và không thành công thì hàm sẽ trả ra gia trị lỗi
  .finally(): Khi Promise đã chạy xong ko bất kể là hoàn thành hay từ chối đề trả về giá trị

`Async-Await`

- Async-Await chính là Promise , nó giúp chúng ta viết code bất đồng bộ như đồng bộ,và hàm Async phải được khai báo với từ khóa async thì mới sử dụng được await,
