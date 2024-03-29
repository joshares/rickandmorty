# RICKY AND MORTY WEB APP

This web application provides a comprehensive display of characters from the popular show "Rick and Morty." It is designed with a responsive layout for mobile, tablet, and laptop views. The key features and functionalities are outlined below:

## TABLE OF CONTENT

Overview
Features
Responsive Design
Status Representation
Character Details
Search Functionality
fetching functionality

## OVERVIEW

The Ricky and Morty Web App showcases characters from the animated series, offering detailed information about each character. Users can navigate through the characters, view additional details, and search for specific characters by name.

## FEATURES

Display of all characters from the Ricky and Morty series.
Responsive design for mobile, tablet, and laptop views.
Different background colors represent the status of each character.
Access to additional details through the three dots menu for laptops.
Clickable details for mobile users.
Search functionality by character name.

## RESPONSIVE DESIGN

The application is designed to be accessible on various devices, providing an optimal user experience for mobile, tablet, and laptop users. The layout adapts seamlessly to different screen sizes, ensuring a consistent and visually appealing display.

## STATUS REPRESENTATION

The status of each character is visually represented through distinct background colors:

Alive: Green background color.
Dead: Red background color.
Unknown: Gray background color.
This feature enhances the user experience by quickly conveying the status of each character.

## CHARACTER DETAILS

Users can access detailed information about each character by clicking on the three dots menu for laptop users or directly on the details for mobile users. This allows users to explore additional information and gain a deeper understanding of the characters.

## SEARCH FUNCTIONALITY

The application provides a search feature that enables users to find specific characters by typing their names. This functionality enhances usability, allowing users to quickly locate their favorite characters.

## FETCHING FUNCTIONALITY

I used React query to fetch and handle paginations, I also used debounce to help delay the search request, to avoid too many fetch request.
I used skeleton loader, to show when data are fetching from server
