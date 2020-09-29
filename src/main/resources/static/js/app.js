app = ( () => {
    const apiModule = apiclient;
    let cinemaName = undefined;
    let date = undefined;
    let cinemaFunctions = [];
    const filterByMovieName = (movieName) => (functions) => {//console.log(movieName, functions);
        return functions.find( f  => f.movie.name.includes(movieName))};
    const drawSeats = seats =>{
        const cellSize = 30;
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");

        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'deepskyblue';

        for(let i = 0; i < 7; i++){
            for(let j = 0; j < 12; j++){
                let x = j * cellSize;
                let y = i * cellSize;
                if(j === 2 || j === 10) x *= 2;
                if(seats[i][j]){
                    ctx.fillRect( x, y, cellSize, cellSize);
                } else{
                    ctx.clearRect(x, y, cellSize, cellSize);
                }
                ctx.strokeRect( x, y, cellSize, cellSize);
            }
        }
    };
    const clearCanvas = () => {
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
    };

    return{

        setCinemaName(newName){
            cinemaName = newName;
        },

        setDate(newDate){
            date = newDate;
        },

        updateFunctions(cinemaName, functionDate){
            apiModule.getFunctionsByCinemaAndDate(cinemaName, functionDate,
                data => {
                    cinemaFunctions = data.map(({movie:{name: name, genre: genre}, date: date}) => (
                        {
                            name: name,
                            genre:genre,
                            hour: date.split(" ")[1],
                        })
                    );
                    $("#functionsTable").empty();
                    $("#selected-cinema").text("Cinema Selected:  " + cinemaName);
                    $("#movies").text("Movies: ");
                    cinemaFunctions.forEach(({name:movie, genre, hour}) => {
                        $("#functionsTable").append(
                            `<tr>
                            <td>${movie}</td>
                            <td>${genre}</td><td>${hour}</td>
                            <td><button type="button" onclick='app.showAvailability("${cinemaName}", $("#date").val(), "${movie}" )'>Open seats</button></td>>
                         </tr>`);
                    });
                })
        },

        showAvailability(cinemaName, functionDate, movie){
            console.log(cinemaName);
            apiModule.getFunctionsByCinemaAndDate(cinemaName, functionDate,
                functions => {
                    let availability = $("#availability");
                    availability.empty();
                    availability.text(`Availability of: ${movie} Movie`);
                    for(fun of functions){
                        if(fun.movie.name === movie){
                            clearCanvas();
                            drawSeats(fun.seats);
                            break;
                        }
                    }
                });
        },
    }
})();