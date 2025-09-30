# Base image
FROM node:18

# Tạo thư mục làm việc
WORKDIR /app

# Copy file package.json và cài dependencies
COPY package*.json ./
RUN npm install

# Copy toàn bộ code vào container
COPY . .

# App sẽ chạy trên cổng 3000
EXPOSE 3000

# Lệnh chạy app
CMD ["npm", "start"]
