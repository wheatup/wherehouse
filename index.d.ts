declare namespace wherehouse {
	/**
	 * 直接获取数据
	 *
	 * @argument identifier 数据标识
	 */
	export function getData<T>(identifier: string | number): T;

	/**
	 * 使用数据(Hook模式)
	 *
	 * @argument identifier 数据标识
	 */
	export function useData<T>(identifier: string | number): T;

	/**
	 * 设置数据
	 *
	 * @argument identifier 数据标识
	 * @argument data 数据
	 */
	export function setData<T>(identifier: string | number, data: T): void;

	/**
	 * 增加初始数据至数据库
	 *
	 * @argument identifier 数据标识
	 * @argument data 数据
	 */
	export function addData<T>(identifier: string | number, data: T): void;

	/**
	 * 初始化数据库
	 *
	 * @argument data 初始数据
	 */
	export function init(data: object): void;
}

export = wherehouse;