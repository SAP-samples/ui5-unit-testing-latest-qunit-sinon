import Main from "com/testing/unit/controller/Main.controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import * as sinon from "sinon";

type TestContext = {
	controller: Main;
	stubbedJSONModel: sinon.SinonStubbedInstance<JSONModel>;
};

QUnit.module("Sample Main controller test", {
	beforeEach(this: TestContext) {
		this.stubbedJSONModel = sinon.createStubInstance(JSONModel);
		this.controller = new Main("test");
	},

	afterEach(this: TestContext) {
		sinon.restore();
	},
});

QUnit.test(
	"The Main controller class has a sayHello method",
	function (this: TestContext, assert) {
		const getModelStub = sinon.stub(this.controller, "getModel");
		getModelStub.withArgs("greeting").returns(this.stubbedJSONModel);

		this.stubbedJSONModel.getProperty.returns("Hello from sinon v20!");

		this.controller.getGreeting();

		assert.strictEqual(this.controller.getGreeting(), "Hello from sinon v20!");

		// @ts-expect-error sinon fakeXMLHttpRequest is not removed with sinon v20
		assert.strictEqual(undefined, sinon.fakeXMLHttpRequest);
	},
);
