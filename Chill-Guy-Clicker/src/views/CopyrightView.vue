<template>
  <div class="copyright-page">
    <!-- 页面级Header -->
    <TheHeader />
    <div class="copyright-container">
      <h1>Copyright Notice</h1>
      
      <section class="copyright-section">
        <h2>Copyright © 2025 chillguymemeclicker.com</h2>
        <p>
          All rights reserved. The content, organization, graphics, design, compilation, and other matters related to this website are protected under applicable copyrights, trademarks, and other proprietary rights.
        </p>
      </section>

      <section class="copyright-section">
        <h2>Intellectual Property Rights</h2>
        <p>
          All content on this website, including but not limited to:
        </p>
        <ul>
          <li>Games and game mechanics</li>
          <li>Graphics, images, and artwork</li>
          <li>Music and sound effects</li>
          <li>Text, logos, and branding</li>
          <li>Code and software</li>
        </ul>
        <p>
          is the property of Chill Guy Games or its content suppliers and is protected by international copyright laws.
        </p>
      </section>

      <section class="copyright-section">
        <h2>Usage Rights</h2>
        <p>
          You may not:
        </p>
        <ul>
          <li>Copy, reproduce, or distribute any content without permission</li>
          <li>Modify or create derivative works</li>
          <li>Use our content for commercial purposes</li>
          <li>Remove any copyright or proprietary notices</li>
        </ul>
      </section>

      <section class="copyright-section">
        <h2>Fair Use</h2>
        <p>
          You may use our content for personal, non-commercial purposes, such as:
        </p>
        <ul>
          <li>Playing our games</li>
          <li>Sharing game screenshots on social media</li>
          <li>Creating fan art (with proper attribution)</li>
          <li>Writing reviews or commentary</li>
        </ul>
      </section>

      <section class="copyright-section">
        <h2>Contact</h2>
        <p>
          For copyright-related inquiries, please contact us at:
          <a href="mailto:delldremo9898@gmail.com" class="contact-link">delldremo9898@gmail.com</a>
        </p>
      </section>

      <section class="copyright-section">
        <h2>Updates</h2>
        <p>
          This copyright notice was last updated on May 20, 2025. We reserve the right to modify this notice at any time.
        </p>
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
  name: 'CopyrightView',
  components: {
    TheHeader,
    TheFooter,
  },
  meta: {
    title: 'Copyright Notice - Chill Guy Games',
    description: 'Read our copyright notice to understand the intellectual property rights and usage terms for Chill Guy Games content.',
    keywords: 'copyright notice, intellectual property, usage rights, fair use, chill guy games copyright'
  }
};
</script>

<style scoped>
.copyright-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
}

.copyright-container {
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

.copyright-section {
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
  margin-bottom: 20px;
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

.contact-link {
  color: #4caf50;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #43a047;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .copyright-container {
    padding: 20px;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.5em;
  }
}
</style> 