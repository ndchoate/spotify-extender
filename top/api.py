import config
from flask import Blueprint

top = Blueprint('top', __name__, template_folder='templates')


@top.route('/top/artists')
def top_artists():
    return config.sp.current_user_top_artists()


@top.route('/top/artists/limit/<limit>', defaults={'time_range': 'medium_term'})
@top.route('/top/artists/limit/<limit>/time-range/<time_range>')
def top_artists_options(limit, time_range):
    return config.sp.current_user_top_artists(limit=limit, time_range=time_range)


@top.route('/top/tracks')
def top_tracks():
    return config.sp.current_user_top_tracks()


@top.route('/top/tracks/limit/<limit>', defaults={'time_range': 'medium_term'})
@top.route('/top/tracks/limit/<limit>/time-range/<time_range>')
def top_tracks_options(limit, time_range):
    return config.sp.current_user_top_artists(limit=limit, time_range=time_range)
