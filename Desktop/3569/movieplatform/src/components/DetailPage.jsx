import styled from 'styled-components';
import data from '../assets/data/movieDetailData.json';
import { imageUrl } from './config';

const MovieBox = styled.div`
    display: flex;
    gap: 24px;
    padding: 70px;
    min-width: 600px;
    justify-content: center;
    background-color: #a9a9a95f;
    border-radius: 17px;
`

const Poster = styled.img`
    width: 300px;
    border-radius: 12px;
`

const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
` 

const TitleRating = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    max-width: 300px;
`

const Genre = styled.div`
    font-size: 16px;
    color: white;
`

const Overview = styled.p`
    font-size: 15px;
    line-height: 1.6;
    max-width: 500px;
    color: white;
`

function DetailPage () {
    

    return (
        <>
            <MovieBox>
                <Poster
                src= {imageUrl + data.poster_path} alt={data.title}/>

                <MovieInfo>
                    <TitleRating>
                        <h2>{data.title}</h2>
                        <span>평점: {data.vote_average}</span>
                    </TitleRating>
                    <Genre>{data.genres.map(genre => genre.name).join(',')}</Genre>
                    <Overview>{data.overview}</Overview>
                </MovieInfo>
            </MovieBox>
        </>
    )

}


export default DetailPage;