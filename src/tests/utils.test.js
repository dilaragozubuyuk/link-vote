import utils from "../shared/utils.service";

test('it has to be sorted by type', () => {
    const array = [
        {
            vote: 5
        },
        {
            vote: 7
        },
        {
            vote: 2
        },
    ]
    expect(utils.sortByType(array, 'vote', 'asc')).toEqual([
        {
            vote: 7
        },
        {
            vote: 5
        },
        {
            vote: 2
        },
    ]);
});

test('return data page by page', () => {
    const array = [
        {
            vote: 5
        },
        {
            vote: 7
        },
        {
            vote: 2
        },
        {
            vote: 2
        },
        {
            vote: 6
        },
        {
            vote: 3
        },
        {
            vote: 1
        },
    ];
    expect(utils.paginate(2, array)).toEqual([
        {
            vote: 3
        },
        {
            vote: 1
        }
    ]);
});
