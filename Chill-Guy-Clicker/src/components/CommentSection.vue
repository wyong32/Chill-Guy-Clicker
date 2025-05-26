<template>
  <div class="comment-section">
    <!-- 简化的消息通知组件 -->
    <div
      v-if="notification.show"
      class="message-notification"
      :class="{
        'success': notification.type === 'success',
        'error': notification.type === 'error',
        'warning': notification.type === 'warning',
        'info': notification.type === 'info'
      }"
    >
      <span class="message-icon">
        <span v-if="notification.type === 'success'">✓</span>
        <span v-else-if="notification.type === 'error'">✕</span>
        <span v-else-if="notification.type === 'warning'">!</span>
        <span v-else>i</span>
      </span>
      <span class="message-content">{{ notification.message }}</span>
      <button class="message-close" @click="closeNotification">×</button>
    </div>

    <h3 class="section-title">Player Reviews</h3>

    <div class="comment-stats">
      <div class="average-rating">
        <div class="rating-number">{{ averageRating }}</div>
        <div class="rating-stars">
          <div class="stars">
            <i
              v-for="n in 5"
              :key="n"
              class="star"
              :class="{
                filled: n <= Math.floor(averageRating),
                half: n === Math.ceil(averageRating) && averageRating % 1 >= 0.5,
              }"
            ></i>
          </div>
          <div class="rating-count">{{ comments.length }} reviews</div>
        </div>
      </div>
      <div class="rating-bars">
        <div class="rating-bar-item" v-for="n in 5" :key="n">
          <div class="rating-label">{{ 6 - n }}</div>
          <div class="rating-bar-container">
            <div class="rating-bar" :style="{ width: getRatingPercentage(6 - n) + '%' }"></div>
          </div>
          <div class="rating-percentage">{{ getRatingPercentage(6 - n) }}%</div>
        </div>
      </div>
    </div>

    <div class="comment-list">
      <!-- 加载状态 -->
      <div v-if="isLoading" class="loading-comments">
        <p>Loading reviews...</p>
      </div>

      <!-- 错误提示 -->
      <div v-else-if="error" class="error-message">
        <p>{{ error }}</p>
        <button @click="loadComments" class="retry-button">Retry</button>
      </div>

      <!-- 没有评论 -->
      <div v-else-if="comments.length === 0" class="no-comments">
        <p>No reviews yet. Be the first to leave a review!</p>
      </div>

      <!-- 评论列表 -->
      <div v-else class="comment-item" v-for="comment in comments" :key="comment.id">
        <div class="comment-content">
          <div class="comment-header">
            <div class="comment-user">{{ comment.username }}</div>
            <div class="comment-date">{{ formatDate(comment.created_at) }}</div>
          </div>
          <div class="comment-rating">
            <div class="stars">
              <i
                v-for="n in 5"
                :key="n"
                class="star"
                :class="{
                  filled: n <= Math.floor(Number(comment.rating)),
                  half: n === Math.ceil(Number(comment.rating)) && Number(comment.rating) % 1 >= 0.5,
                }"
              ></i>
            </div>
          </div>
          <div class="comment-text">{{ comment.content }}</div>
        </div>
      </div>
    </div>

    <div class="comment-form">
      <h4 class="form-title">Leave a Review</h4>
      <div class="form-group">
        <label for="userName">Your Name:</label>
        <input
          type="text"
          id="userName"
          class="form-input"
          placeholder="Enter your name"
          v-model="userName"
        />
      </div>
      <div class="form-group">
        <label for="userEmail">Your Email: <span class="optional">(Optional)</span></label>
        <input
          type="email"
          id="userEmail"
          class="form-input"
          :class="{ 'input-error': emailError }"
          placeholder="Enter your email (optional)"
          v-model="userEmail"
          @input="validateEmail"
          @blur="validateEmail"
        />
        <div v-if="emailError" class="error-text">{{ emailError }}</div>
      </div>
      <div class="form-group rating-input">
        <span class="rating-label">Your Rating:</span>
        <div class="stars-input-container">
          <div class="stars-input">
            <i
              v-for="n in 5"
              :key="n"
              class="star"
              :class="{
                filled: n <= userRating,
                hover: n <= hoverRating && hoverRating > 0
              }"
              @click="setRating(n)"
              @mouseover="hoverRating = n"
              @mouseleave="hoverRating = 0"
            ></i>
          </div>
          <div v-if="hoverRating > 0" class="rating-tooltip">
            {{ hoverRating }} {{ hoverRating === 1 ? 'Star' : 'Stars' }}
          </div>
          <div v-else-if="userRating > 0" class="rating-tooltip selected">
            {{ userRating }} {{ userRating === 1 ? 'Star' : 'Stars' }}
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="userComment">Your Review:</label>
        <textarea
          id="userComment"
          class="comment-textarea"
          placeholder="Share your gaming experience..."
          v-model="userComment"
        ></textarea>
      </div>
      <button class="submit-button" @click="submitComment">Submit Review</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentSection',
  props: {
    gameId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      userRating: 0,
      hoverRating: 0,
      userName: '',
      userEmail: '',
      userComment: '',
      comments: [],
      isLoading: false,
      error: null,
      emailError: '', // 用于存储邮箱验证错误信息
      notification: {
        show: false,
        type: 'success', // success, error, warning
        title: '',
        message: '',
        timeout: null
      },
      // 简化 API 配置 - 直接使用生产环境 API
      apiBaseUrl: 'https://chill-guy-clicker-api.vercel.app/api'
    }
  },
  computed: {
    averageRating() {
      if (this.comments.length === 0) return 0
      // 确保评分是数字
      const sum = this.comments.reduce((total, comment) => total + Number(comment.rating), 0)
      // 返回数字，而不是字符串
      return Number((sum / this.comments.length).toFixed(1))
    },
  },
  // 监听 gameId 变化，当游戏切换时重新加载评论
  watch: {
    gameId: {
      handler(newGameId, oldGameId) {
        // 只在开发环境中输出日志
        if (import.meta.env.DEV) {
          console.log(`Game changed from ${oldGameId} to ${newGameId}, reloading comments`)
        }
        this.loadComments()
      },
      immediate: true
    }
  },
  methods: {
    // 加载评论 - 简化版本
    async loadComments() {
      this.isLoading = true
      this.error = null
      this.comments = []

      try {
        const response = await fetch(`${this.apiBaseUrl}/comments/game/${this.gameId}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        })

        if (!response.ok) {
          throw new Error(`Failed to load comments: ${response.status}`)
        }

        const data = await response.json()
        this.comments = data
      } catch (error) {
        console.error(`Failed to load comments:`, error)
        this.error = 'Failed to load comments'
      } finally {
        this.isLoading = false
      }
    },

    // 添加新评论 - 简化版本
    async addComment(newComment) {
      try {
        const response = await fetch(`${this.apiBaseUrl}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newComment),
        })

        if (!response.ok) {
          throw new Error('Failed to add comment')
        }

        const savedComment = await response.json()
        await this.loadComments() // 重新加载评论
        return savedComment
      } catch (error) {
        console.error('Error adding comment:', error)
        throw error
      }
    },
    formatDate(dateString) {
      // 检查日期字符串是否有效
      if (!dateString) return 'No date';

      try {
        // 尝试创建日期对象
        const date = new Date(dateString);

        // 检查日期是否有效
        if (isNaN(date.getTime())) {
          console.warn('Invalid date:', dateString);
          return 'Invalid Date';
        }

        // 格式化日期
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      } catch (error) {
        console.error('Error formatting date:', error);
        return 'Invalid Date';
      }
    },

    // 验证邮箱格式
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },

    // 实时验证邮箱
    validateEmail() {
      // 如果邮箱为空，不显示错误
      if (!this.userEmail.trim()) {
        this.emailError = ''
        return true
      }

      // 验证邮箱格式
      const isValid = this.isValidEmail(this.userEmail)
      this.emailError = isValid ? '' : 'Please enter a valid email address'
      return isValid
    },
    getRatingPercentage(rating) {
      if (this.comments.length === 0) return 0
      const count = this.comments.filter((comment) => Math.round(Number(comment.rating)) === rating).length
      return Math.round((count / this.comments.length) * 100)
    },
    setRating(rating) {
      this.userRating = rating
    },

    // 显示通知，仿照 Element UI 的 Message
    showNotification(type, title, message, duration = 3000) {
      // 清除之前的定时器
      if (this.notification.timeout) {
        clearTimeout(this.notification.timeout)
      }

      // 设置通知内容
      this.notification = {
        show: true,
        type: type || 'info', // 默认为 info 类型
        message: message || title, // 如果没有 message，使用 title
        timeout: null
      }

      // 设置自动关闭
      this.notification.timeout = setTimeout(() => {
        this.closeNotification()
      }, duration)
    },

    // 关闭通知
    closeNotification() {
      // 直接隐藏通知，CSS 过渡会自动处理动画
      this.notification.show = false

      // 清除定时器
      if (this.notification.timeout) {
        clearTimeout(this.notification.timeout)
        this.notification.timeout = null
      }
    },
    async submitComment() {
      if (!this.userName.trim()) {
        this.showNotification('warning', null, 'Please enter your name')
        return
      }

      // 邮箱是可选的，但如果提供了，必须是有效的格式
      if (this.userEmail.trim() && !this.isValidEmail(this.userEmail)) {
        this.showNotification('warning', null, 'Please enter a valid email address')
        return
      }

      if (this.userRating === 0) {
        this.showNotification('warning', null, 'Please select a rating')
        return
      }

      if (!this.userComment.trim()) {
        this.showNotification('warning', null, 'Please enter your review')
        return
      }

      try {
        // 显示加载状态
        const submitButton = document.querySelector('.submit-button')
        if (submitButton) {
          submitButton.disabled = true
          submitButton.textContent = 'Submitting...'
        }

        // Create new comment object
        const newComment = {
          gameId: this.gameId, // 确保使用当前游戏ID
          username: this.userName,
          email: this.userEmail,
          rating: this.userRating,
          content: this.userComment,
        }

        // 只在开发环境中输出日志
        if (import.meta.env.DEV) {
          console.log(`Submitting comment for game ID: ${this.gameId}`, newComment)
        }

        // 添加评论
        await this.addComment(newComment)

        // Reset form
        this.userName = ''
        this.userEmail = ''
        this.userRating = 0
        this.userComment = ''

        // 显示成功消息
        this.showNotification(
          'success',
          null,
          'Your review has been successfully added!'
        )
      } catch (error) {
        console.error('Error submitting comment:', error)
        this.showNotification(
          'error',
          null,
          `Failed to submit review: ${error.message || 'Unknown error'}`
        )
      } finally {
        // 恢复按钮状态
        const submitButton = document.querySelector('.submit-button')
        if (submitButton) {
          submitButton.disabled = false
          submitButton.textContent = 'Submit Review'
        }
      }
    },
  },
}
</script>

