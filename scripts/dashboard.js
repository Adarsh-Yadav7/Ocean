// JavaScript for dashboard.html

document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    initCharts();
    
    // Filter functionality
    const applyFiltersBtn = document.getElementById('apply-filters');
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            const dataType = document.getElementById('data-type').value;
            const timeRange = document.getElementById('time-range').value;
            
            // Simulate filtering (in a real app, this would fetch new data)
            simulateFiltering(dataType, timeRange);
        });
    }
});

function initCharts() {
    // Biodiversity Chart
    const biodiversityCtx = document.getElementById('biodiversity-chart').getContext('2d');
    new Chart(biodiversityCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Species Richness',
                data: [65, 59, 80, 81, 56, 72],
                borderColor: '#03a9f4',
                tension: 0.1,
                fill: false
            }, {
                label: 'Species Abundance',
                data: [28, 48, 40, 65, 45, 60],
                borderColor: '#4caf50',
                tension: 0.1,
                fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Biodiversity Trends'
                }
            }
        }
    });
    
    // Ocean Parameters Chart
    const oceanCtx = document.getElementById('ocean-chart').getContext('2d');
    new Chart(oceanCtx, {
        type: 'bar',
        data: {
            labels: ['Temperature', 'Salinity', 'pH', 'Oxygen', 'Chlorophyll'],
            datasets: [{
                label: 'Current Values',
                data: [28.5, 35.2, 8.1, 6.8, 2.3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Ocean Parameters'
                }
            }
        }
    });
}

function simulateFiltering(dataType, timeRange) {
    // Show loading state
    const applyBtn = document.getElementById('apply-filters');
    const originalText = applyBtn.textContent;
    applyBtn.textContent = 'Applying...';
    applyBtn.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Update charts with "new" data based on filters
        alert(`Filters applied: Data Type = ${dataType}, Time Range = ${timeRange}`);
        
        // Restore button state
        applyBtn.textContent = originalText;
        applyBtn.disabled = false;
    }, 1000);
}