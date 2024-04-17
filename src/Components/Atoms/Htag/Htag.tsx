import React from 'react';

export const Htag: React.FC<{ Hcontent: string; Hindex: number }> = ({ Hcontent, Hindex }) => {
    const handleHtag = (Hindex: number, Hcontent: string) => {
        const Htag: { [key: number]: JSX.Element } = {
            1: <h1>{Hcontent}</h1>,
            2: <h2>{Hcontent}</h2>,
            3: <h3>{Hcontent}</h3>,
            4: <h4>{Hcontent}</h4>,
            5: <h5>{Hcontent}</h5>,
            6: <h6>{Hcontent}</h6>,
        };
        return Htag[Hindex] || null;
    };

    return <div>{handleHtag(Hindex, Hcontent)}</div>;
};