<style scoped>
.comment-section {
  margin-top: 40px;
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
  position: relative;
  padding-left: 15px;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 20px;
  background-color: #41b883;
  border-radius: 3px;
}

.comment-stats {
  display: flex;
  background: linear-gradient(145deg, #f8f9fa, #ffffff);
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 40px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.03),
    0 1px 3px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(65, 184, 131, 0.1);
  position: relative;
  overflow: hidden;
}

.comment-stats::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
}

.average-rating {
  display: flex;
  align-items: center;
  padding-right: 40px;
  margin-right: 40px;
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  position: relative;
}

.rating-number {
  font-size: 60px;
  font-weight: 800;
  background: linear-gradient(135deg, #f39c12, #e67e22);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-right: 20px;
  line-height: 1;
  text-shadow: 0 2px 10px rgba(243, 156, 18, 0.2);
}

.rating-stars {
  display: flex;
  flex-direction: column;
}

.stars {
  display: flex;
  margin-bottom: 8px;
}

.star {
  display: inline-block;
  width: 22px;
  height: 22px;
  margin-right: 4px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23ddd' d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E");
  background-size: contain;
  transition: transform 0.2s ease;
}

.star:hover {
  transform: scale(1.1);
}

.star.filled {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFD700' d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E");
  filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.4));
}

