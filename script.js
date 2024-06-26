const colleges = [
    
        {   "rating": "#1",
            "name": "IIT Madras - Indian Institute of Technology",
            "logo": "https://th.bing.com/th/id/R.ccde7d5d992a9498c6a7c3f9faf88dbb?rik=OW939N94pXsXPQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fen%2fthumb%2f6%2f69%2fIIT_Madras_Logo.svg%2f1024px-IIT_Madras_Logo.svg.png&ehk=D%2bFY%2bZoYWViKvG5KuksZ2AL5V45tV93T2qbGEujXdVw%3d&risl=&pid=ImgRaw&r=0",
            "fees": "₹209,550",
            "placementsavg": "97402383 ",
            "placementsmax": "23908437 ",
            "userReviewRating": "10/10",
            "Ranking": "#1 out of 200 in India 2023",
            "rankinglogo": "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=39.2&mode=stretch"

        },
        {   "rating": "#2",
            "name": "IIT Kharagpur - Indian Institute of Technology",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/IIT_Kharagpur_Logo.svg/268px-IIT_Kharagpur_Logo.svg.png",
            "fees": "₹223,600",
            "placementsavg": "97402383 ",
            "placementsmax": "23908437 ",
            "userReviewRating": "9.9/10",
            "Ranking": "#4 out of 281 in India 2023",
            "rankinglogo": "https://images.collegedunia.com/public/college_data/images/agencyLogo/india_today_1569843914.png?h=20&w=39.2&mode=stretch"

        },
        {   "rating": "#3",
            "name": "IIMA - Indian Institute of Management",
            "logo": "https://images.collegedunia.com/public/college_data/images/logos/1701684988Screenshot20231204at3.46.10PM.png?h=80&w=80&mode=stretch",
            "fees": "₹120,360",
            "placementsavg": "97402383 ",
            "placementsmax": "23908437 ",
            "userReviewRating": "9.9/10",
            "Ranking": "#2 out of 50 in India 2019",
            "rankinglogo": "https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&w=39.2&mode=stretch"

        },
        {   "rating": "#4",
            "name": "IIM - Bangalore - Indian Institute of Management",
            "logo": "https://th.bing.com/th/id/OIP.oBaVQt1N85uj0Doqr6v6egAAAA?rs=1&pid=ImgDetMain",
            "fees": "₹3,396,000",
            "placementsavg": "97402383 ",
            "placementsmax": "23908437 ",
            "userReviewRating": "9.9/10",
            "Ranking": "#1 out of 50 in India 2019",
            "rankinglogo": "https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&w=39.2&mode=stretch"

        },
        {   "rating": "#5",
            "name": "IIMC -Indian Institute of Management",
            "logo": "https://images.collegedunia.com/public/college_data/images/logos/1488950580d2.png?h=30&w=30&mode=stretch",
            "fees": "₹3,100,000",
            "placementsavg": "97402383 ",
            "placementsmax": "23908437 ",
            "userReviewRating": "9.9/10",
            "Ranking": "#99 out of 200 in India 2023",
            "rankinglogo": "https://images.collegedunia.com/public/college_data/images/agencyLogo/nirf1569843987.png?h=20&w=39.2&mode=stretch"

        },
        {   "rating": "#6",
            "name": "IIT Delhi - Indian Institute of Technology",
            "logo": "https://images.collegedunia.com/public/college_data/images/logos/col27802.gif?h=30&w=30&mode=stretch",
            "fees": "₹254,650",
            "placementsavg": "97402383 ",
            "placementsmax": "23908437 ",
            "userReviewRating": "9.9/10",
            "Ranking": "#1 out of 200 in India 2023",
            "rankinglogo": "https://images.collegedunia.com/public/college_data/images/agencyLogo/india_today_1569843914.png?h=20&w=39.2&mode=stretch"

        },
        {   "rating": "#7",
            "name": "XLRI",
            "logo": "https://images.collegedunia.com/public/college_data/images/logos/14812651193.jpg?h=30&w=30&mode=stretch",
            "fees": "₹400,000",
            "placementsavg": "97402383 ",
            "placementsmax": "23908437 ",
            "userReviewRating": "9.9/10",
            "Ranking": "#1 out of 80 in India 2021",
            "rankinglogo": "https://images.collegedunia.com/public/college_data/images/agencyLogo/what_does_the_times_of_india_logo_stand_for_quora_india_emblam_602_2471600316640.jpg?h=20&w=39.2&mode=stretch"

        },
        {   "rating": "#8",
            "name": "IIT Bombay - Indian Institute of Technology",
            "logo": "https://images.collegedunia.com/public/college_data/images/logos/1431953162ccgsygdygw.jpg?h=30&w=30&mode=stretch",
            "fees": "₹39,700",
            "placementsavg": "97402383 ",
            "placementsmax": "23908437 ",
            "userReviewRating": "9.9/10",
            "Ranking": "#2 out of 281 in India 2023",
            "rankinglogo": "https://images.collegedunia.com/public/college_data/images/agencyLogo/india_today_1569843914.png?h=20&w=39.2&mode=stretch"

        },
        {   "rating": "#9",
            "name": "FMS Delhi Faculty of Management Studies",
            "logo": "https://images.collegedunia.com/public/college_data/images/logos/1389689790logo.gif?h=30&w=30&mode=stretch",
            "fees": "₹100,000",
            "placementsavg": "97402383 ",
            "placementsmax": "23908437 ",
            "userReviewRating": "9.9/10",
            "Ranking": "#35 out of 50 in India 2019",
            "rankinglogo": "https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&w=39.2&mode=stretch"

        },
        {   "rating": "#10",
            "name": "SP Jain",
            "logo": "https://images.collegedunia.com/public/college_data/images/logos/1667475461Untitled.png?h=80&w=80&mode=stretch",
            "fees": "₹900,000",
            "placementsavg": "97402383 ",
            "placementsmax": "23908437 ",
            "userReviewRating": "9.9/10",
            "Ranking": "#16 out of 50 in India 2019",
            "rankinglogo": "https://images.collegedunia.com/public/college_data/images/agencyLogo/resize_1600160678372292574financialexpresslogo1600160698.png?h=20&w=39.2&mode=stretch"
        },
        
    
    
    // Add more colleges as needed
];


