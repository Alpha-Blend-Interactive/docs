FROM python AS build

WORKDIR /docs

RUN apt update && apt install -y libgl1-mesa-dev

COPY poetry.lock pyproject.toml /docs/

# Install the plugins
RUN pip install -U poetry
RUN poetry install --no-root

COPY . .

RUN poetry run mkdocs build

FROM scratch AS export
COPY --from=build /docs/site .

FROM nginx:1-alpine AS nginx-webserver

COPY --from=build /docs/site /usr/share/nginx/html