.star.half {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFD700' d='M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z'/%3E%3Cpath fill='%23ddd' d='M12 2v15.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2z'/%3E%3C/svg%3E");
  filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.2));
}

.rating-count {
  font-size: 14px;
  color: #7f8c8d;
  font-weight: 500;
  background-color: #f8f9fa;
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-block;
}

.rating-bars {
  flex: 1;
  padding-left: 10px;
}

.rating-bar-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
}

.rating-label {
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 4px;
  padding: 2px 0;
  margin-right: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.rating-bar-container {
  flex: 1;
  height: 10px;
  background-color: #ecf0f1;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 15px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
}

.rating-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 5px;
  transition: width 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
}

.rating-percentage {
  width: 45px;
  font-size: 13px;
  color: #7f8c8d;
  font-weight: 600;
}

.comment-list {
  margin-bottom: 40px;
}

.loading-comments,
.error-message,
.no-comments {
  padding: 30px 0;
  text-align: center;
  color: #666;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 20px;
}

.loading-comments {
  color: #41b883;
}

.error-message {
  color: #e74c3c;
}

.error-message p {
  margin-bottom: 15px;
}

.retry-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.retry-button:hover {
  background-color: #c0392b;
}

.no-comments {
  font-style: italic;
}

.comment-item {
  display: flex;
  padding: 25px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow:
    0 5px 15px rgba(0, 0, 0, 0.03),
    0 1px 3px rgba(0, 0, 0, 0.02);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 3px solid var(--primary-color);
}

