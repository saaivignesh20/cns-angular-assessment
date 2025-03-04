# Angular Developer Test

This Angular application is designed to fetch data from the provided API, display a list of unique anatomical structures, and retrieve additional information about each structure upon clicking on its name.

## How to Run

Clone the repository first and get inside the directory:

    $ git clone https://github.com/saaivignesh20/cns-angular-assessment && cd cns-angular-assessment

Install dependencies

    $ npm install

Serve the application

    $ ng serve

## Overview of the Solution

This application is built using Angular 19 and utilizes various aspects of the Angular framework to build an application that serves a list of Anatomical structures.

Angular concepts such as modules, services, dependency injection, directives are used in order to complete the task in 2 phases.

## Step-by-Step Solution

### Phase I

#### Fetch Data

Created a service (`api.service.ts`) to fetch data from the provided API using the `HttpClient` module.

#### Unique Anatomical Structures

Processed the fetched data to create a list of unique anatomical structures by name.

#### Display List

Updated the main `app.component.ts` to display the list of unique anatomical structures.

### Phase II

#### Retrieve Additional Details

Utilized the same API service, added additional method to retrieve additional information about each structure upon clicking on its name

#### Display Additional Details

Created a component (`details-dialog.component.ts`) to display the additional details in a MatDialog modal.

#### Handle Invalid IDs

Handled empty/invalid ID errors by displaying a message to the user.

## Architecture

### Services

Used services and dependency injection concepts to handle data fetching and processing outside of the components.

### Components

Created two components to display the list of anatomical structures and the additional information in a MatDialog modal.

### Interfaces and Constants

Defined interfaces (for type-safety) and constants needed for fetching the anatomical structure data and the additional information.

### Modular Functions

Broke down the code into modular functions to improve readability and maintainability.

## Deployment

Deployed the built code to GitHub Pages [![pages-build-deployment](https://github.com/saaivignesh20/cns-angular-assessment/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/saaivignesh20/cns-angular-assessment/actions/workflows/pages/pages-build-deployment)

[Click Here to Access Deployment 👈](https://saaivignesh.in/cns-angular-assessment)

## Libraries Used

- **Angular Material**: Used for the modal component
- **angular-cl-ghpages**: Used for GitHub pages deployment