const tableBody = document.getElementById('collegeBody');
const searchInput = document.getElementById('searchInput');

// Function to generate table rows
function generateRows() {
    tableBody.innerHTML = '';
    colleges.forEach(college => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${college.rating}</td>
            <td><img src="${college.logo}" alt="${college.name} Logo" style="width: 30px; height: 30px; vertical-align: middle;"> ${college.name}</td>
            <td>${college.fees}</td>
            <td>${college.placementsavg}<p>Average placements</p> ${college.placementsmax} <p>Heighest Placement</p></td>
            <td>⭐${college.userReviewRating}</td>
            <td> <img src="${college.rankinglogo}" style="width: 30px; height: 30px; vertical-align: middle;"> ${college.Ranking}</td>
        `;
        tableBody.appendChild(row);
    });



}

// Get the table header element
const tableHeader = document.querySelector('#collegeTable thead');

// Add event listener to window scroll event
window.addEventListener('scroll', function() {
    // Check if the scroll position is greater than the top offset of the table
    if (window.scrollY > tableHeader.offsetTop) {
        // Fix the table header by adding a class
        tableHeader.classList.add('fixed-header');
    } else {
        // Remove the fixed header class when scrolling back to the top
        tableHeader.classList.remove('fixed-header');
    }
});


// Function to filter colleges by name
// Function to filter colleges by name
function filterByName() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const sortedColleges = colleges.sort((a, b) => {
        // Compare if the name includes the search term
        const includesTermA = a.name.toLowerCase().includes(searchTerm);
        const includesTermB = b.name.toLowerCase().includes(searchTerm);
        // If both include or exclude the term, keep the original order
        if (includesTermA === includesTermB) return 0;
        // Otherwise, prioritize the one that includes the term
        return includesTermA ? -1 : 1;
    });
    generateRows(sortedColleges);
}

// Event listener for search input
searchInput.addEventListener('input', filterByName);


// Event listener for search input
searchInput.addEventListener('input', filterByName);


// Initial render
generateRows();

// Function to filter colleges by name
function filterByName() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredColleges = colleges.filter(college => college.name.toLowerCase().includes(searchTerm));
    generateRows(filteredColleges);
}

// Event listener for search input
searchInput.addEventListener('input', filterByName);
