const api = require('./api');

// Ví dụ sử dụng các chức năng liên quan đến người dùng
async function userTasks() {
    try {
        // Đăng ký người dùng
        const user = await api.registerUser({ username: 'user2', password: 'password' });
        console.log('Người dùng mới:', user);

        // Đăng nhập người dùng
        const login = await api.loginUser({ username: 'user2', password: 'password' });
        console.log('Đăng nhập:', login);
    } catch (error) {
        console.error('Lỗi:', error);
    }
}

userTasks();
