// Providers:

var REG_NONE = NewRegistrar('none', 'NONE');
var GCLOUD = NewDnsProvider('gcloud', 'GCLOUD');

// var R53 = NewDnsProvider('r53_main', 'ROUTE53');


// Domains:

D('dreamingleo.com', REG_NONE, DnsProvider(GCLOUD),
    A('@', '104.198.139.177'),
    A('www', '104.198.139.177'),
    A('awstest', '34.68.48.209')
);
