const utils = {
    sortByType: (array, field, type) => {
       return array.sort((a, b) => {
            return type === 'asc' ? b[field] - a[field] : a[field] - b[field];
        });
    },
    sortByDate: (array, field, type) => {
        return array.sort((a, b) => {
            return type === 'asc' ? new Date(b[field]) - new Date(a[field]) : new Date(a[field]) - new Date(b[field]);
        });
    },
    paginate: (page, array) => {
        page--;

        const data = [];
        for (let index = page * 5; index < page * 5 + 5; index++) {
            if (array[index]) {
                data.push(array[index]);
            }
        }

        return data;
    }
}

module.exports = utils
