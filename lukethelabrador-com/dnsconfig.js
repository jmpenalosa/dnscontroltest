// Providers:

var REG_NONE = NewRegistrar('none', 'NONE');
var GCLOUD = NewDnsProvider('gcloud', 'GCLOUD');

// var REG_NONE = NewRegistrar('none', 'NONE');
// var R53 = NewDnsProvider('r53_main', 'ROUTE53');


// Domains:

D('blindpuppet.com', REG_NONE, DnsProvider(GCLOUD),
    A('@', '79.79.77.77'),
    A('www', '22.22.22.22'),
    A('band', '55.55.55.55')
);


