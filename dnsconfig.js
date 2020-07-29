// Providers:

var REG_NONE = NewRegistrar('none', 'NONE');
var GCLOUD = NewDnsProvider('gcloud', 'GCLOUD');

var REG_NONE = NewRegistrar('none', 'NONE');
var R53 = NewDnsProvider('r53_main', 'ROUTE53');


// Domains:

D('dreamingleo.com', REG_NONE, DnsProvider(GCLOUD,2), DnsProvider (R53,2),
    A('@', '104.198.139.177'),
    A('www', '104.198.139.177'),
    A('awstest3', '34.68.48.209')
    A(TestToFail, 35.35.35.35')
);


