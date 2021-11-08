export interface APIBaseBody<DataType, AuxType> {
    _t?:      string;
    rc?:     string;
    result?: Result<DataType, AuxType>;
}

interface Result<DataType, AuxType> {
    data?:   DataType;
    aux?:    AuxType;
    serial?: string;
}
