FROM python:3.12.10-slim-bookworm

WORKDIR /app

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g pnpm && \
    pip install poetry

WORKDIR /app/backend

COPY backend/ .  

RUN poetry install --with tests,mypy,dev --no-root

EXPOSE 8000

CMD ["poetry", "run", "chainlit", "run", "chainlit/app.py", "--host", "0.0.0.0"]