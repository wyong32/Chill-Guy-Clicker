<template>
  <div class="about-page">
    <!-- 页面级Header -->
    <TheHeader />
    <div class="about-container">
      <h1>About Chill Guy Games</h1>
      
      <section class="about-section">
        <h2>Our Story</h2>
        <p>
          Welcome to Chill Guy Games, your ultimate destination for relaxing and enjoyable online gaming experiences. 
          We believe in creating games that bring joy, relaxation, and a touch of humor to your daily life.
        </p>
      </section>

      <section class="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide high-quality, browser-based games that are accessible to everyone. 
          We focus on creating engaging experiences that help you unwind and have fun, whether you're taking a short break 
          or looking for a longer gaming session.
        </p>
      </section>

      <section class="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Relaxing idle games</li>
          <li>Casual browser games</li>
          <li>Chill music collection</li>
          <li>High-quality wallpapers</li>
          <li>PNG resources for creative projects</li>
        </ul>
      </section>

      <section class="about-section">
        <h2>Our Values</h2>
        <div class="values-grid">
          <div class="value-item">
            <h3>Quality</h3>
            <p>We strive for excellence in every game and resource we create.</p>
          </div>
          <div class="value-item">
            <h3>Accessibility</h3>
            <p>Our games are designed to be enjoyed by everyone, anywhere.</p>
          </div>
          <div class="value-item">
            <h3>Community</h3>
            <p>We value our community and encourage positive interactions.</p>
          </div>
          <div class="value-item">
            <h3>Innovation</h3>
            <p>We continuously work to bring new and exciting features to our platform.</p>
          </div>
        </div>
      </section>
    </div>
    <!-- 页面级Footer -->
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'AboutView',
  components: {
    TheHeader,
    TheFooter,
  },
  meta: {
    title: 'About Us - Chill Guy Games',
    description: 'Learn about Chill Guy Games, our mission, values, and what we offer to our community of players.',
    keywords: 'about chill guy games, game development, online games, browser games, chill games'
  }
};
</script>

<style scoped>
.about-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
}

.about-container {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

h1 {
  color: #333;
  font-size: 2.5em;
  margin-bottom: 40px;
  text-align: center;
}

.about-section {
  margin-bottom: 40px;
}

h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

p {
  color: #666;
  line-height: 1.6;
  font-size: 1.1em;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  color: #666;
  font-size: 1.1em;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

li:before {
  content: "•";
  color: #4caf50;
  position: absolute;
  left: 0;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 20px;
}

.value-item {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.value-item:hover {
  transform: translateY(-5px);
}

.value-item h3 {
  color: #4caf50;
  margin-bottom: 10px;
  font-size: 1.3em;
}

@media (max-width: 768px) {
  .about-container {
    padding: 20px;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style> 