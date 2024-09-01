# ABI Documentation

Internal copy of our public docs.

## How to test

1. Install [CPython](https://python.org)
1. `pip install -U poetry`
1. `cd path/to/docs`
1. `poetry install --no-root`
1. `poetry shell`
1. `mkdocs serve`

## Contributing
- master is our production branch, means anything in master goes into the production site
- develop is our main development branch, merge your changes to here

For any changes, make a feature branch.
This means a branch named like `feature/add-cvravatar-feature-docs` with a reaonable short name of the changes you are doing there.
When you are done with your changes, merge them into develop.

### Releases
Making a release should be done by either a Development Head or DevOps Engineer.

For deploying to production merge develop into master, and grab the latest build artifact from teamcity after it has been built.
