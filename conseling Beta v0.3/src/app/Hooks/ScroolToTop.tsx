// components/ScrollToTop.tsx
import { useEffect, useState } from 'react';


const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk mengatur visibilitas tombol berdasarkan scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            zIndex: 1000,
          }}
        >
        <img src="/arrowup.png" alt="Scroll to top" style={{width: 15, height: 15}}/>

        </button>
      )}
    </>
  );
};

export default ScrollToTop;
