import { useEffect, useMemo, useRef, useState } from "react";
import { canVoteNumber, voted } from "../../script/data";
import style from "./App.module.scss";

function App() {
	const [data, setData] = useState<string[][]>();
	const voteBarRef = useRef<HTMLDivElement>(null);
	const votePercent = useMemo<number | undefined>(() => {
		if (!data) return;
		return (voted(data) / canVoteNumber(data)) * 100;
	}, [data]);
	useEffect(() => {
		voteBarRef.current?.style.setProperty(
			"--vote-percent",
			votePercent + "%"
		);
	}, [votePercent]);
	useEffect(() => {
		fetch("/expc.csv").then((res) =>
			res.text().then((text) =>
				setData(
					text
						.split("\n")
						.slice(1)
						.map((line) => line.split(","))
				)
			)
		);
	}, []);
	if (!data) {
		return <p>Loading data</p>;
	}
	return (
		<div className={style.main}>
			<div ref={voteBarRef} className={style["vote-bar"]}>
				אחוז המצביעים {votePercent?.toPrecision(3)}%
			</div>
		</div>
	);
}

export default App;
