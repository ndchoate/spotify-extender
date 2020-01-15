import config
from flask import Blueprint
from urllib.parse import unquote

playlists = Blueprint('playlists', __name__, template_folder='templates')


# Create a function called "chunks" with two arguments, l and n:
def chunks(l, n):
    # For item i in a range that is a length of l,
    for i in range(0, len(l), n):
        # Create an index range for l of n items:
        yield l[i:i+n]


@playlists.route('/playlists')
def get_playlists():
    return config.sp.current_user_playlists()


@playlists.route('/playlists/combine/<playlist_ids>/name/<name>')
def combine_playlists(playlist_ids, name):
    user_id = config.sp.current_user()['id']
    name = unquote(name)

    # For now, playlist ids are coming in as a comma separated list
    playlist_ids = playlist_ids.split(',')
    tracks = set()
    for id in playlist_ids:
        playlist_details = config.sp.user_playlist_tracks(user_id, id)
        for item in playlist_details['items']:
            tracks.add(item['track']['id'])

    playlist = config.sp.user_playlist_create(user_id, name)

    playlist_id = playlist['id']
    chunked_tracks = list(chunks(list(tracks), 100))  # spotify only allows adding 100 tracks at a time

    for chunk in chunked_tracks:
        config.sp.user_playlist_add_tracks(user_id, playlist_id, chunk)

    return "Combined Playlists!"
