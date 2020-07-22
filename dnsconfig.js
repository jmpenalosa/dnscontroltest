// Providers:

var REG_NONE = NewRegistrar('none', 'NONE');
var GCLOUD = NewDnsProvider('gcloud', 'GCLOUD');

// Domains:

D('dreamingleo.com', REG_NONE, DnsProvider(GCLOUD),
    A('@', '104.198.139.177'),
    A('www', '104.198.139.177'),
    A('dns2, '34.68.48.209')
);
