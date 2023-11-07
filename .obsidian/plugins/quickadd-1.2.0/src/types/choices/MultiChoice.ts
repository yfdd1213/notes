import { Choice } from "./Choice";
import type IChoice from "./IChoice";
import type IMultiChoice from "./IMultiChoice";

export class MultiChoice extends Choice implements IMultiChoice {
	choices: IChoice[] = [];
	collapsed: boolean;

	constructor(name: string) {
		super(name, "Multi");
	}

	public addChoice(choice: IChoice): MultiChoice {
		this.choices.push(choice);
		return this;
	}

	public addChoices(choices: IChoice[]): MultiChoice {
		this.choices.push(...choices);
		return this;
	}
}
