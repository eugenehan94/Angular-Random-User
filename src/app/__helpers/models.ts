export interface LinkOneUser {
    dob: {
        date: string,
        age: number
    },
    email: string,
    name: {
        first: string,
        last: string,
        title: string
    },
    picture: {
        large: string
    },
    location: {
        street: {
            name: string,
            number: number
        }
    },
    phone: string
}

export interface LinkTwoUser {
    first_name: string,
    last_name: string,
    email: string,
}