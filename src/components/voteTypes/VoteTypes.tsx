import { useMemo } from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { getColumn, HEADERS } from "../../scripts/data";
import { BarData, Data, DataComponentProps } from "../../types";

export default function VoteTypes(props: DataComponentProps) {
	const voteTypes = useMemo((): BarData[] => {
		const votes: BarData[] = [];
		for (let i = 3; i < 7; i++) {
			votes.push({
				name: HEADERS[i],
				uv: getColumn(props.data, i).reduce(
					(p, c) => p + (Number(c) || 0),
					0
				),
			});
		}
		return votes;
	}, [props.data]);
	return (
		<ResponsiveContainer>
			<BarChart data={voteTypes}>
				<Bar dataKey="uv" fill="#8884d8" />
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
			</BarChart>
		</ResponsiveContainer>
	);
}
