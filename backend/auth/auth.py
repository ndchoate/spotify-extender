import config
from flask import request
import spotipy
from spotipy import oauth2

CLIENT_ID = 'ee48697f0eed4ac4ade4897d4391f548'
CLIENT_SECRET = '2262bfb662b343a3a69d6727c6636a8f'
REDIRECT_URI = 'http://localhost:5000/'
SCOPE = '''
    user-top-read user-read-recently-played user-library-modify user-library-read 
    playlist-modify-public playlist-read-collaborative playlist-read-private playlist-modify-private
'''

# sp = None
spotify_oauth = oauth2.SpotifyOAuth(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, 'STATE', SCOPE)


def authorize():
    global CLIENT_ID, CLIENT_ID, REDIRECT_URI, SCOPE
    access_token = ""

    token_info = spotify_oauth.get_cached_token()

    if token_info:
        print("Found cached token!")
        access_token = token_info['access_token']
    else:
        # First, check if code is saved in URL (meaning that that the user authorized)
        code = request.args.get('code', type=str)
        if code:
            print("Found Spotify auth code in current URL! Trying to get valid access token...")
            token_info = spotify_oauth.get_access_token(code)
            access_token = token_info['access_token']
        # else:
        #     url = 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID + '&response_type=code&redirect_uri=' + REDIRECT_URI
        #     response = requests.get(url).content
        #     code = spotify_oauth.parse_response_code(url)
        #     return response

    if access_token:
        print("Access token available! Trying to get user information...")
        spotify = spotipy.Spotify(access_token)
        config.sp = spotify
        return spotify
    else:
        return html_for_login_button()


def html_for_login_button():
    auth_url = get_sp_oauth_uri()
    html_login_button = "<a href='" + auth_url + "'>Login to Spotify</a>"
    return html_login_button


def get_sp_oauth_uri():
    auth_url = spotify_oauth.get_authorize_url()
    return auth_url
