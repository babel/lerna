# Lerna

> ⚠️ **WARNING**: This fork is only meant to be used for publishing [Babel](https://github.com/babel/babel)

## Branches

- `master`: This branch should be syncronyzed with Lerna's and should never be edited.
  It isn't meant to mirror the actual master (since it contains unreleased changes), but it
  should mirror a Lerna release.
- `patch`: You should only edit this branch. It contains some utilities to patch the
  `@lerna/collect-updates` package and publish it.
