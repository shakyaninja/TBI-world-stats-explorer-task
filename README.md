Sentiment Map Dashboard

Summary

This project is a technical test that evaluates the ability to create an interactive graphical frontend application for data visualization. The dashboard overlays a heatmap of sentiments (positive, neutral, negative) on a global map, providing an intuitive user journey for data exploration.

Task

Design and implement a dashboard that displays an interactive world map with a color-coded heatmap overlay representing sentiment data. The dashboard should support zoom and pan interactions, country/region outlines and labels, and provide a color legend explaining the sentiment scale.

Functional Requirements

Interactive World Map: Display an interactive world map as the primary interface element.
Zoom and Pan: Support zoom and pan interactions to explore different regions.
Geographic Context: Include country/region outlines and labels for geographic context.
Sentiment Heatmap: Represent sentiment data (positive, neutral, negative) using a color-coded heatmap overlay.
Color Legend: Implement a color legend explaining the sentiment scale (e.g., red for negative, yellow for neutral, green for positive).
Sentiment Visualization: Allow toggling between different types of sentiment visualizations (e.g., overall sentiment, specific sentiment categories).
Region Selection: Provide region/country selection functionality to focus on specific geographic areas.
Hover States: Implement hover states on regions to display summary sentiment statistics.
Click Interactions: Enable click interactions to view detailed sentiment breakdowns for selected regions.
Error Handling: Gracefully communicate any errors in the UI without degrading the service.
Non-Functional Requirements

Performance: Achieve a p95 dashboard latency of 100ms for interactions (zoom, pan), regardless of the zoom level.
Browser Support: Support the latest versions of Chrome, Firefox, Safari, and Edge.
Aesthetics: Ensure the application is aesthetically pleasing, with a theme of the developer's discretion.
Mobile Support: Note that mobile device support and multiple layouts are out of scope for this task.
Technical Details

Frontend framework: [Insert framework used, e.g., React, Angular, Vue]
Map library: [Insert library used, e.g., Leaflet, Google Maps]
Data visualization library: [Insert library used, e.g., D3.js, Chart.js]
State management: [Insert state management approach used, e.g., Redux, MobX]
Installation and Usage

Clone the repository: git clone https://github.com/[username]/sentiment-map-dashboard.git
Install dependencies: npm install or yarn install
Start the application: npm start or yarn start
Open the application in a supported browser: http://localhost:3000
