FROM ubuntu

# Timezone Setup
ENV TZ=Asia/Kolkata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
ENV environment=dev

RUN apt update \
  && apt install -y nodejs npm wget \
  && npm install -g npm@latest \
  && npm cache clean -f \
  && npm install -g n \
  && n 16.13.2

RUN npm i -g sails

WORKDIR /app

COPY ./package.json /package.json
COPY ./package-lock.json /package-lock.json
RUN npm install

ENTRYPOINT sails lift