interface Dict extends Object {
	[key: string]: any;
}

export class ArrayList<T> {
	private value: T[];
	constructor(...args: T[]) {
		this.value = args;
	}

	static newList = <T>(...args: T[]) => new ArrayList(...args);

	get = (i?: number | undefined) => (i ? this.value[i] : this.value);

	set = (v: T, i: number) => {
		this.value[i] = v;
	};

	size = () => this.value.length;

	add = (item: T) => {
		if (item) this.value.push(item);
	};

	remove = (item: Partial<T>) => {
		const isObject =
			null !== item && typeof item === 'object' && !Array.isArray(item);
		if (isObject) {
			const [[k, v]] = Object.entries(item);
			this.value = this.value.filter((val: Dict) => val[k] !== v);
		} else {
			this.value = this.value.filter((val: T) => val !== item);
		}
	};
}
