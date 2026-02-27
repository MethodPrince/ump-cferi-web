import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/newsletter.css';

const Newsletter = () => {
  const newsletterRef = useRef(null);

  // Array of all 12 newsletter pages - USING YOUR ACTUAL FILE NAMES
  const pages = [
    { id: 1, image: '/newsletter/1.jpg', alt: 'UMPCFERI Newsletter Cover - January 2026' },
    { id: 2, image: '/newsletter/2.jpg', alt: 'Table of Contents' },
    { id: 3, image: '/newsletter/3.jpg', alt: 'Executive Summary' },
    { id: 4, image: '/newsletter/4.jpg', alt: 'Message From CFERI Director' },
    { id: 5, image: '/newsletter/5.jpg', alt: 'More Than a Degree - Impact 2024' },
    { id: 6, image: '/newsletter/6.jpg', alt: 'UMPCFERI Impact 2024-2025' },
    { id: 7, image: '/newsletter/7.jpg', alt: 'UMPCFERI Impact 2025 Continued' },
    { id: 8, image: '/newsletter/8.jpg', alt: 'Ehlanzeni Star School Success' },
    { id: 9, image: '/newsletter/9.jpg', alt: 'Egypt & Uzbekistan Victories' },
    { id: 10, image: '/newsletter/10.jpg', alt: 'Next GenSell & Best Pitch Award' },
    { id: 11, image: '/newsletter/11.jpg', alt: 'Captured Moments of Excellence 2025' },
    { id: 12, image: '/newsletter/12.jpg', alt: 'Measurable Strategic Achievements' }
  ];

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPDF = async () => {
    const container = newsletterRef.current;
    if (!container) return;
    setIsDownloading(true);
    try {
      if (typeof window.html2pdf === 'undefined') {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js';
          s.onload = resolve;
          s.onerror = reject;
          document.body.appendChild(s);
        });
      }

      // Ensure all images inside the container are loaded before rendering
      const imgs = Array.from(container.querySelectorAll('img'));
      const originalLoading = new Map();
      imgs.forEach((img) => {
        originalLoading.set(img, img.loading);
        try { img.loading = 'eager'; } catch (e) {}
      });

      await Promise.all(
        imgs.map((img) =>
          new Promise((resolve) => {
            if (img.complete && img.naturalWidth !== 0) return resolve();
            const onFinish = () => {
              img.removeEventListener('load', onFinish);
              img.removeEventListener('error', onFinish);
              resolve();
            };
            img.addEventListener('load', onFinish);
            img.addEventListener('error', onFinish);
            // safety timeout in case load never fires
            setTimeout(onFinish, 8000);
          })
        )
      );

      const opt = {
        margin: 0.5,
        filename: 'UMPCFERI-Newsletter-2026.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, imageTimeout: 20000 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };

      await window.html2pdf().set(opt).from(container).save();

      // restore original loading attributes
      imgs.forEach((img) => {
        const orig = originalLoading.get(img);
        try { img.loading = orig === undefined ? '' : orig; } catch (e) {}
      });
    } catch (err) {
      console.error('PDF generation failed', err);
      alert('Could not generate PDF. Opening print dialog as fallback.');
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="newsletter-page" ref={newsletterRef}>
      {/* Header with download button */}
      <div className="newsletter-header">
        <h1>UMPCFERI NEWSLETTER 2026</h1>
        <button onClick={handleDownloadPDF} className="download-pdf-btn">
          <span>📥</span> Download PDF
        </button>
      </div>

      {/* Newsletter Pages */}
      <div className="newsletter-pages">
        {pages.map((page) => (
          <div key={page.id} className="newsletter-page-container">
            <div className="page-number">Page {page.id}</div>
            <img 
              src={page.image} 
              alt={page.alt}
              className="newsletter-page-image"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML += `<div class="image-missing">⚠️ Image not found: ${page.image}</div>`;
              }}
            />
          </div>
        ))}
      </div>

      {/* Back to Top Button */}
      <button onClick={scrollToTop} className="back-to-top">
        ↑ Back to Top
      </button>
    </div>
  );
};

export default Newsletter;