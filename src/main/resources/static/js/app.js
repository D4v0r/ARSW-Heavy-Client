app = ( () => {
    let cinemaName = undefined;
    let date = undefined;
    let cinemaFunctions = [];

    return{
        setCinemaName(newName){
            cinemaName = newName;
        },

        setDate(newDate){
            date = newDate;
        },

        updateFunctions(cinemaName, functionDate){
            apimock.getFunctionsByCinemaAndDate(cinemaName, functionDate,
                    data => {
               cinemaFunctions = data.map(({movie:{name: name, genre: genre}, date: date}) => (
                    {
                        name: name,
                        genre:genre,
                        hour: date.split(" ")[1],
                    })
                );
               $("#functionsTable").empty();
                 cinemaFunctions.forEach(({name, genre, hour}) => {
                     $("#functionsTable").append(`<tr><td>${name}</td><td>${genre}</td><td>${hour}</td><td>open</td>></tr>`);
                    });
            })
        }
    }
})();