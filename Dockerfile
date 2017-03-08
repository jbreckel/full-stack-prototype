from node:alpine

MAINTAINER Julius Breckel <julius.breckel@gmail.com>

WORKDIR /opt/app

RUN mkdir -p /opt

# Copy the code
ADD .build/node_modules /opt/app/node_modules
ADD .build/server.js /opt/app/server.js

CMD ["node", "server"]
