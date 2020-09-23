let apiclient = (()=>{
    const URL = "http://localhost:8080/cinemas";
    return{
        getFunctionsByCinema(cinemaName, callback){
            $.get(`${URL}/${cinemaName}`, callback);
        },
        getFunctionsByCinemaAndDate(cinemaName, date, callback){
            $.get(`${URL}/${cinemaName}/${date}`, callback);
        }
    }
})();