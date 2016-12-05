FROM node:6-slim

MAINTAINER Tobias Gurtzick <magic@wizartales.com>

UN groupadd --gid 1000 sinopia \
  && useradd --uid 1000 --gid sinopia --shell /bin/bash --create-home sinopia
WORKDIR /home/sinopia
USER sinopia

RUN npm install sinopia && npm install js-yaml rc

Add config.yaml .
ADD configure.js .
ADD start.sh .

CMD ["./start.sh"]
EXPOSE 4873
VOLUME /home/sinopia
