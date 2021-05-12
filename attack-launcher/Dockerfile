FROM hackinglab/alpine-terraform-websocketd:3.2.0

LABEL maintainer=<ivan.buetler@compass-security.com>


RUN apk add --update openssl openssh nmap socat git alpine-sdk && \
    mkdir -p /opt/ncrack && \
    cd /opt/ncrack && \
    git clone https://github.com/nmap/ncrack.git && \
    cd /opt/ncrack/ncrack && \
    ./configure && \
    make && \
    make install && \
    rm -rf /opt/nacrack && \
    apk del git alpine-sdk && \
    rm -rf /var/cache/apk/* 

ADD root /