import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic&display=swap');

    html,
    body {
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        padding: 0;
        margin: 0;
        font-family: -apple-system,'Montserrat', sans-serif;
    }

    .text {
        color: ${({theme}) => theme.text};
    }

    .text-primary {
        color: ${({theme}) => theme.primary} !important;
    }

    .text-brand {
        color: ${({theme}) => theme.primary} !important;
        font-size: 50px;
    }

    .search {
        background-color: ${({theme}) => theme.background};
        border: none;
        border-radius: 10px;
        position: -webkit-sticky !important; /* Safari & IE */
        position: sticky !important;
        top: 0;
    }

    .search:focus {
        background-color: ${({theme}) => theme.background};
        border: none;
        position: -webkit-sticky !important; /* Safari & IE */
        position: sticky !important;
        top: 0;
    }

    .my-bg{
        background-color: ${({theme}) => theme.background};
    }

    .my-rounded{
        border-radius: 10px;
    }

    .text-desc-surah{
        font-size: 12px;
    }

    .arabic{
        font-family: 'Al Qalam Quran';        
    }

    .arabic-number{
        font-family: 'Noto Naskh Arabic';
    }

    @font-face {
        font-family: 'Al Qalam Quran';
        src: url('/fonts/quran.ttf');
    }


    .bg-primary{
        background-color: ${({theme}) => theme.primary} !important;
    }

    .translate{
        font-size: 12px;

    }

    .search-div{

    }

    .back:hover{
        cursor: pointer;
    }

    .carousel{
        overflow: hidden;
    }

`

export {
    GlobalStyles
}