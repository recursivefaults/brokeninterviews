
export const searchCompanies = (searchTerm) => {
    let companies = [
        {
            _id: 'boopboop',
            name: 'Some Company',
            grade: 'F',
            update: '01-02-2021',
            question_count: 2344,
            experience_count: 2344
        },
        {
            _id: 'boopboop',
            name: 'Other Company',
            grade: 'A',
            update: '01-02-2021',
            question_count: 2344,
            experience_count: 2344
        }
    ];

    if(searchTerm) {
        return companies.filter((c) => c.name === searchTerm);
    }
    return companies;

}


export const fetchCompanyDetails = (id) => {

    return {
        name: 'Some Company',
        updated: '01-02-2021',
        grade: 'F',
        questions: [
            {
                _id: 'aac',
                question: 'What is prototypical inheritance in javascript',
                updated: '01-02-2021',
                stage: 'Phone Screen',
                score: 220,
                role: 'Front-End Engineer'
            },
            {
                _id:'aab',
                question: 'What is prototypical inheritance in javascript',
                updated: '01-02-2021',
                stage: 'HR Interview',
                score: -23,
                role: 'Front-End Engineer'
            },
            {
                _id: 'aaa',
                question: 'What is prototypical inheritance in javascript',
                updated: '01-02-2021',
                stage: 'Technical Interview',
                score: 33,
                role: 'Front-End Engineer'
            }
        ],
        experiences: [
            {
                _id: 'aaa',
                story: "lorem ipsum",
                created: '01-02-2021',
                contact: false,
                username: 'snuggles'
            },
            {
                _id: 'aab',
                story: "lorem ipsum",
                created: '01-02-2021',
                contact: true,
                username: 'helper'
            },
        ]
    };
};
