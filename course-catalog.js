// An array of objects
const courses = [
    {
        title: "Web Full-Stack Development",
        description: "Learn full stack development on JavaScript and build end-to end dynamic websites.",
        thumbnail: "../assets/images/web-dev.jpg",
        category: "web-full-stack-development",
        link: "course-details.html#1"
    },
    {
        title: "Android Development",
        description: "Learn Android development on Java and Kotlin.",
        thumbnail: "../assets/images/android-dev.jpg",
        category: "android-development",
        link: "course-details.html#2"
    },
    {
        title: "IOS Development",
        description: "Learn IOS development on Swift.",
        thumbnail: "../assets/images/ios-dev.jpg",
        category: "ios-development",
        link: "course-details.html#3"
    },
    {
        title: "Game Development",
        description: "Learn Game development on Unity and C#.",
        thumbnail: "../assets/images/game-dev.jpg",
        category: "game-development",
        link: "course-details.html#4"
    },
    {
        title: "Data Science",
        description: "An introduction to data science and machine learning concepts.",
        thumbnail: "../assets/images/data-science.jpg",
        category: "data-science",
        link: "course-details.html#5"
    },
    {
        title: "Cybersecurity Basics",
        description: "Understand cybersecurity fundamentals to protect systems and data.",
        thumbnail: "../assets/images/cybersecurity-basics.jpeg",
        category: "cybersecurity",
        link: "course-details.html#6"
    }
];

function generateCourses(filterCategory)
{
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = ""; // Clears existing courses

    // Filters courses based on category. If value "all" is true then all the courses are displayed. If false, then arrow function filters
    // courses and displays the one which is selected 
    const filteredCourses = filterCategory === "all" ? courses : courses.filter(course => course.category === filterCategory);

    // Generates HTML for each course
    filteredCourses.forEach(course =>
    {
        courseList.innerHTML += `
            <div class="course-card">
                <img src="${course.thumbnail}" alt="${course.title}">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <a href="${course.link}" class="learn-more">Learn More</a>
            </div>
        `;
    });
}

document.getElementById("category").addEventListener("change", (event) => {
    const selectedCategory = event.target.value;
    generateCourses(selectedCategory);
});