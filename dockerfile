FROM python:3.12.10-slim-bookworm

WORKDIR /app

# Install system dependencies
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g pnpm && \
    pip install poetry

COPY frontend/ .
COPY package.json pnpm-lock.yaml ./

WORKDIR /app/backend


# Copy dependency files from the correct path [[7]][[8]]
COPY backend/ .  


# Install dependencies (use --no-root to skip project installation)
RUN poetry install --with tests,mypy,dev --no-root

EXPOSE 8000

CMD ["poetry", "run", "chainlit", "run", "chainlit/hello.py", "--host", "0.0.0.0"]