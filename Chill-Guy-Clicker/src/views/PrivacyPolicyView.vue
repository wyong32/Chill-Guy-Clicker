<template>
  <div class="privacy-policy-view">
    <div class="container">
      <h1 class="page-title">Privacy Policy</h1>

      <div class="policy-content">
        <section class="policy-section">
          <h2>Introduction</h2>
          <p>
            Welcome to Chill Guy Games. We respect your privacy and are committed to protecting your personal data.
            This privacy policy will inform you about how we look after your personal data when you visit our website
            and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section class="policy-section">
          <h2>Information We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>How We Use Your Information</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>To provide and maintain our services.</li>
            <li>To notify you about changes to our services.</li>
            <li>To allow you to participate in interactive features of our services when you choose to do so.</li>
            <li>To provide customer support.</li>
            <li>To gather analysis or valuable information so that we can improve our services.</li>
            <li>To monitor the usage of our services.</li>
            <li>To detect, prevent and address technical issues.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our service and we hold certain information.
            Cookies are files with a small amount of data which may include an anonymous unique identifier.
            Cookies are sent to your browser from a website and stored on your device.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>
        </section>

        <section class="policy-section">
          <h2>Data Security</h2>
          <p>
            We have implemented appropriate security measures to prevent your personal data from being accidentally lost,
            used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data
            to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </section>

        <section class="policy-section">
          <h2>Your Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
          </p>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            We will let you know via email and/or a prominent notice on our service, prior to the change becoming effective and update
            the "effective date" at the top of this Privacy Policy.
          </p>
        </section>

        <section class="policy-section">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
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
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicyView',
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

.policy-content {
  background: white;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.policy-section {
  margin-bottom: 30px;
}

.policy-section:last-child {
  margin-bottom: 0;
}

.policy-section h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.policy-section p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.policy-section ul {
  padding-left: 20px;
  margin-bottom: 15px;
}

.policy-section li {
  color: #555;
  line-height: 1.6;
  margin-bottom: 8px;
}

.policy-section a {
  color: #41b883;
  text-decoration: none;
  transition: color 0.3s;
}

.policy-section a:hover {
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
  .policy-content {
    padding: 30px 20px;
  }

  .page-title {
    font-size: 28px;
  }

  .policy-section h2 {
    font-size: 20px;
  }
}
</style>
