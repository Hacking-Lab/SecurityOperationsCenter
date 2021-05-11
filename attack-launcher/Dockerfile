FROM hackinglab/alpine-terraform-websocketd:3.2.0

LABEL maintainer=<ivan.buetler@compass-security.com>
MAINTAINER Ivan Buetler <ivan.buetler@compass-security.com>

RUN apk add --update openssl openssh nmap socat && \
rm -rf /var/cache/apk/* 

ADD root /
