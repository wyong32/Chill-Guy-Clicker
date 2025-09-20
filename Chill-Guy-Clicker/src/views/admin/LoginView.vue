<template>
  <div class="admin-login-container">
    <div class="login-card">
      <h1>管理员登录</h1>
      
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">用户名</label>
          <input 
            type="text" 
            id="username" 
            v-model="username" 
            required 
            placeholder="输入用户名"
            autocomplete="username"
          />
        </div>
        
        <div class="form-group">
          <label for="password">密码</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            required 
            placeholder="输入密码"
            autocomplete="current-password"
          />
        </div>
        
        <button type="submit" class="login-button" :disabled="isLoading">
          {{ isLoading ? '登录中...' : '登录' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLoginView',
  data() {
    return {
      username: '',
      password: '',
      error: '',
      isLoading: false
    };
  },
  methods: {
    async handleLogin() {
      this.error = '';
      this.isLoading = true;
      
      try {
        // 获取API基础URL - 优先使用环境变量
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 
          (import.meta.env.PROD 
            ? 'https://chill-guy-clicker-api.vercel.app/api'
            : 'https://chill-guy-clicker-api.vercel.app/api'); // 默认使用线上API
        
        console.log('🔑 尝试登录:', this.username);
        console.log('🌐 API URL:', `${apiBaseUrl}/auth/login`);
        
        const response = await fetch(`${apiBaseUrl}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });
        
        console.log('📡 Login response status:', response.status);
        
        const data = await response.json();
        console.log('📡 Login response data:', data);
        
        if (!response.ok) {
          throw new Error(data.message || '登录失败');
        }
        
        console.log('✅ 登录成功，保存 token');
        
        // 保存令牌到本地存储
        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminUser', JSON.stringify(data.admin));
        
        console.log('🚀 重定向到管理面板');
        
        // 重定向到管理面板
        this.$router.push('/admin/dashboard');
      } catch (error) {
        console.error('❌ 登录失败:', error);
        this.error = error.message || 'Login failed';
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style scoped>
.admin-login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
  background-color: #f5f5f5;
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: var(--primary-color);
  font-size: 28px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

input {
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: var(--primary-color);
  outline: none;
  box-shadow: 0 0 0 2px rgba(65, 184, 131, 0.2);
}

.login-button {
  margin-top: 10px;
  padding: 12px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #339d70;
}

.login-button:disabled {
  background-color: #88c5aa;
  cursor: not-allowed;
}

.error-message {
  padding: 12px;
  background-color: #ffebee;
  color: #d32f2f;
  border-radius: 6px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
}
</style>
