import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace com.testing.unit.controller
 */
export default class Main extends BaseController {
	public sayHello(): void {
		MessageBox.show("Hello World!");
	}

	public getGreeting(): string {
		const model = this.getModel("greeting") as JSONModel;

		return model.getProperty("/greeting") as string;
	}
}
