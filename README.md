# Flask Photo Gallery

A responsive Flask-based website that demonstrates the use of flexbox and CSS grid for layout.

## Features

- Flask web application
- Responsive design for mobile, tablet, and desktop
- Navigation with smooth scrolling
- Photo gallery using CSS Grid
- Features section using Flexbox
- Contact form with server-side processing

## Technologies Used

- Python/Flask
- HTML5/Jinja2 Templates
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript

## Project Structure

```
/
├── app.py                 # Flask application
├── requirements.txt       # Python dependencies
├── static/                # Static assets
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/            # Image files
├── templates/             # HTML templates
│   └── index.html
└── README.md
```

## Setup and Deployment

### Local Development

1. Clone this repository
2. Create a virtual environment (recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
4. Run the Flask application:
   ```
   python app.py
   ```
5. Open your browser and navigate to http://127.0.0.1:5000/

### Deployment to Netlify

For deploying Flask applications to Netlify, you'll need to use a serverless approach or Netlify Functions.
Alternatively, you can deploy to a platform that better supports Python web applications like:

- Heroku
- PythonAnywhere
- Vercel
- AWS Elastic Beanstalk

## GitHub Repository

Make sure to:
1. Initialize a Git repository in this folder
2. Create a new repository on GitHub
3. Push your code to GitHub
4. If private, add instructor (GitHub username: HonzaVrkota) as a collaborator 