document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
  
    function showContent(contentId) {
      tabContents.forEach((tabContent) => {
        if (tabContent.id === contentId) {
          tabContent.style.display = 'block';
        } else {
          tabContent.style.display = 'none';
        }
      });
    }
  
    navItems.forEach((navItem) => {
      navItem.addEventListener('click', () => {
        const contentId = navItem.getAttribute('data-content');
        showContent(contentId);
      });
    });
  
    // Show initial content
    showContent('home');
  });
  