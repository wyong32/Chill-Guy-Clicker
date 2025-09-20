<template>
  <div class="admin-dashboard">
    <!-- 通知组件 -->
    <div v-if="notification.show" class="notification" :class="notification.type">
      <div class="notification-content">
        <div v-if="notification.title" class="notification-title">{{ notification.title }}</div>
        <div class="notification-message">{{ notification.message }}</div>
      </div>
      <button @click="closeNotification" class="notification-close">&times;</button>
    </div>

    <div class="admin-header">
      <h1>评论与评分管理</h1>
      <div class="admin-user-info">
        <span>{{ adminUser ? adminUser.username : '未登录' }}</span>
        <button @click="logout" class="logout-button">退出登录</button>
      </div>
    </div>

    <div class="dashboard-content">
      <div v-if="isLoading" class="loading">加载中...</div>

      <div v-else-if="error" class="error-message">{{ error }}</div>

      <div v-else>
        <!-- 分页控制 -->
        <div class="pagination-controls">
          <div class="pagination-info">
            显示 {{ paginationStart }} - {{ paginationEnd }} 条，共 {{ games.length }} 条
          </div>
          <div class="pagination-buttons">
            <button 
              @click="currentPage--" 
              :disabled="currentPage === 1"
              class="pagination-button"
            >
              上一页
            </button>
            <span class="page-number">{{ currentPage }}</span>
            <button 
              @click="currentPage++" 
              :disabled="currentPage >= totalPages"
              class="pagination-button"
            >
              下一页
            </button>
          </div>
        </div>

        <div class="games-container">
          <!-- 游戏评论管理卡片 -->
          <div v-for="game in paginatedGames" :key="game.id" class="game-card">
            <div class="game-header">
              <h2>{{ game.pageTitle }}</h2>
              <div class="game-actions">
                <button @click="showAddCommentModal(game.id)" class="action-button add-button">
                  添加评论
                </button>
              </div>
            </div>

            <div class="game-rating-summary">
              <div class="rating-label">当前评分:</div>
              <div class="rating-distribution">
                <div v-for="i in 5" :key="i" class="rating-bar">
                  <span class="rating-value">{{ i }}星:</span>
                  <span class="rating-count">{{ getRatingCount(game.id, i) }}</span>
                </div>
              </div>
              <div class="average-rating">
                平均分: {{ getGameAverageRating(game.id) }} ({{ getGameCommentCount(game.id) }} 条)
              </div>
            </div>

            <div class="comments-section">
              <h3>评论列表:</h3>

              <div v-if="getFilteredComments(game.id).length === 0" class="no-comments">
                暂无评论
              </div>

              <div v-else class="comments-list">
                <div v-for="comment in getFilteredComments(game.id)" :key="comment.id" class="comment-item">
                  <div class="comment-header">
                    <div class="comment-info">
                      <span class="comment-author">{{ comment.username }}</span>
                      <span class="comment-date">({{ formatDate(comment.created_at) }})</span>
                      <span class="admin-tag" v-if="comment.username === 'admin'">[管理员]</span>
                    </div>
                    <div class="comment-rating">
                      {{ comment.rating }} <span class="star">★</span>
                    </div>
                  </div>

                  <div class="comment-content">{{ comment.content }}</div>

                  <div class="comment-actions">
                    <button @click="showEditCommentModal(comment)" class="action-button edit-button">
                      编辑
                    </button>
                    <button @click="deleteComment(comment.id)" class="action-button delete-button">
                      删除
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 底部分页控制 -->
        <div class="pagination-controls bottom">
          <div class="pagination-info">
            显示 {{ paginationStart }} - {{ paginationEnd }} 条，共 {{ games.length }} 条
          </div>
          <div class="pagination-buttons">
            <button 
              @click="currentPage--" 
              :disabled="currentPage === 1"
              class="pagination-button"
            >
              上一页
            </button>
            <span class="page-number">{{ currentPage }}</span>
            <button 
              @click="currentPage++" 
              :disabled="currentPage >= totalPages"
              class="pagination-button"
            >
              下一页
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 添加评论模态框 -->
    <div v-if="showAddModal" class="modal-overlay" @click.self="closeModals">
      <div class="modal-content">
        <h3>添加评论</h3>
        <form @submit.prevent="addComment">
          <div class="form-group">
            <label for="username">用户名</label>
            <input type="text" id="username" v-model="commentForm.username" required>
          </div>

          <div class="form-group">
            <label for="rating">评分</label>
            <select id="rating" v-model="commentForm.rating" required>
              <option v-for="i in 5" :key="i" :value="i">{{ i }} 星</option>
            </select>
          </div>

          <div class="form-group">
            <label for="content">评论内容</label>
            <textarea id="content" v-model="commentForm.content" required></textarea>
          </div>

          <div class="form-group">
            <label for="email">邮箱 (可选)</label>
            <input type="email" id="email" v-model="commentForm.email">
          </div>

          <div class="form-group">
            <label for="created_at">评论时间 (可选，不填则使用当前时间)</label>
            <input type="datetime-local" id="created_at" v-model="commentForm.created_at">
          </div>

          <div class="modal-actions">
            <button type="button" @click="closeModals" class="cancel-button">取消</button>
            <button type="submit" class="submit-button">提交</button>
          </div>
        </form>
      </div>
    </div>

    <!-- 编辑评论模态框 -->
    <div v-if="showEditModal" class="modal-overlay" @click.self="closeModals">
      <div class="modal-content">
        <h3>编辑评论</h3>
        <form @submit.prevent="updateComment">
          <div class="form-group">
            <label for="edit-username">用户名</label>
            <input type="text" id="edit-username" v-model="commentForm.username" required>
          </div>

          <div class="form-group">
            <label for="edit-rating">评分</label>
            <select id="edit-rating" v-model="commentForm.rating" required>
              <option v-for="i in 5" :key="i" :value="i">{{ i }} 星</option>
            </select>
          </div>

          <div class="form-group">
            <label for="edit-content">评论内容</label>
            <textarea id="edit-content" v-model="commentForm.content" required></textarea>
          </div>

          <div class="form-group">
            <label for="edit-email">邮箱 (可选)</label>
            <input type="email" id="edit-email" v-model="commentForm.email">
          </div>

          <div class="form-group">
            <label for="edit-created_at">评论时间 (可选，不填则使用当前时间)</label>
            <input type="datetime-local" id="edit-created_at" v-model="commentForm.created_at">
          </div>

          <div class="modal-actions">
            <button type="button" @click="closeModals" class="cancel-button">取消</button>
            <button type="submit" class="submit-button">更新</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { games } from '../../data/games';

