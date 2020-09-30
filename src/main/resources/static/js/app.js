app = ( () => {
    const apiModule = apiclient;
    let cinemaName = undefined;
    let date = undefined;
    let cinemaFunction = undefined;
    let cinemaFunctions = [];
    const mapFunctions = data => {
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
    };
    const filterByMovieName = (movieName) => (functions) => {//console.log(movieName, functions);
        return functions.find( f  => f.movie.name.includes(movieName))};
    const insertAdministratorMode = () => {
        const divElement = $('#administrator-section');
        divElement.empty();
        divElement.addClass("administrator-section");
        divElement.append(`
            <br/>
            <h2>Administrator mode</h2>
            <br/>
            <div id="admin-form">
                
            <br/>
            </div>
            <div class="form-inline">
                <button type="button" style="border-radius: 12px" class="button" onclick="app.createNewFunctionAction()">Create new function</button>
                <button type="button" style="border-radius: 12px" class="button" onclick="app.deleteFunction()">Delete function</button>
            </div>
            <br/>
        `);
    };
    const eraseAminMode = () => {
        let divElement = $("#administrator-section");
        divElement.removeClass();
        divElement.empty();
    };
    const insertAvailabilitySection = () => {
      let divElement = $("#availability-section");
      divElement.append(`
        <h2 id="availability"></h2>
            <canvas id="myCanvas" width="700" height="380" style="border: 1px solid #000000">

            </canvas>
      `);
    };
    const eraseCanvas = () => {
        let divElement = $("#availability-section");
        divElement.empty();
    };
    const cleanAdminForm = () => $("#admin-form").empty();
    const insertCreateForm = () => {
        let divElement = $("#admin-form");
        divElement.append(`
            <form class="form-inline">
                <label for="movieName">Movie:</label>
                <input type="text" id="movieName" placeholder="movie" name="movieName" style="width: 15%">
                <label for="genre">Genre:</label>
                <input type="text" id="genre" placeholder="genre" name="genre" style="width: 15%">
                <label for="hour">Hour:</label>
                <input type="text" id="functionHour" placeholder="hour" name="functionHour"  style="width: 15%">
                <button type="button" style="border-radius: 12px" class="button" onclick="app.createFunction($('#movieName').val(), $('#genre').val(), $('#functionHour').val())">Save/update</button>
            </form>
        `);
    };
    const insertUpdateForm = () => {
        let divElement = $("#admin-form");
        divElement.append(`
            <form class="form-inline" >
                    <label for="hour">Edit function:</label>
                    <input type="text" id="hour" placeholder="new hour" name="hour">
                    <button type="button" style="border-radius: 12px" class="button" onclick="app.updateFunction($('#hour').val())">Save/update</button>
                </form>
        `);
    };
    const drawSeats = seats =>{
        const cellSize = 30;
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");

        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'deepskyblue';
        ctx.font = '15px open sans';
        ctx.strokeRect(190, 30, 300, 50);
        for(let i = 0; i < 7; i++){
            let xstep = 0;
            for(let j = 0; j < 12; j++){
                let x = j * cellSize + 100 + xstep;
                let y = i * cellSize + 110;
                if(j === 1 || j === 9) {
                    xstep += cellSize * 2;
                }
                if(j === 0){
                    ctx.strokeText(i + 1, 80, y + 20);
                }
                if(i === 6){
                    ctx.strokeText( j + 1, x + 11, y + 50);
                }
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
            eraseAminMode();
            this.setCinemaName(cinemaName);
            this.setDate(functionDate);
            apiModule.getFunctionsByCinemaAndDate(cinemaName, functionDate, mapFunctions)
        },

        showAvailability(cinemaName, functionDate, movie){
            apiModule.getFunctionsByCinemaAndDate(cinemaName, functionDate,
                functions => {
                    insertAvailabilitySection();
                    let availability = $("#availability");
                    availability.empty();
                    availability.text(`Availability of: ${movie} Movie`);
                    for(fun of functions){
                        if(fun.movie.name === movie){
                            cinemaFunction = fun;
                            clearCanvas();
                            drawSeats(fun.seats);
                            break;
                        }
                    }
                });
            insertAdministratorMode();
            insertUpdateForm();
        },

        updateFunction(newHour){
            const newCinemaFunction = {
                movie: cinemaFunction.movie,
                seats: cinemaFunction.seats,
                date: date + " "+ newHour,
            };
            console.log(newCinemaFunction);
            apiModule.putFunction(cinemaName, newCinemaFunction,() => this.updateFunctions(cinemaName, date))
        },

        createFunction(name, genre, hour){
            let seats = [[false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false, false, false, false]];
            const movie = {
              name: name,
              genre: genre,
            };
            const newCinemaFunction = {
                    movie: movie,
                    seats: seats,
                    date: date + " "+hour
            };
            apiModule.postFunction(cinemaName, newCinemaFunction, () => {
                this.updateFunctions(cinemaName, date);
                cleanAdminForm();
                insertUpdateForm();
            });
        },

        createNewFunctionAction(){
            eraseCanvas();
            cleanAdminForm();
            insertCreateForm();
        },

        deleteFunction() {
            eraseCanvas();
            apiModule.deleteFunction(cinemaName, cinemaFunction.date, cinemaFunction.movie.name, () => this.updateFunctions(cinemaName, date));
        }
    }
})();