.comment-item:hover {
  transform: translateY(-3px);
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.05),
    0 2px 5px rgba(0, 0, 0, 0.03);
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.comment-user {
  font-weight: 700;
  color: #2c3e50;
  font-size: 16px;
  position: relative;
  padding-left: 10px;
}

.comment-user::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 16px;
  background-color: var(--primary-color);
  border-radius: 3px;
  opacity: 0.7;
}

.comment-date {
  font-size: 13px;
  color: #95a5a6;
  font-weight: 500;
  background-color: #f8f9fa;
  padding: 4px 10px;
  border-radius: 20px;
}

.comment-rating {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.comment-rating::before {
  content: 'Rating:';
  font-size: 13px;
  color: #7f8c8d;
  margin-right: 8px;
}

.comment-rating .star {
  width: 18px;
  height: 18px;
}

.comment-text {
  line-height: 1.7;
  color: #444;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  position: relative;
  font-size: 15px;
}

.comment-text::before {
  content: '"';
  position: absolute;
  top: 5px;
  left: 10px;
  font-size: 30px;
  color: #ddd;
  font-family: Georgia, serif;
}

.comment-form {
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 12px;
  padding: 30px;
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.05),
    0 1px 3px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(65, 184, 131, 0.1);
  position: relative;
  overflow: hidden;
}

.comment-form::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
}

.form-title {
  font-size: 22px;
  margin-bottom: 25px;
  color: var(--secondary-color);
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
}

.form-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--primary-color);
  border-radius: 3px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: var(--secondary-color);
}

.form-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-family: inherit;
  font-size: 15px;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}

.form-input:hover {
  border-color: #ccc;
  background-color: #f5f5f5;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
  background-color: #fff;
  box-shadow:
    inset 0 1px 3px rgba(0, 0, 0, 0.02),
    0 0 0 3px rgba(65, 184, 131, 0.1);
}

.input-error {
  border-color: #e74c3c !important;
  background-color: rgba(231, 76, 60, 0.05);
  box-shadow: 0 0 0 1px rgba(231, 76, 60, 0.2);
}

.error-text {
  color: #e74c3c;
  font-size: 12px;
  margin-top: 8px;
  padding: 6px 10px;
  background-color: rgba(231, 76, 60, 0.08);
  border-radius: 4px;
  display: flex;
  align-items: center;
  animation: fadeIn 0.3s ease-in-out;
}

.error-text::before {
  content: '⚠️';
  margin-right: 6px;
  font-size: 14px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.optional {
  font-size: 12px;
  color: #888;
  font-weight: normal;
}

/* 简化的消息通知样式 */
.message-notification {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  max-width: 90%;
  padding: 15px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  z-index: 99999; /* 提高层级，确保显示在导航栏上方 */
  margin-top: 70px; /* 增加顶部边距，避免被导航栏遮挡 */
  animation: slideDown 0.3s ease-out forwards;
}

@keyframes slideDown {
  from {
    transform: translate(-50%, -50px);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0);
    opacity: 1;
  }
}

.message-notification.success {
  background-color: #f0f9eb;
  border-left: 4px solid #67c23a;
}

.message-notification.warning {
  background-color: #fdf6ec;
  border-left: 4px solid #e6a23c;
}

