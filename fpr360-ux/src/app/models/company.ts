export interface Company {
    id: string;
    name: string;
    partner?: boolean
}

export interface CompanyList {
    name: string,
    included: boolean,
    active: boolean,
}