FROM hackinglab/alpine-terraform-websocketd:3.2.0

LABEL maintainer=<ivan.buetler@compass-security.com>

RUN apk update && apk upgrade && apk add --update --no-cache bash python3-dev libffi-dev openssl sudo wget openssh sshpass nmap socat git alpine-sdk freerdp-dev freerdp build-base py3-pip && \
    mkdir -p /opt/rbl/ && \
    wget -q -O- https://urlhaus.abuse.ch/downloads/csv_recent/ | grep -v ^# | awk '{FS=","}{print $3}' | awk '{FS="/"}{print $3}' | awk '{match($0,/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/); ip = substr($0,RSTART,RLENGTH); print ip}' | awk 'NF > 0' | sort | uniq -d > /opt/rbl/urlhaus.txt && \
    wget -q -O- https://urlhaus.abuse.ch/downloads/text/ | grep -v ^# > /opt/rbl/downloads.txt && \
    git clone --depth 1 --branch "v9.4" https://github.com/vanhauser-thc/thc-hydra && \
    git clone https://github.com/SecureAuthCorp/impacket.git && \
    rm -rf /var/cache/apk/* 

WORKDIR /thc-hydra/
RUN ./configure && make && make install

WORKDIR /impacket
RUN python3 -m pip install .

WORKDIR /

ADD root /