.message-notification.error {
  background-color: #fef0f0;
  border-left: 4px solid #f56c6c;
}

.message-notification.info {
  background-color: #f4f4f5;
  border-left: 4px solid #909399;
}

.message-icon {
  margin-right: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.success .message-icon {
  color: #67c23a;
  background-color: rgba(103, 194, 58, 0.1);
}

.warning .message-icon {
  color: #e6a23c;
  background-color: rgba(230, 162, 60, 0.1);
}

.error .message-icon {
  color: #f56c6c;
  background-color: rgba(245, 108, 108, 0.1);
}

.info .message-icon {
  color: #909399;
  background-color: rgba(144, 147, 153, 0.1);
}

.message-content {
  flex: 1;
  font-size: 14px;
  line-height: 1.4;
}

.success .message-content {
  color: #67c23a;
}

.warning .message-content {
  color: #e6a23c;
}

.error .message-content {
  color: #f56c6c;
}

.info .message-content {
  color: #909399;
}

.message-close {
  background: none;
  border: none;
  color: #c0c4cc;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
  line-height: 1;
  transition: color 0.2s;
}

.message-close:hover {
  color: #909399;
}

@media (max-width: 768px) {
  .message-notification {
    width: 90%;
    margin-top: 60px; /* 移动设备上的顶部边距 */
  }
}

.rating-input {
  display: flex;
  align-items: center;
}

.rating-label {
  margin-right: 10px;
  color: var(--secondary-color);
  font-weight: 500;
}

.stars-input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.stars-input {
  display: flex;
  position: relative;
}

.stars-input .star {
  cursor: pointer;
  width: 32px;
  height: 32px;
  transition: transform 0.2s ease, filter 0.2s ease;
  position: relative;
  z-index: 1;
}

.stars-input .star:hover {
  transform: scale(1.2);
}

.stars-input .star.hover {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFA41B' d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E");
  filter: drop-shadow(0 0 3px rgba(255, 164, 27, 0.7));
  transform: scale(1.2);
}

.stars-input .star.filled {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFD700' d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E");
  filter: drop-shadow(0 0 2px rgba(255, 215, 0, 0.4));
}

.stars-input .star.filled.hover {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFA41B' d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E");
}

.rating-tooltip {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #f39c12, #e67e22);
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fadeInDown 0.3s forwards;
  z-index: 2;
}

.rating-tooltip::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #e67e22;
}

.rating-tooltip.selected {
  background: linear-gradient(135deg, #f1c40f, #f39c12);
}

.rating-tooltip.selected::after {
  border-top-color: #f39c12;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate(-50%, -10px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes starPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

.comment-textarea {
  width: 100%;
  height: 140px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  resize: none;
  font-family: inherit;
  font-size: 15px;
  line-height: 1.6;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}

.comment-textarea:hover {
  border-color: #ccc;
  background-color: #f5f5f5;
}

.comment-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  background-color: #fff;
  box-shadow:
    inset 0 1px 3px rgba(0, 0, 0, 0.02),
    0 0 0 3px rgba(65, 184, 131, 0.1);
}

.submit-button {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition:
    all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow:
    0 4px 10px rgba(65, 184, 131, 0.2),
    0 1px 3px rgba(0, 0, 0, 0.05);
  display: block;
  margin-top: 25px;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
}

.submit-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.7s;
}

.submit-button:hover {
  transform: translateY(-3px);
  box-shadow:
    0 6px 15px rgba(65, 184, 131, 0.25),
    0 2px 5px rgba(0, 0, 0, 0.08);
}

.submit-button:hover::before {
  left: 100%;
}

.submit-button:active {
  transform: translateY(1px);
  box-shadow:
    0 2px 5px rgba(65, 184, 131, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
}

.submit-button:disabled {
  background: linear-gradient(135deg, #a8d5c5, #b8c9d0);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

@media (max-width: 768px) {
  .comment-stats {
    flex-direction: column;
  }

  .average-rating {
    border-right: none;
    border-bottom: 1px solid #ddd;
    padding-right: 0;
    padding-bottom: 15px;
    margin-right: 0;
    margin-bottom: 15px;
    width: 100%;
    justify-content: center;
  }

  .rating-number {
    font-size: 36px;
  }
}
</style>
