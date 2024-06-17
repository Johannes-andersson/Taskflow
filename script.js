// Get the navigation links and sidebar links
const navLinks = document.querySelectorAll('nav .nav-links a');
const sidebarLinks = document.querySelectorAll('.sidebar-links a');

// Add click event listeners to the navigation links
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Close the sidebar if it's open on smaller screens
    if (window.innerWidth <= 768) {
      document.querySelector('.left-sidebar').style.display = 'none';
    }
  });
});

// Add click event listener to the sidebar links
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Close the sidebar if it's open on smaller screens
    if (window.innerWidth <= 768) {
      document.querySelector('.left-sidebar').style.display = 'none';
    }
  });
});

// Toggle the sidebar visibility on smaller screens
const toggleSidebar = () => {
  const sidebar = document.querySelector('.left-sidebar');
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
  } else {
    sidebar.style.display = 'none';
  }
};

// Add an event listener to the logo to toggle the sidebar on smaller screens
document.querySelector('.logo').addEventListener('click', toggleSidebar);

// Check the screen size and adjust the sidebar visibility on page load
window.addEventListener('load', () => {
  if (window.innerWidth <= 768) {
    document.querySelector('.left-sidebar').style.display = 'none';
  }
});