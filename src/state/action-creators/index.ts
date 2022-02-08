import axios from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";

const searchRepositories = (term: string) => {
	return async (dispatch: any) => {
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES,
		});

		try {
			const { data } = await axios.get("https://registry.npmjs.org/-/v1/search", {
				params: {
					text: term,
				},
			});
		} catch (error: any) {
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_ERROR,
				payload: error.message,
			});
		}
	};
};
