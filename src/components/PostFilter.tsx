import React from 'react';
import './Post.css'
import MyButton from "./UI/button/MyButton";
import MySelect from "./UI/select/MySelect";

interface IFilter{
    filter: any
    setFilter: Function
}
const PostFilter: React.FC<IFilter> = ({filter, setFilter}) => {



    return (
        <div style={{
            // display: 'flex',
            // alignItems: 'center',
            // alignContent: 'center'
        }}>

            <input
                style={{width: '50%'}}
                className={'blogInput'}
                type="text"
                placeholder={"Search..."}
                value={filter.search}
                onChange={event => setFilter({...filter, search: event.target.value})}
            />

            <MySelect
                value={filter.sort}
                // select возвращает не е, а уже выбранный алгоритм сортировки
                // @ts-ignore
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка по' options={[
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По содержанию'},
            ]}/>
            <MyButton  style={{paddingTop: 18, paddingBottom: 14, width: 120 }}>Search...</MyButton>
        </div>
    );
};

export default PostFilter;