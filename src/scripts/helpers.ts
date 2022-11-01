export function randomColor(): string {
	const rnd = () => Math.floor(Math.random() * 16).toString(16);
	return "#" + rnd() + rnd() + rnd() + rnd() + rnd() + rnd();
}
