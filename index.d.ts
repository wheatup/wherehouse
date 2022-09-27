declare namespace udf-state {
	/**
	 * Get data snapshot from the database.
	 *
	 * @argument identifier Data identifier
	 */
	export function getData<T>(identifier: string | number): T;

	/**
	 * Use data as a hook.
	 *
	 * @argument identifier Data identifier
	 */
	export function useData<T>(identifier: string | number): T;

	/**
	 * Set data to the database.
	 *
	 * @argument identifier Data identifier
	 * @argument data Data
	 */
	export function setData<T>(identifier: string | number, data: T): Promise<T>;

	/**
	 * Add a piece of data to database with a new identifier.
	 *
	 * @argument identifier Data identifier
	 * @argument data Data
	 */
	export function addData<T>(identifier: string | number, data: T): void;

	/**
	 * Initialize the database with an object.
	 *
	 * @argument data Initial data mapping.
	 */
	export function init(data: object): void;
}

export = udf-state;