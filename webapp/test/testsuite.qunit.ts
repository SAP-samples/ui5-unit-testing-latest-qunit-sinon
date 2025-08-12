export default {
	name: "QUnit test suite for the UI5 Application: com.testing.unit",
	defaults: {
		page: "ui5://test-resources/com/testing/unit/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: "2.24.1",
			versions: {
				"2.24.1": {
					module: "qunit",
					css: "qunit/qunit/qunit.css",
				},
			},
		},
		sinon: {
			version: "21.0.0",
			versions: {
				"21.0.0": {
					module: "sinon",
					bridge: "sap/ui/qunit/sinon-qunit-bridge",
				},
			},
		},
		ui5: {
			language: "EN",
			theme: "sap_horizon",
		},
		coverage: {
			only: "com/testing/unit/",
			never: "test-resources/com/testing/unit/",
		},
		loader: {
			paths: {
				"com/testing/unit": "../",
			},
			map: {
				"*": {
					qunit: null,
					sinon: null,
				},
			},
		},
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for com.testing.unit",
		},
		"integration/opaTests": {
			title: "Integration tests for com.testing.unit",
		},
	},
};
