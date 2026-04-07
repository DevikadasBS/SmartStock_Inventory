import api from './api';

export const getMe = () => api.get('/auth/me');

// ✅ FIXED LOGIN (IMPORTANT)
export const login = (email, password) => {
  const formData = new URLSearchParams();
  formData.append("username", email);   // backend expects "username"
  formData.append("password", password);

  return api.post('/auth/login', formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};

export const register = (data) => api.post('/auth/register', data);
export const updateProfile = (updates) => api.patch('/auth/me', updates);
export const uploadAvatar = (formData, headers) => api.post('/auth/me/avatar', formData, { headers });
export const setupSecurityQuestion = (data) => api.post('/auth/security-question/setup', data);
export const disableSecurityQuestion = (data) => api.post('/auth/security-question/disable', data);
export const resetPasswordConfirm = (data) => api.post('/auth/reset-password/confirm', data);
export const resetPassword = (data) => api.post('/auth/reset-password', data);
