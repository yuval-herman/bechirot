import { useMemo } from "react";
import { Pie, PieChart, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getColumn, HEADERS, NAMES } from "../../scripts/data";
import { randomColor } from "../../scripts/helpers";
import { Data, DataComponentProps, PieData } from "../../types";

export default function VoteDistribution(props: DataComponentProps) {
	const voteDistribution = useMemo((): PieData[] => {
		const votes: PieData[] = [];
		for (let i = 7; i < HEADERS.length; i++) {
			votes.push({
				name: NAMES.get(HEADERS[i])!,
				value: getColumn(props.data, i).reduce(
					(p, c) => p + (Number(c) || 0),
					0
				),
				fill: randomColor(),
			});
		}
		return votes;
	}, [props.data]);

	return (
		<ResponsiveContainer>
			<PieChart>
				<Pie
					data={voteDistribution}
					dataKey="value"
					nameKey="name"
					cx="50%"
					cy="50%"
					outerRadius={50}
					legendType="circle"
				/>
				<Legend
					align="right"
					verticalAlign="middle"
					layout="vertical"
					wrapperStyle={{
						padding: "0 2rem",
						height: "80%",
						maxWidth: "30%",
						overflow: "auto",
						direction: "ltr",
					}}
				/>
				<Tooltip />
			</PieChart>
		</ResponsiveContainer>
	);
}
