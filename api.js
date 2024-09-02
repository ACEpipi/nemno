const axios = require('axios');

const baseURL = 'https://api.example.com'; // Thay đổi thành URL API thực tế

// Lấy tất cả sách
async function getBookList() {
    try {
        const response = await axios.get(`${baseURL}/books`);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy danh sách sách:', error);
    }
}

// Tìm kiếm sách theo ISBN
function getBookByISBN(isbn) {
    return axios.get(`${baseURL}/books/${isbn}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Lỗi khi lấy sách theo ISBN:', error);
            throw error;
        });
}

// Tìm kiếm sách theo Tác giả
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${baseURL}/books?author=${author}`);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy sách theo tác giả:', error);
    }
}

// Tìm kiếm sách theo Tiêu đề
function getBooksByTitle(title) {
    return axios.get(`${baseURL}/books?title=${title}`)
        .then(response => response.data)
        .catch(error => {
            console.error('Lỗi khi lấy sách theo tiêu đề:', error);
            throw error;
        });
}

// Lấy đánh giá sách
async function getBookReview(isbn) {
    try {
        const response = await axios.get(`${baseURL}/reviews/${isbn}`);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi lấy đánh giá sách:', error);
    }
}

// Đăng ký người dùng mới
async function registerUser(userData) {
    try {
        const response = await axios.post(`${baseURL}/users/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi đăng ký người dùng mới:', error);
    }
}

// Đăng nhập người dùng
async function loginUser(credentials) {
    try {
        const response = await axios.post(`${baseURL}/users/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi đăng nhập người dùng:', error);
    }
}

// Thêm/Chỉnh sửa đánh giá sách
async function addOrModifyReview(isbn, reviewData) {
    try {
        const response = await axios.post(`${baseURL}/reviews/${isbn}`, reviewData);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi thêm hoặc chỉnh sửa đánh giá:', error);
    }
}

// Xóa đánh giá sách
async function deleteReview(isbn, reviewId) {
    try {
        const response = await axios.delete(`${baseURL}/reviews/${isbn}/${reviewId}`);
        return response.data;
    } catch (error) {
        console.error('Lỗi khi xóa đánh giá:', error);
    }
}

module.exports = {
    getBookList,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle,
    getBookReview,
    registerUser,
    loginUser,
    addOrModifyReview,
    deleteReview
};
