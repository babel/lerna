# Lerna

> ⚠️ **WARNING**: This fork is only meant to be used for publishing [Babel](https://github.com/babel/babel)

## Branches

- `master`: This branch should be syncronyzed with Lerna's and should never be edited.
- `lerna-collect-updates`: A branch only containing the `@lerna/collect-updates` package.
  It is automatically generated using this command and it should never be manually edited:
  ```
  git subtree split -P utils/collect-updates -b lerna-collect-updates
  ```
