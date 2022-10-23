FROM hackinglab/alpine-terraform-websocketd:3.2.0

LABEL maintainer=<ivan.buetler@compass-security.com>


RUN apk update && apk upgrade && apk add --update --no-cache python3-dev libffi-dev openssl wget openssh sshpass nmap socat git alpine-sdk freerdp build-base py3-pip && \
    mkdir -p /opt/rbl/ && \
    wget -q -O- https://urlhaus.abuse.ch/downloads/csv_recent/ | grep -v ^# | awk '{FS=","}{print $3}' | awk '{FS="/"}{print $3}' | awk '{match($0,/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/); ip = substr($0,RSTART,RLENGTH); print ip}' | awk 'NF > 0' | sort | uniq -d > /opt/rbl/urlhaus.txt && \
    wget -q -O- https://urlhaus.abuse.ch/downloads/text/ | grep -v ^# > /opt/rbl/downloads.txt && \
    git clone https://github.com/galkan/crowbar && \
    pip3 install -r /crowbar/requirements.txt && \
    rm -rf /var/cache/apk/* 

WORKDIR /

ADD root /


