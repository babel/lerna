# Lerna

> ⚠️ **WARNING**: This fork is only meant to be used for publishing [Babel](https://github.com/babel/babel)

## Branches

- [`readme`](https://github.com/nicolo-ribaudo/lerna/tree/readme): This is the default branch of this repository,
  and it contains this guide.
- [`master`](https://github.com/nicolo-ribaudo/lerna/tree/master): This branch should be syncronyzed with Lerna's and should never be edited.
- [`lerna-collect-updates`](https://github.com/nicolo-ribaudo/lerna/tree/lerna-collect-updates): A branch only containing the `@lerna/collect-updates` package.
  It is automatically generated and it should never be manually edited.
- [`babel-collect-updates`](https://github.com/nicolo-ribaudo/lerna/tree/babel-collect-updates): This branch is the modified
  version of the `@lerna/collect-updates` package. It isn't published to npm and it is meant to be installed directly from
  GitHub.
  You can see our custom changes at [`lerna-collect-updates...babel-collect-updates`](https://github.com/nicolo-ribaudo/lerna/compare/lerna-collect-updates...babel-collect-updates)

## How to update lerna

1. If you just cloned this repo, first set it up:
   ```
   git remote add upstrean git@github.com:lerna/lerna.git
   git fetch upstream master
   ```

1. Synchronyze the `master` branch:
   ```
   git checkout master && git pull upstream master
   ```

1. Checkout the last version (replace `v3.6.0`):
   ```
   git checkout v3.6.0
   ```

1. Regenerate the `lerna-collect-updates` branch:
   ```
   git subtree split -P utils/collect-updates -b lerna-collect-updates
   ```

1. Rebase the `babel-collect-updates` branch:
   ```
   git checkout babel-collect-updates && git rebase lerna-collect-updates
   ```

1. Force-push everything
   ```
   git checkout master && git push && git push --tags
   git checkout lerna-collect-updates && git push -f
   git checkout babel-collect-updates && git push -f
   ```
