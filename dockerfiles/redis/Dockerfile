FROM redis:8.4.0
LABEL org.opencontainers.image.authors="github@chokoladis"

RUN mkdir /var/lib/redis && mkdir /var/log/redis
RUN chmod 777 /var/log/redis

CMD ["redis-server"]