FROM squidfunk/mkdocs-material:latest

COPY . .

RUN apk update
RUN apk add gcc && apk add libc-dev && apk add g++ 

# Install the plugins
RUN pip install -U poetry
RUN poetry install --no-root

