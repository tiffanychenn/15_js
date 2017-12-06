var fibonacci = function(n) {
	if (n == 2) {
		return 1;
	}
	else if (n == 1) {
		return 1;
	}
	else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

var gcd = function(n1, n2) {
	if (n1 == n2) {
		return n1;
	}
	else if (n1 < n2) {
		var divider = n1;
	}
	else {
		var divider = n2;
	}
	while (divider > 1) {
		if (n1 % divider == 0 && n2 % divider == 0) {
			return divider * gcd(n1 / divider, n2 / divider);
		}
		divider = divider - 1;
	}
	return 1;
}