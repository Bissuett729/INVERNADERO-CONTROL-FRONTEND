export type USER_RESPONSE_INTERFACE = {
    _id:           string;
    name:          string;
    email:         string;
    password:      string;
    notifications: any[];
    active:        boolean;
    register_at:   Date;
    __v:           number;
}
