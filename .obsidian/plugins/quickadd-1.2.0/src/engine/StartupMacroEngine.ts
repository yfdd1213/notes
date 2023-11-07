import type { App } from "obsidian";
import type { IMacro } from "../types/macros/IMacro";
import { MacroChoiceEngine } from "./MacroChoiceEngine";
import type QuickAdd from "../main";
import type { IChoiceExecutor } from "../IChoiceExecutor";

export class StartupMacroEngine extends MacroChoiceEngine {
	constructor(
		app: App,
		plugin: QuickAdd,
		macros: IMacro[],
		choiceExecutor: IChoiceExecutor
	) {
		//@ts-ignore
		super(app, plugin, null, macros, choiceExecutor, null);
	}

	// eslint-disable-next-line @typescript-eslint/require-await
	async run(): Promise<void> {
		this.macros.forEach((macro) => {
			if (macro.runOnStartup) {
				void this.executeCommands(macro.commands);
			}
		});
	}
}
