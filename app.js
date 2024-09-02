const api = require('./api');

// Ví dụ sử dụng các phương thức
async function main() {
    try {
        // Lấy danh sách sách
        const books = await api.getBookList();
        console.log('Danh sách sách:', books);

        // Tìm sách theo ISBN
        const book = await api.getBookByISBN('1234567890');
        console.log('Sách theo ISBN:', book);

        // Tìm sách theo Tác giả
        const booksByAuthor = await api.getBooksByAuthor('Author Name');
        console.log('Sách theo tác giả:', booksByAuthor);

        // Tìm sách theo Tiêu đề
        const booksByTitle = await api.getBooksByTitle('Book Title');
        console.log('Sách theo tiêu đề:', booksByTitle);

        // Lấy đánh giá sách
        const review = await api.getBookReview('1234567890');
        console.log('Đánh giá sách:', review);

        // Đăng ký người dùng
        const newUser = await api.registerUser({ username: 'user1', password: 'password' });
        console.log('Người dùng mới:', newUser);

        // Đăng nhập người dùng
        const loginResponse = await api.loginUser({ username: 'user1', password: 'password' });
        console.log('Đăng nhập:', loginResponse);

        // Thêm/Chỉnh sửa đánh giá
        const updatedReview = await api.addOrModifyReview('1234567890', { rating: 5, comment: 'Great book!' });
        console.log('Đánh giá cập nhật:', updatedReview);

        // Xóa đánh giá
        const deleteResponse = await api.deleteReview('1234567890', 'reviewId');
        console.log('Xóa đánh giá:', deleteResponse);
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

main();
