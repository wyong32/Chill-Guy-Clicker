<template>
  <div class="comment-section">
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
                half: n === Math.ceil(averageRating) && !Number.isInteger(averageRating),
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
            <div class="comment-date">{{ formatDate(comment.date) }}</div>
          </div>
          <div class="comment-rating">
            <div class="stars">
              <i
                v-for="n in 5"
                :key="n"
                class="star"
                :class="{
                  filled: n <= Math.floor(comment.rating),
                  half: n === Math.ceil(comment.rating) && !Number.isInteger(comment.rating),
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
        <label for="userEmail">Your Email:</label>
        <input
          type="email"
          id="userEmail"
          class="form-input"
          placeholder="Enter your email"
          v-model="userEmail"
        />
      </div>
      <div class="form-group rating-input">
        <span class="rating-label">Your Rating:</span>
        <div class="stars-input">
          <i
            v-for="n in 5"
            :key="n"
            class="star"
            :class="{ filled: n <= userRating }"
            @click="setRating(n)"
            @mouseover="hoverRating = n"
            @mouseleave="hoverRating = 0"
          ></i>
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
import { COMMENTS_API } from '@/config/api.js'

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
      error: null
    }
  },
  computed: {
    averageRating() {
      if (this.comments.length === 0) return 0
      const sum = this.comments.reduce((total, comment) => total + comment.rating, 0)
      return (sum / this.comments.length).toFixed(1)
    },
  },
  created() {
    // 组件创建时加载该游戏的评论
    this.loadComments()
  },
  methods: {
    // 加载评论
    async loadComments() {
      this.isLoading = true
      this.error = null

      try {
        const response = await fetch(COMMENTS_API.GET_BY_GAME(this.gameId))

        if (!response.ok) {
          throw new Error(`Failed to load comments: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        this.comments = data
      } catch (error) {
        console.error('Failed to load comments:', error)
        this.error = error.message || 'Failed to load comments'
      } finally {
        this.isLoading = false
      }
    },

    // 获取特定评分的评论百分比
    getGameComments(gameId) {
      return this.comments.filter(comment => comment.gameId === gameId)
    },

    // 添加新评论
    async addComment(newComment) {
      try {
        const response = await fetch(COMMENTS_API.ADD, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newComment),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || 'Failed to add comment')
        }

        const savedComment = await response.json()

        // 更新本地数据
        this.comments.push(savedComment)

        return savedComment
      } catch (error) {
        console.error('Error adding comment:', error)
        throw error
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    },
    getRatingPercentage(rating) {
      if (this.comments.length === 0) return 0
      const count = this.comments.filter((comment) => Math.floor(comment.rating) === rating).length
      return Math.round((count / this.comments.length) * 100)
    },
    setRating(rating) {
      this.userRating = rating
    },
    async submitComment() {
      if (!this.userName.trim()) {
        alert('Please enter your name')
        return
      }

      if (!this.userEmail.trim()) {
        alert('Please enter your email')
        return
      }

      if (this.userRating === 0) {
        alert('Please provide your rating')
        return
      }

      if (!this.userComment.trim()) {
        alert('Please enter your review')
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
          gameId: this.gameId,
          username: this.userName,
          email: this.userEmail, // 包含邮箱
          rating: this.userRating,
          content: this.userComment,
        }

        // 添加评论
        await this.addComment(newComment)

        // Reset form
        this.userName = ''
        this.userEmail = ''
        this.userRating = 0
        this.userComment = ''

        // Show success message
        alert('Review submitted successfully!')
      } catch (error) {
        console.error('Error submitting comment:', error)
        alert(`Failed to submit review: ${error.message || 'Unknown error'}`)
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
  background-color: #f8f8f8;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
}

.average-rating {
  display: flex;
  align-items: center;
  padding-right: 30px;
  margin-right: 30px;
  border-right: 1px solid #ddd;
}

.rating-number {
  font-size: 48px;
  font-weight: 700;
  color: #f39c12;
  margin-right: 15px;
}

.rating-stars {
  display: flex;
  flex-direction: column;
}

.stars {
  display: flex;
  margin-bottom: 5px;
}

.star {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 3px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23ddd' d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E");
  background-size: contain;
}

.star.filled {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFD700' d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'/%3E%3C/svg%3E");
}

.star.half {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FFD700' d='M12 2L9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z'/%3E%3Cpath fill='%23ddd' d='M12 2v15.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2z'/%3E%3C/svg%3E");
}

.rating-count {
  font-size: 14px;
  color: #666;
}

.rating-bars {
  flex: 1;
}

.rating-bar-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.rating-bar-container {
  flex: 1;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 10px;
}

.rating-bar {
  height: 100%;
  background-color: #41b883;
  border-radius: 4px;
}

.rating-percentage {
  width: 40px;
  font-size: 12px;
  color: #666;
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
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.comment-content {
  flex: 1;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.comment-user {
  font-weight: 600;
  color: #333;
}

.comment-date {
  font-size: 12px;
  color: #888;
}

.comment-rating {
  margin-bottom: 10px;
}

.comment-rating .star {
  width: 16px;
  height: 16px;
}

.comment-text {
  line-height: 1.6;
  color: #555;
}

.comment-form {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
}

.form-title {
  font-size: 18px;
  margin-bottom: 20px;
  color: var(--secondary-color);
  font-weight: 600;
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
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: inherit;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-color);
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

.stars-input {
  display: flex;
}

.stars-input .star {
  cursor: pointer;
  width: 24px;
  height: 24px;
}

.comment-textarea {
  width: 100%;
  height: 120px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  font-family: inherit;
  font-size: 14px;
  transition: border-color 0.3s;
}

.comment-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.submit-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: block;
  margin-top: 20px;
}

.submit-button:hover {
  background-color: var(--accent-color);
  transform: translateY(-2px);
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
