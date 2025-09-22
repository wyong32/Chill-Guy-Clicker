<template>
  <div class="terms-of-use-view">
    <!-- 页面级Header -->
    <TheHeader />
    <div class="container">
      <h1 class="page-title">Terms of Use</h1>

      <div class="terms-content">
        <section class="terms-section">
          <h2>Introduction</h2>
          <p>
            Welcome to Chill Guy Games. These Terms of Use govern your use of our website and services.
            By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of the terms,
            you may not access the website.
          </p>
        </section>

        <section class="terms-section">
          <h2>Intellectual Property</h2>
          <p>
            The website and its original content, features, and functionality are owned by Chill Guy Games and are protected by
            international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
        </section>

        <section class="terms-section">
          <h2>User Content</h2>
          <p>
            Our website may allow you to post, link, store, share and otherwise make available certain information, text, graphics,
            videos, or other material. You are responsible for the content that you post to the website, including its legality,
            reliability, and appropriateness.
          </p>
          <p>
            By posting content to the website, you grant us the right to use, modify, publicly perform, publicly display, reproduce,
            and distribute such content on and through the website. You retain any and all of your rights to any content you submit,
            post or display on or through the website and you are responsible for protecting those rights.
          </p>
        </section>

        <section class="terms-section">
          <h2>User Accounts</h2>
          <p>
            When you create an account with us, you guarantee that the information you provide us is accurate, complete, and current at all times.
            Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the website.
          </p>
          <p>
            You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction
            of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur
            under your account and/or password.
          </p>
        </section>

        <section class="terms-section">
          <h2>Prohibited Uses</h2>
          <p>
            You may use our website only for lawful purposes and in accordance with these Terms. You agree not to use the website:
          </p>
          <ul>
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
            <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful.</li>
          </ul>
        </section>

        <section class="terms-section">
          <h2>Disclaimer</h2>
          <p>
            Your use of the website is at your sole risk. The website is provided on an "AS IS" and "AS AVAILABLE" basis.
            The website is provided without warranties of any kind, whether express or implied, including, but not limited to,
            implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
          </p>
        </section>

        <section class="terms-section">
          <h2>Limitation of Liability</h2>
          <p>
            Chill Guy Games, its subsidiaries, affiliates, and its licensors shall not be liable to you for any direct, indirect,
            incidental, special, consequential or exemplary damages, including damages for loss of profits, goodwill, use, data or
            other intangible losses, resulting from:
          </p>
          <ul>
            <li>The use or the inability to use the website;</li>
            <li>The cost of procurement of substitute goods and services;</li>
            <li>Unauthorized access to or alteration of your transmissions or data;</li>
            <li>Any other matter relating to the website.</li>
          </ul>
        </section>

        <section class="terms-section">
          <h2>Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material
            we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will
            be determined at our sole discretion.
          </p>
        </section>

        <section class="terms-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            delldremo9898@gmail.com
          </p>
        </section>
      </div>

      <div class="back-link">
        <a href="/" class="back-button">
          <span class="back-icon"></span>
          Back to Home
        </a>
      </div>
    </div>
    <!-- 页面级Footer -->
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'TermsOfUseView',
  components: {
    TheHeader,
    TheFooter,
  },
  // SEO 信息已在路由中设置
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}

.page-title {
  font-size: 36px;
  color: #41b883;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  padding-bottom: 15px;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #41b883, #f39c12);
  border-radius: 2px;
}

.terms-content {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.terms-section {
  margin-bottom: 30px;
}

.terms-section:last-child {
  margin-bottom: 0;
}

.terms-section h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.terms-section p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.terms-section ul {
  padding-left: 20px;
  margin-bottom: 15px;
}

.terms-section li {
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;
}

.terms-section a {
  color: #41b883;
  text-decoration: none;
  transition: color 0.3s;
}

.terms-section a:hover {
  color: #f39c12;
}

.back-link {
  text-align: center;
}

.back-button {
  display: inline-flex;
  align-items: center;
  color: #41b883;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.back-button:hover {
  color: #f39c12;
}

.back-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2341b883' d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'/%3E%3C/svg%3E");
  background-size: contain;
}

@media (max-width: 768px) {
  .terms-content {
    padding: 30px 20px;
  }

  .page-title {
    font-size: 28px;
  }

  .terms-section h2 {
    font-size: 20px;
  }
}
</style>
