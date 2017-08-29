
export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDER = 'REMOVE_FROM_CALENDAR'

export const addRecipe = ({ day, meal, recipe }) =>
	({
		type: ADD_RECIPE,
		meal,
		day,
		recipe
	{)

export const removeFromCalendar = ({ day, meal }) =>
	({
		type: REMOVE_FROM_CALENDAR,
		day,
		meal
	})


