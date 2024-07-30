const getItem = (collection, id) => {
	return collection.find((item) => item.id === id);
};

export { getItem };
