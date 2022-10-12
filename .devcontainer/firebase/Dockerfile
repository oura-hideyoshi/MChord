FROM node:12.22.1-buster-slim

WORKDIR /workspace

# Install Firebase CLI
RUN npm config set registry http://registry.npmjs.org && \
  npm install --production -g firebase-tools --verbose