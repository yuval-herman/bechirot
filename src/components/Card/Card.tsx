import { ReactNode } from "react";
import style from "./Card.module.scss";

export default function Card(props: { title: string; children?: ReactNode }) {
	return (
		<div className={style.main}>
			<h3>{props.title}</h3>
			<div className={style.children}>{props.children}</div>
		</div>
	);
}
