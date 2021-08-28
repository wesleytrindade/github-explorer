export interface RepositoryItemProps {
    repository:{
        name:string,
        description:string,
        html_url:string,
        owner:{
            login?:string
        }
    }
}


export interface RepositoryListProps{
    listName:string
}