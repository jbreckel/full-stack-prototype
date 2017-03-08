#!/bin/bash

set -e # Abort script at first error
# set -u # Disallow unset variables
set -v
set -x

# Only run when not part of a pull request and on the master branch
if [[ $TRAVIS_PULL_REQUEST != "false" ]] || [[ $TRAVIS_BRANCH != "master" ]]
then
    echo "Skipping deployment on branch=$TRAVIS_BRANCH, PR=$TRAVIS_PULL_REQUEST"
    exit 0;
fi

echo "Now would be a good time to deploy"

IMAGE_VERSION=${TRAVIS_BUILD_NUMBER:-dev}

IMAGE_NAME="soshace-test-task:$IMAGE_VERSION"

cwd=`pwd`
BUILD_FOLDER=.build/

cp -RL \
package.json \
yarn.lock \
$BUILD_FOLDER

# enter BUILD_FOLDER
cd $BUILD_FOLDER

# install production dependencies
yarn install --prod --pure-lockfile --no-progress

cd $cwd

docker build . -t $IMAGE_NAME

set +x
docker login -u="$DOCKER_USERNAME" -p="$HEROKU_API_KEY" registry.heroku.com
set -x

docker tag $IMAGE_NAME registry.heroku.com/jbreckel-soshace-test-task/web
docker push registry.heroku.com/jbreckel-soshace-test-task/web

echo "All finished"
