export interface IVolunteer {
    _id: string;
    fullName: string;
    telephone: string;
    age: number;
    gender: string;
    specialNeeds: string;
    coverLetter: string;
    idOfProject: string;
    _acl: {
        creator: string;
    };
    _kmd: {
        lmt: string;
    };
}
