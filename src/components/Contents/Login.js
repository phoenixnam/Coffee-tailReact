import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // Gửi yêu cầu đăng nhập đến API
    axios
      .post('https://63aa9f0e7d7edb3ae62c5cea.mockapi.io/user', formData) // Thay thế địa chỉ API thực tế vào đây
      .then((response) => {
        const { success, message } = response.data;
        if (success) {
          alert('Đăng nhập thành công!');
          // Xử lý đăng nhập thành công (ví dụ: chuyển hướng đến trang chính)
          window.location.href = '/home'
        } else {
          alert('Đăng nhập thất bại: ' + '123');
        }
      })
      .catch((error) => {
        alert('Đăng nhập thất bại: ' + error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Tên đăng nhập:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default LoginForm;
