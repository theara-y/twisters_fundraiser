from app import app
from flask import render_template, request
from app.classes import Coach

@app.route('/')
@app.route('/home')
def home():
    from os import listdir
    carousel_images = listdir('app/static/images/home_carousel')
    return render_template('home.html', carousel_images=carousel_images)

@app.route('/meet_the_coaches')
def meet_the_coaches():
    temp = 'user.png'
    coaches = [
        Coach(
            name = 'Jackie Lopez',
            img = 'jackie.png',
            org = 'Twisters'
        ),
        Coach(
            name = 'Troy McCormick',
            img = temp,
            org = 'Twisters'
        ),
        Coach(
            name = 'Joel Lopez',
            img = temp,
            org = 'Twisters'
        ),
        Coach (
            name = 'Paige',
            img = temp,
            org = 'Go Pro Sports Dome',
            role = 'Batting Coach',
        ),
        Coach (
            name = 'Marti',
            img = 'marti.png',
            org = 'Go Pro Sports Dome',
            role = 'Pitching Coach',
            desc = """I have been an instructor for <b>3 years</b>, giving
            one-on-one and team instruction. I have been coaching
            travel ball for 5 years and have coached at various
            levels of competition. I am going on my fourth year of
            coaching at JCA as an assistant coach for Junior Varsity
            and working with their pitching staff."""
        )
    ]
    return render_template('meet_the_coaches.html', coaches=coaches)

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