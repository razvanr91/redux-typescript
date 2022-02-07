import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
	const { searchRepositories } = useActions();
	const [term, setTerm] = useState("");
	const { data, error, loading } = useTypedSelector((state) => state.repositories);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTerm(e.target.value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		searchRepositories(term);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={term} onChange={onChange} />
				<button>Search</button>
			</form>
			{error && <h3>{error}</h3>}
			{loading && <h3>Loading...</h3>}
			{data &&
				data.map((name) => {
					return <h4 key={name}>{name}</h4>;
				})}
		</div>
	);
};

export default RepositoriesList;
