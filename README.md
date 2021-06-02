# SecurityOperationsCenter

This public repository was created and used during the bachelor thesis Security Operation Center Lab in FS2021, to use additional tools and docker services or configure the open source SOC in question (Wazuh):

- attack-launcher
  - The attack-launcher service:
    - Allows the SOC lab users to launch different attacks or malicious activity
- mailcatcher
  - The mailcatcher service:
    - Used in the lab, where SOC lab users configure Wazuh to send emails on a specific alert level
    - Catches mockup mails
- soc
  - Contains a configured docker-compose.yml for the SOC
  - Overwrites the official one pulled from Wazuh v4.1.5 during Terraform deployment
- traefik
  - The traefik service:
    - Used to extend docker services more easily
    - Configured to be used with FQDN created/set during deployment in DC