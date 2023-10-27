const initialStateCustomer = {
	fullName: "",
	nationalId: "",
	createAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
	switch (action.type) {
		case "customer/createCustomer":
			return {
				...state,
				fullName: action.payload.fullName,
				nationalId: action.payload.nationalId,
				createAt: action.payload.createAt,
			};
		case "customer/updateName":
			return {
				...state,
				fullName: action.payload,
			};
		default:
			return state;
	}
}

export function createCustomer(fullName, nationalId) {
	var currentDate = new Date();
	var isoString = currentDate.toISOString();
	return {
		type: "customer/createCustomer",
		payload: { fullName, nationalId, createAt: isoString },
	};
}

export function updateName(fullName) {
	return { type: "customer/updateName", payload: fullName };
}
