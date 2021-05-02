$cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2("C:\temp\ca.crt")
$rootStore = Get-Item cert:\LocalMachine\Root
$rootStore.Open("ReadWrite")
$rootStore.Add($cert)
$rootStore.Close()


Import-Certificate -FilePath "ca.crt" -CertStoreLocation Cert:\LocalMachine\Root
echo "added wildcard certificate for winattacklab.local"
