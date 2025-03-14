const fields = {
    username: {
        type: 'text',
        name: 'username',
        label: 'Name:',
        placeholder: 'Your name',
    },
    email: {
        type: 'email',
        name: 'email',
        label: 'Email:',
        placeholder: 'user@mail.com',
    },
    birthday: {
        type: 'date',
        name: 'birthday',
        label: 'Birthday:',
        placeholder: '00.00.0000',
    },
    phone: {
        type: 'tel',
        name: 'phone',
        label: 'Phone:',
        placeholder: '+38000000000',
    },
    city: {
        type: 'text',
        name: 'city',
        label: 'City:',
        placeholder: 'Kyiv',
    },
};

export default fields;
