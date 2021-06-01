FROM hackinglab/alpine-terraform-websocketd:3.2.0

LABEL maintainer=<ivan.buetler@compass-security.com>


RUN apk add --update --no-cache openssl wget openssh sshpass nmap socat git alpine-sdk && \
    mkdir -p /opt/rbl/ && \
    wget -q -O- https://urlhaus.abuse.ch/downloads/csv_recent/ | grep -v ^# | awk '{FS=","}{print $3}'$
    wget -q -O- https://urlhaus.abuse.ch/downloads/text/ | grep -v ^# > /opt/rbl/downloads.txt && \
    mkdir -p /opt/ncrack && \
    cd /opt/ncrack && \
    git clone https://github.com/nmap/ncrack.git && \
    cd /opt/ncrack/ncrack && \
    ./configure && \
    make && \
    make install && \
    rm -rf /opt/ncrack && \
    apk del git alpine-sdk && \
    rm -rf /var/cache/apk/* 

ADD root /
