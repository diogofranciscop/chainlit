FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install system dependencies including Node.js and pnpm
RUN apt-get update && apt-get install -y \
    curl \
    build-essential \
    git \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g pnpm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN pip install poetry

# Copy the entire project to preserve directory structure
COPY . .

# Set working directory to backend for installation
WORKDIR /app/backend

# Install Python dependencies and build frontend
RUN poetry config virtualenvs.create false \
    && poetry install --with tests --with mypy --with dev

# Expose the default Chainlit port
EXPOSE 8000

# Start the Chainlit server
WORKDIR /app
CMD ["chainlit", "run", "chainlit/hello.py"]