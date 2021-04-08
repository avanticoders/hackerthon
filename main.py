from flask import Flask, render_template, url_for

app = Flask(__name__)

# This all we need since we are only using on page
@app.route('/login')
def login():
    pass

@app.route('/')
def home():
    return render_template("index.html")

def sign_in():
    pass

if __name__ == '__main__':
    app.run(debug=True)