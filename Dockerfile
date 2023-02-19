FROM nginx:latest
MAINTAINER rizkypanz

WORKDIR /var/www/

RUN apt update -y
RUN apt install -y nano git
RUN git clone https://github.com/rizkypanz16/kategoribarang_frontend.git
RUN cp /var/www/kategoribarang_frontend/stokbarang-frontend.conf /etc/nginx/conf.d/stokbarang-frontend.conf
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf-backup
RUN nginx -t
RUN service nginx reload

EXPOSE 80
