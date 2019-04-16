export interface IProject {
    _id: string;
    place: string;
    title: string;
    description: string;
    objectives: string;
    participantsProfile: string;
    partnerCountries: string;
    travelCost: number;
    fee: number;
    _acl: {
        creator: string;
    };
    _kmd: {
        lmt: string;
    };
}
