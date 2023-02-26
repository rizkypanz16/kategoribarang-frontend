FROM nginx:latest
MAINTAINER rizkypanz

WORKDIR /var/www/

RUN apt update -y
RUN apt install -y nano git
RUN git clone https://github.com/rizkypanz16/stokbarang-frontend.git
RUN cp /var/www/stokbarang-frontend/stokbarang-frontend.conf /etc/nginx/conf.d/stokbarang-frontend.conf
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf-backup
RUN nginx -t

EXPOSE 80
