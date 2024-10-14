'use client';  // Add this line to mark the component as a Client Component

import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqHeading}>Quick answers</h2>
      <div className={`${styles.faqItem} ${activeIndex === 0 ? styles.active : ''}`} onClick={() => toggleFAQ(0)}>
        <div className={styles.faqQuestion}>
          Can I download everything on the website?
          <span className={styles.faqIcon}>&#9660;</span>
        </div>
        {activeIndex === 0 && (
          <div className={styles.faqAnswer}>
            Yes, you can download everything as per your membership level.
          </div>
        )}
      </div>

      <div className={`${styles.faqItem} ${activeIndex === 1 ? styles.active : ''}`} onClick={() => toggleFAQ(1)}>
        <div className={styles.faqQuestion}>
          How do I renew or cancel my membership?
          <span className={styles.faqIcon}>&#9660;</span>
        </div>
        {activeIndex === 1 && (
          <div className={styles.faqAnswer}>
            You can renew or cancel your membership from the account settings page.
          </div>
        )}
      </div>

      <div className={`${styles.faqItem} ${activeIndex === 2 ? styles.active : ''}`} onClick={() => toggleFAQ(2)}>
        <div className={styles.faqQuestion}>
          How is payment taken?
          <span className={styles.faqIcon}>&#9660;</span>
        </div>
        {activeIndex === 2 && (
          <div className={styles.faqAnswer}>
            Payment is taken through credit card or PayPal, depending on your selection.
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
