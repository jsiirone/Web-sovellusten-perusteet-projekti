let moviesArray = [];
let filteredMoviesArray = [];
const filmData = 'filmdata.json';

initializePage(filmData);


async function initializePage(filmData) {
    setInterval(intervalUpdater, 1000*60*5);
  try {
    let fetchedFilmData = await fetchDataFromDatabase(filmData);
    updateTable(fetchedFilmData);
    let releaseYears = getReleaseYears(fetchedFilmData);
    createCheckboxes(releaseYears);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
  }
}

async function fetchDataFromDatabase(filmDataToFetch) {
  try {
    const response = await fetch(filmDataToFetch);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    moviesArray = Object.values(data.movies);
    return moviesArray;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
}

function intervalUpdater() {
    fetchDataFromDatabase(filmData);
  }

function updateTable(movielist) {
        let numberOfMovies = document.getElementById('header-numberofmovies');
        numberOfMovies.innerHTML="Tietokannassa tällä hetkellä " + moviesArray.length + " elokuvaa.";

        const tableBody = document.getElementById('tableBody');
        tableBody.innerHTML = '';
        
        movielist.forEach(movie => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${movie.originalName || ''}</td>
                <td>${movie.englishName || ''}</td>
                <td>${movie.finnishName || ''}</td>
                <td>${movie.releaseYear || ''}</td>
                <td>${movie.director || ''}</td>
                <td>${movie.country || ''}</td>
                <td>${movie.ageRating || ''}</td>
                <td>${movie.inspectionDate || ''}</td>
                <td>${movie.inspectionReason || ''}</td>
                <td>${movie.finnishPremiere || ''}</td>
            `;
            tableBody.appendChild(row);
        });
    }
        

function getReleaseYears(moviesArray) {
        let releaseYearsSet = new Set();
        moviesArray.forEach(function(movie) {
            releaseYearsSet.add(movie.releaseYear);
        });
    
        let releaseYearsArray = Array.from(releaseYearsSet);    
        releaseYearsArray.sort(function(a, b) {
            return a - b;
        });
    
        return releaseYearsArray;
    }
    

function createCheckboxes(years) {
        let checkboxContainer = document.getElementById('releaseYears');
        checkboxContainer.innerHTML = '';
   
        years.forEach(function(year) {
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'year-' + year;
        checkbox.value = year;

        let label = document.createElement('label');
        label.htmlFor = 'year-' + year;
        label.textContent = year;

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
        checkboxContainer.appendChild(document.createElement('br'));
    });
}

function sortTable(key) {
    moviesArray.sort((a, b) => {
        const valueA = a[key] || '';
        const valueB = b[key] || '';
        return valueA.localeCompare(valueB);
    });

    filteredMoviesArray.sort((a, b) => {
        const valueA = a[key] || '';
        const valueB = b[key] || '';
        return valueA.localeCompare(valueB);
    });

    if (filteredMoviesArray.length === 0) updateTable(moviesArray);
    else updateTable(filteredMoviesArray);
}

function checkboxDaemon() {
    filteredMoviesArray = [];
    let checkedBoxes = document.querySelectorAll('#releaseYears input[type="checkbox"]:checked');
    let checkedValuesArray = [];
    
    checkedBoxes.forEach(function(checkbox) {
        checkedValuesArray.push(checkbox.value);
    });

    //console.log(checkedValuesArray);
    filterMoviesByReleaseYear(checkedValuesArray);
}

function filterMoviesByReleaseYear(checkedValuesArray) {
    
    moviesArray.forEach(function(movie) {
        if (checkedValuesArray.includes(movie.releaseYear)) {
            filteredMoviesArray.push(movie);
        }
    });

    //console.log(filteredMoviesArray);
    updateTable(filteredMoviesArray);
}

function resetFilters() {
    let checkedBoxes = document.querySelectorAll('#releaseYears input[type="checkbox"]');
    checkedBoxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
    checkboxDaemon();
    updateTable(moviesArray);
}

// Event listeners

        //table headers
        document.querySelectorAll('th').forEach(header => {
            header.addEventListener('click', () => {
                const key = header.getAttribute('data-key');
                sortTable(key);
            });
        });

        //checkboxes
        document.getElementById('releaseYears').addEventListener('click', function(event) {
            if (event.target && event.target.type === 'checkbox') {
                checkboxDaemon();
            }
        });

        //buttons
        document.getElementById("resetFiltersButton").onclick = function() {resetFilters()};

        document.getElementById("backToTopButton").onclick = function() {topFunction()};

        document.getElementById("aboutPageButton").onclick = function() {
            document.getElementById('aboutCensorshipText').style.display = "none";
            document.getElementById('aboutFurtherReadingText').style.display = "none";
            document.getElementById('aboutMeText').style.display = "none";
            document.getElementById('contactForm').style.display = "none";
            document.getElementById('aboutPageText').style.display = "block";
        };

        document.getElementById("aboutCensorshipButton").onclick = function() {
            document.getElementById('aboutCensorshipText').style.display = "block";
            document.getElementById('aboutFurtherReadingText').style.display = "none";
            document.getElementById('aboutMeText').style.display = "none";
            document.getElementById('contactForm').style.display = "none";
            document.getElementById('aboutPageText').style.display = "none";
        };

        document.getElementById("aboutFurtherReadingButton").onclick = function() {
            document.getElementById('aboutCensorshipText').style.display = "none";
            document.getElementById('aboutFurtherReadingText').style.display = "block";
            document.getElementById('aboutMeText').style.display = "none";
            document.getElementById('contactForm').style.display = "none";
            document.getElementById('aboutPageText').style.display = "none";
        };

        document.getElementById("aboutMeButton").onclick = function() {
            document.getElementById('aboutCensorshipText').style.display = "none";
            document.getElementById('aboutFurtherReadingText').style.display = "none";
            document.getElementById('aboutMeText').style.display = "block";
            document.getElementById('contactForm').style.display = "none";
            document.getElementById('aboutPageText').style.display = "none";
        };

        document.getElementById("aboutContactButton").onclick = function() {
            document.getElementById('aboutCensorshipText').style.display = "none";
            document.getElementById('aboutFurtherReadingText').style.display = "none";
            document.getElementById('aboutMeText').style.display = "none";
            document.getElementById('contactForm').style.display = "block";
            document.getElementById('aboutPageText').style.display = "none";

        };        

        //backtotop
        let backToTopButton = document.getElementById("backToTopButton");

        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            backToTopButton.style.display = "block";
          } else {
            backToTopButton.style.display = "none";
          }
        }
        
        function topFunction() {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
          