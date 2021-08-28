import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

const apiUrl = "https://api.github.com/users/wesleytrindade/repos"

import '../styles/repositories.scss';
import { RepositoryItemProps, RepositoryListProps } from "../interfaces";

interface Repository{
    name:string,
    description:string,
    html_url:string,
    owner:{
        login:string
    }
}
export function RepositoryList(props:RepositoryListProps) {

    
    const [isLoaded, setLoaded] = useState(false);
    const fetchRepository = function () {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setRepository(data);
                setLoaded(true);
            })
    }

    const [repository, setRepository] = useState<Array<Repository>>([]);
    useEffect(() => { fetchRepository() }, []);

    if (isLoaded) {
        return (
            <section className="repository-list">
                <h1>Lista de repositórios - {repository ? repository[0].owner.login : "Usuario"} </h1>

                <ul>
                    {repository.map(rep => {
                        return <RepositoryItem key={rep.name} repository={rep} />
                    })}
                </ul>
            </section>
        )
    }
    return (<section className="loader-container">
        <h1>Carregando </h1>
        <div className="loader" />
    </section>)
}