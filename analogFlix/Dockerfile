# ---- build stage ----
FROM rust:1.86-slim-bookworm as builder

WORKDIR /app

RUN apt-get update && apt-get install -y pkg-config libssl-dev && rm -rf /var/lib/apt/lists/*

# 1. Cache dependencies
COPY Cargo.toml Cargo.lock ./
RUN mkdir src && echo "fn main() {}" > src/main.rs
RUN cargo build --release
RUN rm -rf src

# 2. Copy actual source
COPY . .
RUN cargo build --release


# ---- runtime stage ----
FROM debian:bookworm-slim

WORKDIR /app

RUN apt-get update && apt-get install -y openssl ca-certificates && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/target/release/analogFlix /usr/local/bin/app
COPY assets ./assets/

CMD ["app"]
