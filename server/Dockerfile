FROM node:18-slim

# Install necessary dependencies for Puppeteer
RUN apt-get update && apt-get install -y \
 wget \
 ca-certificates \
 fonts-liberation \
 libappindicator3-1 \
 libasound2 \
 libatk-bridge2.0-0 \
 libatk1.0-0 \
 libcups2 \
 libdbus-1-3 \
 libgdk-pixbuf2.0-0 \
 libnspr4 \
 libnss3 \
 libx11-xcb1 \
 libxcomposite1 \
 libxdamage1 \
 libxrandr2 \
 libgbm1 \
 libxshmfence1 \
 xdg-utils \
 --no-install-recommends \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

RUN npm install

RUN npx puppeteer browsers install chrome

EXPOSE 3001

CMD ["node", "server.js"]
