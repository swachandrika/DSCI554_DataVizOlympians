[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/zCmYDy35)
# DSCI 554 Group Project

## PROJECT INFORMATION

- Project title:
- Group name: Data Viz Olympians
- Team names:
  1. Anushka Vaidya alvaidya@usc.edu
  2. Apoorva Asgekar aasgekar@usc.edu
  3. Ishita Shah ishitasa@usc.edu
  4. Swachandrika Rudra swachand@usc.edu

## ARTIFACTS

- [Demonstration URL](<demo-url>)
- [Presentation URL](<presentataion-url>)
- [Paper PDF](<https://www.overleaf.com/read/mqpvpmvwnpjn#4f0c10>) 
- [YouTube video Link](<youtube-video-url>)

## Team Contributions

### Demonstration
- **Anushka Vaidya**: Led the development of heart rate monitoring and heat map visualization. Integrated real-time data sources and GenAI for predictive analytics.
- **Apoorva Asgekar**: Developed interactive dashboards and statistical analysis features. Worked on integrating event data for comparative performance tracking.
- **Ishita Shah**: Designed city-level navigation and tourist recommendation features. Developed the stadium-level routing system.
- **Swachandrika Rudra**: Worked on the backend architecture and data processing pipeline for real-time sensor data. Optimized the user interface for smooth interaction.

### Presentation
- **Anushka Vaidya**: Presented the overview of the project and the heart rate visualization system. Explained the GenAI integration and its impact on real-time analytics.
- **Apoorva Asgekar**: Presented the event statistics and dashboard components, emphasizing their use for real-time performance tracking.
- **Ishita Shah**: Focused on the user experience for navigation systems, both at the city level and within the stadium.
- **Swachandrika Rudra**: Discussed the backend technologies used for data processing and visualization rendering.

### Paper
- **Anushka Vaidya**: Wrote the introduction and design methodology sections, emphasizing the use of GenAI and visualization techniques.
- **Apoorva Asgekar**: Focused on the event statistics, data pre-processing, and design decisions for the dashboards.
- **Ishita Shah**: Contributed to writing about the stadium-level routing system and the integration of city navigation features.
- **Swachandrika Rudra**: Authored the implementation challenges and solutions, and provided input on backend architecture.

### YouTube Video
- **Anushka Vaidya**: Coordinated the video shoot, presenting the heart rate monitoring and heat map features.
- **Apoorva Asgekar**: Demonstrated the event dashboard and performance tracking features in the video.
- **Ishita Shah**: Showcased the city-level navigation and tourism recommendation system in the video.
- **Swachandrika Rudra**: Assisted with video editing and highlighted the backend system in the final demonstration.


# **LA 2028 Olympics Games Dashboard**

This project provides an interactive visualization dashboard for the Olympic Games, showcasing crowd density, athlete statistics, and medal tracking through a combination of React, D3.js, and standalone HTML visualizations.

## **How to Run the Project**

### **Prerequisites**

Ensure you have the following installed:

- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
- **npm** or **yarn**: Node package manager or Yarn package manager.

### **Steps**

1. Clone the repository:

   ```bash
   git clone https://github.com/DSCI-554/project-datavizolympians.git


2. Install Dependencies

    ```bash
    npm install

3. Start the Development Server

    ```bash
    npm start

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the dashboard.


## **Crowd Heart Rate Map Visualization**

We have implemented a **crowd and heart rate heat map visualization** of the Olympic stadium. This visualization includes:

- **Heat map** depicting crowd density in each section of the stadium.
- On hovering over each section, you can view the **average heart rate** of attendees in that section.

### Preview

![Crowd and Heart Rate Heat Map](crowd_heart_rate_map_image.jpg)


## **Athlete Statistics Visualizations**

We have developed visualizations to showcase athlete statistics for attendees, using the following files:

1. **`country.html`**: Displays country-wise statistics.
2. **`gender.html`**: Explores gender-based distributions.
3. **`medal.html`**: Focuses on medal-related insights.

### **Athlete Statistics Carousel**

The **`athlete_stat.html`** file combines these visualizations into a carousel for seamless navigation and presentation.

#### To Run the Carousel:

1. Download the following files:
   - `athlete_stat.html`
   - `country.html`
   - `gender.html`
   - `medal.html`
2. Place all these files in the same directory.
3. Open `athlete_stat.html` in your browser to view the carousel.

## **Maps Routing for LA to Olympic Stadiums**

We have implemented an additional feature for **maps routing**, showcasing routes from various places in Los Angeles to the stadiums where the Olympics are happening. This functionality is fully implemented.

### Preview

![Athlete Statistics Carousel - Medal Statistics](athlete_statistics_carousel_image1.jpg)
![Athlete Statistics Carousel - Country Statistics](athlete_statistics_carousel_image2.jpg)
![Athlete Statistics Carousel - Gender Statistics](athlete_statistics_carousel_image3.jpg)

## **Research and Presentation**

We have attached our [research paper](https://www.overleaf.com/read/mqpvpmvwnpjn#4f0c10) and **presentation** in the repository. These documents discuss the motivations behind each visualization element and provide detailed insights into their design and purpose.

## **Current Challenges and Next Steps**

### Current Challenges:
- Integrating the different elements of the project (e.g., heat maps, athlete statistics, external map routing) into a cohesive final web page.
- Ensuring a consistent and interactive user experience.

### Next Steps:
1. Work on resolving the integration challenges as discussed above.
2. Fine-tune all elements in the presentation and paper based on feedback.
3. Enhance the overall visual and functional aspects of the dashboard.
4. The conclusion of the paper will be added once the entire implementation process is completed.

## **Generative AI Resources**

We utilized Generative AI resources to aid in various aspects of the project. For more details, visit:
[Generative AI Resources](https://drive.google.com/drive/folders/1-DTx7jNnMfjKjmm4SeGTOT5iS6HJx4Gf?usp=sharing)

