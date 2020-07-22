FROM python:3.7

RUN mkdir /srv/app
WORKDIR /srv/app
COPY . /srv/app

# install dependencies
RUN pip install -r requirements.txt
RUN apt-get update && \
    apt-get install -y --no-install-recommends texlive-latex-extra texlive-fonts-extra && \
    rm -rf /var/lib/apt/lists/*

ENV FLASK_APP app.py
# ENTRYPOINT ["python"]
# CMD ["app.py"]

CMD ["flask", "run", "--host=0.0.0.0", "--port=5001"]
# CMD gunicorn --bind 0.0.0.0:$PORT wsgi 