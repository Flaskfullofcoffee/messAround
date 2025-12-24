// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Boilerplate loaded successfully!');
    
    // Get DOM elements
    const demoButton = document.getElementById('demo-button');
    const demoOutput = document.getElementById('demo-output');
    const navLinks = document.querySelectorAll('.nav-link');
    const currentYearElement = document.getElementById('current-year');
    
    // Set current year in footer
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Demo button click event
    if (demoButton && demoOutput) {
        demoButton.addEventListener('click', function() {
            // Generate random color
            const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            
            // Update output
            demoOutput.innerHTML = `
                <h3>Button Clicked!</h3>
                <p>Timestamp: ${new Date().toLocaleTimeString()}</p>
                <p>Random color generated: <strong>${randomColor}</strong></p>
                <div style="width: 100px; height: 50px; background-color: ${randomColor}; margin: 10px 0; border-radius: 4px;"></div>
            `;
            
            // Change button color temporarily
            const originalColor = demoButton.style.backgroundColor;
            demoButton.style.backgroundColor = randomColor;
            demoButton.textContent = 'Clicked!';
            
            // Reset button after 1 second
            setTimeout(() => {
                demoButton.style.backgroundColor = originalColor;
                demoButton.textContent = 'Click Me!';
            }, 1000);
        });
    }
    
    // Navigation link click events
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show which link was clicked
            if (demoOutput) {
                demoOutput.innerHTML = `<p>You clicked on: <strong>${this.textContent}</strong></p>`;
            }
            
            console.log(`Navigation clicked: ${this.textContent}`);
        });
    });
    
    // Feature card hover effects with JavaScript (alternative to CSS)
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Add keyboard shortcuts if needed
        if (e.key === 'Escape' && demoOutput) {
            demoOutput.innerHTML = '<p>Output cleared with Escape key</p>';
        }
    });
    
    // Initialize any other functionality here
    console.log('JavaScript initialization complete.');
});

// Utility functions (can be used throughout the project)
const utils = {
    formatDate: function(date) {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },
    
    toggleElement: function(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.display = element.style.display === 'none' ? 'block' : 'none';
        }
    }
};