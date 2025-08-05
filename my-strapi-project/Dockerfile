# 1) Build stage: install all deps & compile the admin UI
FROM node:18-alpine AS builder
WORKDIR /app

# Install all dependencies (including dev)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source & build the admin panel
COPY . .
RUN npm run build

# 2) Release stage: only production deps + built assets
FROM node:18-alpine AS release
WORKDIR /app

# Copy package files & install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production

# Copy everything from the builder into the release image
COPY --from=builder /app . 

# (Optional) prune any remaining dev files
RUN rm -rf src \
           .tmp \
           .cache \
           tests

# Environment settings
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=1337

EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "start"]
