<img width="1024" alt="image" src="https://github.com/user-attachments/assets/0d94c502-4e99-4ee1-9999-f335f80871d2">

# Lisper - Share Your Secrets Anonymously

Lisper is a web application that allows users to share their secrets anonymously. Inspired by the Whisper app, Lisper fetches random secrets using App Brewery's Secrets API and displays them on the website.

## Features

- Fetches and displays random secrets from the Secrets API (https://secrets-api.appbrewery.com/)
- Reveals the secret and username on hover
- Uses Express.js and EJS for server-side rendering and templating
- Styled with custom CSS for a unique look

## Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/amlansahoo07/lisper-project.git
   ```
2. Navigate to the project directory:
   ```sh
   cd lisper
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the server:
   ```sh
   nodemon index.js
   ```
2. Open your web browser and go to:
   ```
   http://localhost:3000
   ```

## Usage

The application fetches a random secret and displays it on the homepage. The secret is revealed when you hover over the card. The username of the person who submitted the secret is displayed below the card.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- Axios
- CSS

## Acknowledgements

This project is inspired and developed as part of [Angela Yu's Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)'s on Udemy.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