export default {
  name: 'AdminDashboardView',
  data() {
    return {
      adminUser: null,
      isLoading: false,
      error: '',
      games,
      comments: [],
      expandedGames: [], // 存储已展开的游戏ID
      apiBaseUrl: '',
      showAddModal: false,
      showEditModal: false,
      notification: {
        show: false,
        type: 'success', // success, error, warning
        title: '',
        message: '',
        timeout: null
      },
      commentForm: {
        id: null,
        gameId: null,
        username: '',
        rating: 5,
        content: '',
        email: '',
        created_at: ''
      },
      // 分页相关状态
      currentPage: 1,
      itemsPerPage: 5
    };
  },
  created() {
    // 设置API基础URL - 优先使用环境变量
    this.apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 
      (import.meta.env.PROD
        ? 'https://chill-guy-clicker-api.vercel.app/api'
        : 'https://chill-guy-clicker-api.vercel.app/api'); // 默认使用线上API

    this.checkAuth();
    this.loadGameData();
  },
  computed: {
    // 计算总页数
    totalPages() {
      return Math.ceil(this.games.length / this.itemsPerPage);
    },
    // 获取当前页的游戏
    paginatedGames() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.games.slice(start, end);
    },
    // 计算当前页的起始索引
    paginationStart() {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    // 计算当前页的结束索引
    paginationEnd() {
      const end = this.currentPage * this.itemsPerPage;
      return end > this.games.length ? this.games.length : end;
    },
    // 获取已展开的游戏列表
    expandedGames() {
      return this.games.filter(game => this.isGameExpanded(game.id));
    },
    // 获取已折叠的游戏列表
    collapsedGames() {
      return this.games.filter(game => !this.isGameExpanded(game.id));
    }
  },
  watch: {
    // 监听 currentPage 变化，确保页码在有效范围内
    currentPage(newPage) {
      if (newPage < 1) {
        this.currentPage = 1;
      } else if (newPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
    }
  },
  methods: {
    checkAuth() {
      const token = localStorage.getItem('adminToken');
      const user = localStorage.getItem('adminUser');

      if (!token) {
        this.$router.push('/admin/login');
        return;
      }

      this.adminUser = user ? JSON.parse(user) : null;
    },

    logout() {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
      this.$router.push('/admin/login');
    },

    async loadGameData() {
      this.isLoading = true;
      this.error = '';

      try {
        const token = localStorage.getItem('adminToken');
        
        console.log('🔑 使用的 token:', token ? 'exists' : 'missing');
        console.log('🌐 API URL:', `${this.apiBaseUrl}/comments`);

        // 加载所有评论
        const response = await fetch(`${this.apiBaseUrl}/comments`, {
          headers: {
            'x-auth-token': token,
            'Accept': 'application/json'
          }
        });

        console.log('📡 Response status:', response.status);
        console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()));

        if (!response.ok) {
          if (response.status === 401) {
            console.error('❌ 认证失败，跳转到登录页');
            this.logout();
            throw new Error('登录已过期，请重新登录');
          }
          const errorText = await response.text();
          console.error('❌ API 错误响应:', errorText);
          throw new Error(`加载数据失败: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('✅ 成功获取评论数据:', data.length, '条评论');
        this.comments = data;
      } catch (error) {
        console.error('❌ 加载数据失败:', error);
        this.error = error.message || 'Failed to load data';
      } finally {
        this.isLoading = false;
      }
    },

    // 获取指定游戏的评论数量
    getGameCommentCount(gameId) {
      return this.comments.filter(comment => comment.gameId === gameId || comment.game_id === gameId).length;
    },

    // 获取指定游戏的平均评分
    getGameAverageRating(gameId) {
      const gameComments = this.comments.filter(comment => comment.gameId === gameId || comment.game_id === gameId);
      if (gameComments.length === 0) return '无评分';

      const totalRating = gameComments.reduce((sum, comment) => sum + comment.rating, 0);
      return (totalRating / gameComments.length).toFixed(1);
    },

    // 获取特定评分的数量
    getRatingCount(gameId, rating) {
      return this.comments.filter(comment =>
        (comment.gameId === gameId || comment.game_id === gameId) && comment.rating === rating
      ).length;
    },

    // 获取指定游戏的评论
    getFilteredComments(gameId) {
      return this.comments.filter(comment => comment.gameId === gameId || comment.game_id === gameId);
    },

    // 检查游戏是否已展开
    isGameExpanded(gameId) {
      return this.expandedGames.includes(gameId);
    },

    // 切换游戏评论的展开/收起状态
    toggleGameComments(gameId) {
      if (this.isGameExpanded(gameId)) {
        this.expandedGames = this.expandedGames.filter(id => id !== gameId);
      } else {
        this.expandedGames.push(gameId);
      }
    },

    // 显示添加评论模态框
    showAddCommentModal(gameId) {
      this.commentForm = {
        id: null,
        gameId: gameId,
        username: '',
        rating: 5,
        content: '',
        email: ''
      };
      this.showAddModal = true;
    },

    // 显示编辑评论模态框
    showEditCommentModal(comment) {
      this.commentForm = {
        ...comment,
        created_at: this.formatDateTimeForInput(comment.created_at)
      };
      this.showEditModal = true;
    },

    // 关闭所有模态框
    closeModals() {
      this.showAddModal = false;
      this.showEditModal = false;
    },

    // 添加评论
    async addComment() {
      try {
        const token = localStorage.getItem('adminToken');

        // 准备请求数据
        const commentData = {
          gameId: this.commentForm.gameId,
          username: this.commentForm.username,
          content: this.commentForm.content,
          rating: parseInt(this.commentForm.rating),
          email: this.commentForm.email || undefined
        };

        // 如果设置了时间，添加到请求中
        if (this.commentForm.created_at) {
          commentData.created_at = new Date(this.commentForm.created_at).toISOString();
        }

        const response = await fetch(`${this.apiBaseUrl}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          },
          body: JSON.stringify(commentData)
        });

        const data = await response.json();

        if (!response.ok) {
          if (response.status === 429) {
            throw new Error(`Comments too frequently, please wait ${data.retryAfter} seconds before trying again`);
          }
          throw new Error(data.message || 'Failed to add comment');
        }

        this.comments.push(data);
        this.closeModals();
        this.showNotification('success', 'Comment added successfully!');
      } catch (error) {
        this.showNotification('error', error.message || 'An error occurred while adding your comment');
      }
    },

    // 更新评论
    async updateComment() {
      try {
        const token = localStorage.getItem('adminToken');

        // 准备请求数据
        const commentData = {
          username: this.commentForm.username,
          content: this.commentForm.content,
          rating: parseInt(this.commentForm.rating),
          email: this.commentForm.email || undefined
        };

        // 如果设置了时间，添加到请求中
        if (this.commentForm.created_at) {
          commentData.created_at = new Date(this.commentForm.created_at).toISOString();
        }

        const response = await fetch(`${this.apiBaseUrl}/comments/${this.commentForm.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token
          },
          body: JSON.stringify(commentData)
        });

        if (!response.ok) {
          throw new Error('更新评论失败');
        }

        const updatedComment = await response.json();

        // 更新本地评论列表
        const index = this.comments.findIndex(c => c.id === updatedComment.id);
        if (index !== -1) {
          this.comments.splice(index, 1, updatedComment);
        }

        this.closeModals();
        this.showNotification('success', '评论更新成功！');
      } catch (error) {
        this.showNotification('error', error.message || '更新评论时发生错误');
      }
    },

    // 删除评论
    async deleteComment(commentId) {
      if (!confirm('确定要删除这条评论吗？此操作不可撤销。')) {
        return;
      }

      try {
        const token = localStorage.getItem('adminToken');

        const response = await fetch(`${this.apiBaseUrl}/comments/${commentId}`, {
          method: 'DELETE',
          headers: {
            'x-auth-token': token
          }
        });

        if (!response.ok) {
          if (response.status === 401) {
            this.logout();
            throw new Error('登录已过期，请重新登录');
          }
          throw new Error('删除评论失败');
        }

        // 从列表中移除已删除的评论
        this.comments = this.comments.filter(comment => comment.id !== commentId);

        this.showNotification('success', '评论已成功删除');
      } catch (error) {
        this.showNotification('error', error.message || '删除评论时发生错误');
      }
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString('zh-CN');
    },

    // 显示通知
    showNotification(type, message, title = '') {
      // 清除之前的定时器
      if (this.notification.timeout) {
        clearTimeout(this.notification.timeout);
      }

      this.notification = {
        show: true,
        type,
        title,
        message,
        timeout: setTimeout(() => {
          this.closeNotification();
        }, 3000)
      };
    },

    // 关闭通知
    closeNotification() {
      this.notification.show = false;
      if (this.notification.timeout) {
        clearTimeout(this.notification.timeout);
        this.notification.timeout = null;
      }
    },

    // 格式化日期时间为 datetime-local 输入框格式
    formatDateTimeForInput(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toISOString().slice(0, 16); // 格式: YYYY-MM-DDTHH:MM
    }
  }
};
</script>

<style scoped>
.admin-dashboard {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f5f7fa;
  min-height: 100vh;
  position: relative;
}

/* 通知组件样式 */
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  max-width: 350px;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1100;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  animation: slideIn 0.3s ease-out forwards;
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.notification-content {
  flex: 1;
}

.notification-title {
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 16px;
}

.notification-message {
  font-size: 14px;
}

.notification-close {
  background: none;
  border: none;
  color: inherit;
  font-size: 20px;
  cursor: pointer;
  padding: 0 0 0 10px;
  opacity: 0.7;
}

.notification-close:hover {
  opacity: 1;
}

.notification.success {
  background-color: #e8f5e9;
  border-left: 4px solid #4caf50;
  color: #2e7d32;
}

.notification.error {
  background-color: #ffebee;
  border-left: 4px solid #f44336;
  color: #c62828;
}

.notification.warning {
  background-color: #fff8e1;
  border-left: 4px solid #ffc107;
  color: #ff8f00;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #e1e4e8;
}

.admin-header h1 {
  color: #333;
  margin: 0;
  font-size: 24px;
}

.admin-user-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logout-button {
  padding: 8px 15px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.loading {
  text-align: center;
  padding: 30px;
  font-size: 18px;
  color: #666;
}

.error-message {
  padding: 15px;
  background-color: #ffebee;
  color: #d32f2f;
  border-radius: 6px;
  margin: 20px 0;
}

/* 游戏卡片样式 */
.games-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.game-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-top: 3px solid #4caf50;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.game-header h2 {
  margin: 0;
  color: #333;
  font-size: 20px;
}

.game-actions {
  display: flex;
  gap: 10px;
}

.game-rating-summary {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
}

.rating-label {
  font-weight: bold;
  margin-bottom: 10px;
  color: #555;
}

.rating-distribution {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 15px;
}

.rating-bar {
  display: flex;
  align-items: center;
  gap: 10px;
}

.rating-value {
  width: 40px;
  font-size: 14px;
  color: #666;
}

.rating-count {
  background-color: #e1f5fe;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 14px;
  color: #0288d1;
  min-width: 30px;
  text-align: center;
}

.average-rating {
  font-weight: bold;
  color: #ff9800;
  margin-top: 10px;
}

.comments-section {
  margin-top: 20px;
}

.comments-section h3 {
  margin: 0 0 15px 0;
  color: #333;
  font-size: 18px;
}

.no-comments {
  text-align: center;
  padding: 20px;
  color: #666;
  background-color: #f5f5f5;
  border-radius: 6px;
  margin-bottom: 15px;
}

/* 评论列表样式 */
.comments-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.comment-item {
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border-left: 3px solid #2196f3;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
}

.comment-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
}

.comment-author {
  font-weight: bold;
  font-size: 16px;
  color: #333;
}

.comment-date {
  font-size: 14px;
  color: #666;
}

.comment-rating {
  font-size: 16px;
  font-weight: bold;
  color: #ff9800;
  background-color: #fff8e1;
  padding: 3px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 3px;
}

.star {
  color: #ff9800;
}

.admin-tag {
  background-color: #e91e63;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.8em;
  margin-left: 8px;
}

.comment-content {
  margin-bottom: 15px;
  line-height: 1.5;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 6px;
  color: #333;
}

.comment-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.action-button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.add-button {
  background-color: #4caf50;
  color: white;
}

.add-button:hover {
  background-color: #43a047;
}

.edit-button {
  background-color: #2196f3;
  color: white;
}

.edit-button:hover {
  background-color: #1e88e5;
}

.delete-button {
  background-color: #f44336;
  color: white;
}

.delete-button:hover {
  background-color: #e53935;
}

/* 模态框样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 10px;
  padding: 25px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.modal-content h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #555;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.cancel-button {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button {
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* 分页控制样式 */
.pagination-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.pagination-controls.bottom {
  margin-top: 30px;
}

.pagination-info {
  color: #666;
  font-size: 14px;
}

.pagination-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.pagination-button {
  padding: 8px 15px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.pagination-button:hover:not(:disabled) {
  background-color: #e0e0e0;
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-number {
  padding: 8px 15px;
  background-color: #4caf50;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .admin-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .admin-user-info {
    width: 100%;
    justify-content: space-between;
  }

  .game-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .game-actions {
    width: 100%;
  }

  .action-button {
    padding: 5px 8px;
    font-size: 12px;
  }

  .pagination-controls {
    flex-direction: column;
    gap: 15px;
  }

  .pagination-info {
    text-align: center;
  }
}
</style>
