<template>
  <div class="contact-page">
    <div class="contact-container">
      <h1>Contact Us</h1>
      
      <div class="contact-content">
        <section class="contact-section">
          <h2>Get in Touch</h2>
          <p>
            Have questions, suggestions, or feedback? We'd love to hear from you! 
            Feel free to reach out through any of the following channels.
          </p>
        </section>

        <section class="contact-section">
          <h2>Email</h2>
          <div class="contact-method">
            <p class="contact-label">Support & General Inquiries:</p>
            <a href="mailto:maieldilmie223321@gmail.com" class="contact-link">
                maieldilmie223321@gmail.com
            </a>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  meta: {
    title: 'Contact Us - Chill Guy Games',
    description: 'Get in touch with the Chill Guy Games team. We welcome your feedback, suggestions, and questions.',
    keywords: 'contact chill guy games, support, feedback, game suggestions, help'
  }
};
</script>

<style scoped>
.contact-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
}

.contact-container {
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

.contact-content {
  max-width: 800px;
  margin: 0 auto;
}

.contact-section {
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

.contact-method {
  margin-bottom: 25px;
}

.contact-label {
  color: #666;
  font-size: 1em;
  margin-bottom: 8px;
}

.contact-link {
  color: #4caf50;
  font-size: 1.2em;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #43a047;
  text-decoration: underline;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
  text-decoration: none;
  padding: 12px 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 1.1em;
}

.social-link:hover {
  background: #4caf50;
  color: white;
  border-color: #4caf50;
  transform: translateY(-2px);
}

.social-icon {
  font-size: 1.2em;
}

@media (max-width: 768px) {
  .contact-container {
    padding: 20px;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }

  .social-links {
    flex-direction: column;
  }

  .social-link {
    width: 100%;
  }
}
</style> 