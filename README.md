!["ABI Logo Short"](https://docs.abinteractive.net/assets/images/abi-small-white.png)

# Documentation

This repository contains the source files for the Alpha Blend Interactive Documentation available under [docs.abinteractive.net](https://docs.abinteractive.net/)

## How to Contribute

### Install python, dependencies and mkdocs

1. Install [CPython](https://python.org)
1. `pip install -U poetry`
1. `cd path/to/docs`
1. `poetry install --no-root`
1. `mkdocs serve`

### Branches

- master is our production branch, means anything in master goes/is in the production site at [docs.abinteractive.net](https://docs.abinteractive.net/)
- develop is our main development branch, merge and base your changes to/from here

### External Contributors

Please contribute using [GitHub Flow](https://guides.github.com/introduction/flow). Create a fork, add commits, and [open a pull request](https://github.com/Alpha-Blend-Interactive/docs/compare).

### ABI employee's / ABI internal contributors

For any changes, make a feature branch.
This means a branch named like `feature/add-cvravatar-feature-docs` with a reasonable short name of the changes you are doing there.
When you are done with your changes, merge them into develop.

### Releases
Release are made by ABI staff.

Additional notes:
For deploying to production merge develop into master, and grab the latest build artifact from teamcity after it has been built.
