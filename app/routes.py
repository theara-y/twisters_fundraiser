from app import app
from flask import render_template, request

@app.route('/')
@app.route('/home')
def home():
    from os import listdir
    carousel_images = listdir('app/static/images/home_carousel')
    return render_template('home.html', carousel_images=carousel_images)

@app.route('/meet_the_coaches')
def meet_the_coaches():
    return render_template('meet_the_coaches.html')

@app.route('/fundraising')
def fundraising():
    return render_template('fundraising.html')

@app.route('/sponsors')
def sponsors():
    views = ['twisters', 'go_pro_sports_dome', 'state_farm','pro_fresh_cleaning', 'eichs_sports']
    view = request.args.get('view')
    if view == None or view not in views:
        view = 'twisters'
    return render_template('sponsors.html', view=view)