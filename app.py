from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)
app.secret_key = "your_secret_key"  # Required for flashing messages


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/contact", methods=["POST"])
def contact():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")

        # Here you would typically process the form data (e.g., send an email)
        # For this example, we'll just print the data and redirect
        print(f"Contact form submission: {name} ({email}): {message}")

        # In a real application, you might want to add flash messages
        # flash('Thank you for your message! We will get back to you soon.')

        return redirect(url_for("index"))

    return redirect(url_for("index"))


if __name__ == "__main__":
    app.run(debug=True)
