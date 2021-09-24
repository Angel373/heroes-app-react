import React, { useMemo } from 'react';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router';
import { getHeroesbyName } from '../../selectors/getHeroesbyName';

export const SearchScreen = ({history}) => {
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [{value}, handleInputChange] = useForm({
        value: q
    });

    const heroesFiltered = useMemo(() => getHeroesbyName(q), [q]);


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${value}`);
    };
    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your here"
                            className="form-control"
                            value={value}
                            autoComplete="off"
                            name="value"
                            onChange={handleInputChange}
                        />

                        <button 
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>

                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={hero.id} 
                                { ...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
