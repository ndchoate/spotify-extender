import config
from flask import Blueprint

recommendations = Blueprint('recommendations', __name__, template_folder='templates')


@recommendations.route('/recommendations')
def recommendations_default():
    # Need at least one seed of one type for this request to work. Example here is Posty
    return config.sp.recommendations(seed_tracks=['246dkjvS1zLTtiykXe5h60'])


# Probably get rid of this in favor of JSON since these params could be very long
# @recommendations.route('/recommendations', default={'limit': 20, 'artists': None, 'tracks': None, 'genres': None})
# @recommendations.route('/recommendations/limit/<limit>', default={'artists': None, 'tracks': None, 'genres': None})
# @recommendations.route('/recommendations/limit/<limit>/artists/<artists>',
#                        default={'tracks': None, 'genres': None})
# @recommendations.route('/recommendations/limit/<limit>/artists/<artists>/tracks/<tracks>',
#                        default={'genres': None})
# @recommendations.route('/recommendations/limit/<limit>/artists/<artists>/tracks/<tracks>/genres/<genres>')
# def recommendations_options(limit, artists, tracks, genres):
#     return config.sp.recommendations(seed_artists=artists,
#                                      seed_genres=genres,
#                                      seed_tracks=tracks,
#                                      limit=limit)
