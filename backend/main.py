from auth.auth import authorize, html_for_login_button, url_for_login_button
import config
from flask import Flask
from recommendations.api import recommendations
from top.api import top
from playlists.api import playlists

app = Flask(__name__)
app.register_blueprint(top)
app.register_blueprint(recommendations)
app.register_blueprint(playlists)

config.init()


@app.route('/')
def index():
    authorize()
    if config.sp is None:
        # return html_for_login_button()
        return url_for_login_button()
    else:
        return 'Authorized!'


def main():
    app.run(debug=True)


if __name__ == '__main__':
    main()
