# CS624 Full-Stack Development - Mobile App
# Term: Winter 2026
# Author: David Hiltzman
# Assignment: PE01 - Hello World

## Overview
This React Native mobile application displays personalized information including the developer's name, degree program, and school. The app demonstrates fundamental React Native components and styling while following the input-process-output (IPO) model used in systems analysis and software engineering.

## Input
This application does not require user input. The input consists of hardcoded data values defined within the application's source code:
- Developer's name (string)
- Degree program (string)
- School name (string)

These static values are embedded directly into the component structure and serve as the data source for the application.

## Process
The React Native framework processes the input data by:
1. Initializing the application component structure using one View component
2. Organizing three Text components to display each piece of information
3. Applying StyleSheet styling to set the yellow background color
4. Rendering the component hierarchy to create the mobile app interface

The processing occurs automatically when the app launches, with React Native's rendering engine converting the component declarations into native mobile UI elements.

## Output
The application displays three lines of text on a yellow background:
- Line 1: Developer's name
- Line 2: Degree program
- Line 3: School name

The visual output is rendered to the mobile device screen using React Native's native rendering capabilities, creating a simple but functional mobile application interface.

## Technology Stack
- **Framework:** React Native
- **Development Environment:** GitHub Codespaces
- **Runtime:** Expo
- **Components Used:** View (1), Text (3), StyleSheet (1)

## References
1. React Native Documentation - https://reactnative.dev/
2. Expo Documentation - https://docs.expo.dev/
3. GitHub Codespaces - https://docs.github.com/en/codespaces